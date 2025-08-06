import React, { useState } from 'react';
import './DateSortTrip.css';
import ic_sort_grey from '../../assets/images/ic_filter_grey.svg';
import ic_arrow_up from '../../assets/images/arrow-up.png';
import ic_arrow_down from '../../assets/images/arrow-down.png'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedIndex, setSortType, setIndexSortType } from '../../store/reducers/dateSortSlice';
import { Button, Navigator, View, Image, Text, CoverView } from '@vnxjs/components';
import { setFilter } from "../../store/reducers/dateSortSlice";




export default function DateSortTrip({dateList, sortTypes}) {
  const dispatch = useDispatch();
  const selectedIndex = useSelector(state => state.dateSort.selectedIndex);
  const activeIndexSortType = useSelector(state => state.dateSort.activeIndexSortType);
  const iconStates = useSelector(state => state.dateSort.iconStates);
  const isFilter = useSelector(state => state.dateSort.isFilter);
  

  const handleSortButton = (index) => {
    dispatch(setSortType(index));
  };
  return (
  <View>
    <View className="container">
      <View className="date-scroll">
        {dateList.map((item, index) => (
          <View
            key={index}
            className={`day ${index === selectedIndex ? 'selected' : ''}`}
            onClick={() => {dispatch(setSelectedIndex(index)); dispatch(setFilter(false)); dispatch(setIndexSortType())}}
          >
            <View className={`label ${index === selectedIndex ? 'selected' : ''}`}>{item.label}</View>
            <View className={`date ${index === selectedIndex ? 'selected' : ''}`}>{item.date}</View>
          </View>
        ))}
      </View>

      <View className="sortTypes">
        <View className='sortlist-horizontal'>
          {sortTypes.map((sortType, index) => (
            <View>
              <View
                key={index}
                className={`sort-btn ${sortType === sortTypes[activeIndexSortType] ? 'active' : ''}`}
                onClick={() => handleSortButton(index)}
              >
                {sortType === sortTypes[activeIndexSortType] ? (
                  <View className='horizontal-datesort'>
                    <Text className='text-sort-btn'>{sortType}</Text>
                    <Image src={iconStates ? ic_arrow_up : ic_arrow_down} className='icon' alt='ic_sort_up' />             
                  </View>
                ) : (
                  <View className='horizontal'>
                    <Text className='text-sort-btn'>{sortType}</Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>
        <Navigator url="pages/FilterTripPage/FilterTripPage" openType="navigate">
          <View className={`sort-btn ${isFilter ? 'active' : ''}`}>
            <View className='horizontal' style={{gap:"5px"}}>
              <Text className='text-sort-btn'>Lọc</Text>
              <Image src={ic_sort_grey} alt='ic_sort_grey'/>
            </View>
          </View>
        </Navigator>
      </View>
    </View>
  </View>
  );
}
