import CardBus from "../../../Component/CardBus/CardBus";
import DateSortTrip from "../../../Component/DateSortTrip/DateSortTrip";
import './SelectTripDisplay.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { filterTripsByDateAction, initOperatorList, setLoading, sortTripsByTypeAction, initTypeBusList } from "../../../store/reducers/tripsSlice";
import { View } from "@vnxjs/components";
import debounce from 'lodash.debounce';
import {useMemo, useRef} from 'react';



const dateList = [
    { label: 'T6', date: '20/3' },
    { label: 'T7', date: '21/3' },
    { label: 'CN', date: '22/3' },
    { label: 'T2', date: '23/4' },
    { label: 'T3', date: '24/4' },
    { label: 'T4', date: '25/4' },
    { label: 'T5', date: '26/4' },
    { label: 'T6', date: '27/4' },
    { label: 'T7', date: '28/4' },
    { label: 'CN', date: '29/4' },
  ];
  const sortTypes = ['Giờ chạy', 'Giá vé', 'Đánh giá'];
 
export default function SelectTripDisplay() {  
  const dispatch = useDispatch();
  const selectedIndex = useSelector(state => state.dateSort.selectedIndex);
  const activeIndexSortType = useSelector(state => state.dateSort.activeIndexSortType);
  const iconStates = useSelector(state => state.dateSort.iconStates);
  const currListBus = useSelector(state => state.trip.busList);
  const loading = useSelector(state => state.trip.loading);
  const scrollRef = useRef(null);
  const [visibleList, setVisibleList] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 20;

  const debouncedDispatch = debounce((dispatch, dateStr) => {
    dispatch(setLoading(true));
    dispatch(filterTripsByDateAction({ dateStr, year: '2024' }));
    dispatch(initOperatorList());
    dispatch(initTypeBusList());
    dispatch(setLoading(false));
  }, 800);
    useEffect(() => {
      const dateStr = dateList[selectedIndex].date;
      debouncedDispatch(dispatch, dateStr);
       return () => {
        debouncedDispatch.cancel();
      };
  }, [selectedIndex, dispatch]);

  const debouncedSort = useMemo(() => debounce((typeIndex, isAsc) => {
    dispatch(setLoading(true));
    dispatch(sortTripsByTypeAction({ typeIndex, isAsc }));
    dispatch(setLoading(false));
  }, 100), [dispatch]);

    useEffect(() => {
      console.log(activeIndexSortType, iconStates);
      debouncedSort(activeIndexSortType, iconStates);
      if (scrollRef.current) {
      scrollRef.current.scrollTop = 0; 
    }
      return () => debouncedSort.cancel();
    }, [activeIndexSortType, iconStates, dispatch]);

    useEffect(() => {
      if (currListBus.length > 0) {
        setVisibleList(currListBus.slice(0, pageSize));
        setPage(1);
      }
    }, [currListBus]);
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el || loading) return;

      const scrollThreshold = 50; // ngưỡng còn lại để load thêm

      if (el.scrollTop + el.clientHeight >= el.scrollHeight - scrollThreshold) {
        const nextPage = page + 1;
        const nextItems = currListBus.slice(0, nextPage * pageSize);

        if (nextItems.length > visibleList.length) {
          setVisibleList(nextItems);
          setPage(nextPage);
        }
      }
    };

   
    return (
        <View className="trip-display-container" >
            <DateSortTrip dateList={dateList} sortTypes={sortTypes}/>
            <View className="list-trip-display" ref={scrollRef} onScroll={handleScroll}>
                {loading ? (
                  <View className="loading">Đang tải chuyến xe...</View>
                ) : (
                  visibleList.map((item) => (
                    <CardBus key={item.uuid} bus={item} />
                  ))
                )}
            </View>
        </View>
    );
};