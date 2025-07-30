import CardBus from "../../../Component/CardBus/CardBus";
import DateSortTrip from "../../../Component/DateSortTrip/DateSortTrip";
import './SelectTripDisplay.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { filterTripsByDateAction, initOperatorList, setLoading, sortTripsByTypeAction } from "../../../store/reducers/tripsSlice";
import { View } from "@vnxjs/components";


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

    useEffect(() => {
      dispatch(setLoading(true));
      setTimeout(() => {
        dispatch(filterTripsByDateAction({
          dateStr: dateList[selectedIndex].date,
          year: "2024"
        }));
        dispatch(initOperatorList())
        dispatch(setLoading(false));

    }, 500); 
  }, [selectedIndex, dispatch]);

    useEffect(() => {
      console.log(activeIndexSortType, iconStates)
      dispatch(setLoading(true));
      setTimeout(() => {
        dispatch(sortTripsByTypeAction({
          typeIndex: activeIndexSortType,
          isAsc: iconStates
        }));
      }, 300);
      dispatch(setLoading(false));
    }, [activeIndexSortType, iconStates, dispatch]);

   
    return (
        <div className="trip-display-container">
            <DateSortTrip dateList={dateList} sortTypes={sortTypes}/>
            <div className="list-trip-display">
                {loading ? (
                  <View className="loading">Đang tải chuyến xe...</View>
                  
                ) : (
                  currListBus?.map((item) => (
                    <CardBus key={item.uuid} bus={item} />
                  ))
                )}
            </div>
        </div>
    );
};