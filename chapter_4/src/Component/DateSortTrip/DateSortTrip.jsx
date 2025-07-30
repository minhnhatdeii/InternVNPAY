import React, { useState } from 'react';
import './DateSortTrip.css';
import ic_sort_grey from '../../assets/images/ic_filter_grey.svg';
import ic_arrow_up from '../../assets/images/arrow-up.png';
import ic_arrow_down from '../../assets/images/arrow-down.png'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedIndex, setSortType } from '../../store/reducers/dateSortSlice';
import { Button, Navigator } from '@vnxjs/components';
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
    <div className="container">
      <div className="date-scroll">
        {dateList.map((item, index) => (
          <div
            key={index}
            className={`day ${index === selectedIndex ? 'selected' : ''}`}
            onClick={() => {dispatch(setSelectedIndex(index)); dispatch(setFilter(false))}}
          >
            <div className="label">{item.label}</div>
            <div className="date">{item.date}</div>
          </div>
        ))}
      </div>

      <div className="sortTypes">
        <div>
          {sortTypes.map((sortType, index) => (
          <button
            key={index}
            className={`sort-btn ${sortType === sortTypes[activeIndexSortType] ? 'active' : ''}`}
            onClick={() => handleSortButton(index)}
          >
            {sortType === sortTypes[activeIndexSortType] ? 
              (<div className='horizontal'>
                <span>{sortType}</span>
                {
                  iconStates ? (<img src={ic_arrow_up} alt='ic_sort_down'className='icon'/>): 
                  (<img src={ic_arrow_down} alt='ic_sort_down'className='icon'/>)
                }
              </div>)
               : <span>{sortType}</span>}
          </button>
        ))}
        </div>
        <Navigator url="pages/FilterTripPage/FilterTripPage" openType="navigate">
          <button className={`sort-btn ${isFilter ? 'active' : ''}`}>
            <div className='horizontal' style={{gap:"5px"}}>
              <span>Lọc</span>
              <img src={ic_sort_grey} alt='ic_sort_grey'/>
            </div>
          </button>
        </Navigator>
      </div>
    </div>
  );
}
