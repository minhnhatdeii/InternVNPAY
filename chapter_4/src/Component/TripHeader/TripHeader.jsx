import React from 'react';
import './TripHeader.css';
import ic_back from '../../assets/images/ic_back.svg';

function TripHeader() {
  return (
    <div className="trip-header">
      <button className="icon-button back-btn">
        <img src={ic_back} alt='back-btn'/>
      </button>
      <div className="trip-info">
        <div className="trip-title">Chọn chuyến đi</div>
        <div className="trip-route">Hồ Chí Minh - Lâm Đồng</div>
      </div>
      <div className="action-buttons">
        <button className="icon-button">⋯</button>
        <div className='btn-tripheader_line'/>
        <button className="icon-button">✕</button>
      </div>
    </div>
  );
};

export default TripHeader;
