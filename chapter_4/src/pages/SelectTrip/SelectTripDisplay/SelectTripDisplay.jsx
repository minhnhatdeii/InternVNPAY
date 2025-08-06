import CardBus from "../../../Component/CardBus/CardBus";
import DateSortTrip from "../../../Component/DateSortTrip/DateSortTrip";
import './SelectTripDisplay.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { filterTripsByDateAction, initOperatorList, setLoading, sortTripsByTypeAction, initTypeBusList } from "../../../store/reducers/tripsSlice";
import { View } from "@vnxjs/components";
import { resetFilter } from "../../../store/reducers/filterSlice";
import debounce from 'lodash.debounce';
import {useMemo, useRef} from 'react';
import CardBusLoading from "../../../Component/CardBusLoading/CardBusLoading"




function generateDateList(startDateStr) {
  const result = [];
  const startDate = new Date(startDateStr); // Ví dụ: '2025-03-20'

  const dayLabels = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

  for (let i = 0; i < 30; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const dayOfWeek = currentDate.getDay(); // 0 - 6
    const label = dayLabels[dayOfWeek];

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');

    result.push({
      label,
      date: `${day}/${month}`,
    });
  }

  return result;
}
export const dateList = generateDateList('2024-03-20');
const sortTypes = ['Giờ chạy', 'Giá vé', 'Đánh giá'];
 
export default function SelectTripDisplay() {  
  const dispatch = useDispatch();
  const selectedIndex = useSelector(state => state.dateSort.selectedIndex);
  const activeIndexSortType = useSelector(state => state.dateSort.activeIndexSortType);
  const iconStates = useSelector(state => state.dateSort.iconStates);
  const currListBus = useSelector(state => state.trip.busList);
  const loading = useSelector(state => state.trip.loading);
  const hasLoadedSessionRef = useRef(false);



  const scrollRef = useRef(null);
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const windowRange = 1;
  const startIdx = Math.max(0, (page - windowRange - 1) * pageSize);
  const endIdx = Math.min(currListBus.length, (page + windowRange) * pageSize);
  const renderList = currListBus.slice(startIdx, endIdx);


  const debouncedDispatch = useMemo(() =>  debounce((dispatch, dateStr) => {
      dispatch(filterTripsByDateAction({ dateStr, year: '2024' }));
      dispatch(initOperatorList());
      dispatch(initTypeBusList());
      dispatch(resetFilter())
    }),[dispatch]);
    
    useEffect(() => {
      dispatch(setLoading(true));
      const stored = sessionStorage.getItem('tripState');
      const hasSession = stored && JSON.parse(stored)?.busList?.length > 0;
      if (hasSession && !hasLoadedSessionRef.current) {
        hasLoadedSessionRef.current = true; // chỉ load session 1 lần
        return; // không dispatch filter khi vừa load lại
      }
      const dateStr = dateList[selectedIndex].date;
      debouncedDispatch(dispatch, dateStr);
       return () => {
        debouncedDispatch.cancel();
      };
  }, [selectedIndex, dispatch]);

  const debouncedSort = useMemo(() => debounce((typeIndex, isAsc) => {
    dispatch(sortTripsByTypeAction({ typeIndex, isAsc }));
  }), [dispatch]);

    useEffect(() => {
      dispatch(setLoading(true));
      console.log(activeIndexSortType, iconStates);
      debouncedSort(activeIndexSortType, iconStates);
      if (scrollRef.current) {
      scrollRef.current.scrollTop = 0; 
    }
      return () => debouncedSort.cancel();
    }, [activeIndexSortType, iconStates, dispatch]);


    //xu ly thanh cuon
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el || loading) return;

      const scrollThreshold = 50;
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - scrollThreshold) {
        const nextPage = page + 1;
        const maxPage = Math.ceil(currListBus.length / pageSize);

        if (nextPage <= maxPage) {
          setPage(nextPage);
        }
      } else if (el.scrollTop <= scrollThreshold && page > 1) {
        // Cho phép cuộn lên để giảm page
        setPage((prev) => Math.max(1, prev - 1));
      }
    };
    const busState = useSelector((state) => state.trip);
    useEffect(() => {
      sessionStorage.setItem('tripState', JSON.stringify(busState));
    }, [busState]);

   
    return (
        <View className="trip-display-container" >
            <DateSortTrip dateList={dateList} sortTypes={sortTypes}/>
            <View className="top-shadow" />
            <View className="list-trip-display" ref={scrollRef} onScroll={handleScroll}>
              
                {loading ? (
                    Array.from({ length: 2 }).map((_, i) => <CardBusLoading key={i} />)
                ) : (
                    renderList.map((item) => (
                    <CardBus key={item.uuid} bus={item} />
                  ))
                )}  
              
            </View>
        </View>
    );
};