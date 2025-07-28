import React, { useState } from 'react';
import './FilterTrip.css';
import ic_filter_grey from '../../assets/images/ic_filter_grey.svg';
import ic_arrow_up from '../../assets/images/arrow-up.png';
import ic_arrow_down from '../../assets/images/arrow-down.png'


const dateList = [
  { label: 'T6', date: '29/3' },
  { label: 'T7', date: '30/3' },
  { label: 'CN', date: '31/3' },
  { label: 'T2', date: '01/4' },
  { label: 'T3', date: '02/4' },
  { label: 'T4', date: '03/4' },
  { label: 'T5', date: '04/4' },
  { label: 'T6', date: '05/4' },
  { label: 'T7', date: '06/4' },
  { label: 'CN', date: '07/4' },
];

export default function FilterTrip() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [activeIndexFilter, setActiveIndexFilter] = useState(0);
  const [iconStates, setIconStates] = useState(true);//true la di len false la di xuong
  const filters = ['Giờ chạy', 'Giá vé', 'Đánh giá'];

  const handleFilterButton = (index) => {
    if (index === activeIndexFilter) {
      setIconStates(!iconStates);
    } else {
      setIconStates(true);
      setActiveIndexFilter(index);
    }
  }
  return (
    <div className="container">
      <div className="date-scroll">
        {dateList.map((item, index) => (
          <div
            key={index}
            className={`day ${index === selectedIndex ? 'selected' : ''}`}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="label">{item.label}</div>
            <div className="date">{item.date}</div>
          </div>
        ))}
      </div>

      <div className="filters">
        <div>
          {filters.map((filter, index) => (
          <button
            key={index}
            className={`filter-btn ${filter === filters[activeIndexFilter] ? 'active' : ''}`}
            onClick={() => handleFilterButton(index)}
          >
            {filter === filters[activeIndexFilter] ? 
              (<div className='horizontal'>
                <span>{filter}</span>
                {
                  iconStates ? (<img src={ic_arrow_up} alt='ic_filter_down'className='icon'/>): 
                  (<img src={ic_arrow_down} alt='ic_filter_down'className='icon'/>)
                }
              </div>)
               : <span>{filter}</span>}
          </button>
        ))}
        </div>
        <button className='filter-btn'>
          <div className='horizontal' style={{gap:"5px"}}>
            <span>Lọc</span>
            <img src={ic_filter_grey} alt='ic_filter_grey'/>
          </div>
          </button>
      </div>
    </div>
  );
}
