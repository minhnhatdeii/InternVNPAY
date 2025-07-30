import React, { useState } from 'react';
import './CardBus.css';
import ic_heart from '../../assets/images/ic_heart.svg';
import ic_heart_selected from '../../assets/images/ic_heart_selected.svg';

const CardBus = ({bus}) => {
  const [isHeart, setHeart] = useState(false);
  function timeDiff(from, to) {
  // Tách giờ và phút
  const [fromHour, fromMin] = from.split(":").map(Number);
  const [toHour, toMin] = to.split(":").map(Number);

  // Đổi về phút
  const fromTotal = fromHour * 60 + fromMin;
  const toTotal = toHour * 60 + toMin;

  // Tính khoảng cách tuyệt đối
  let diff = Math.abs(fromTotal - toTotal);

  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;

  return `${hours} giờ ${minutes} phút`;
}
  return (
    <div className="bus-card">
      <div className="bus-card__header">
        <span className="time">{`${bus.departure_time} ${bus.departure_date}`}</span>
        <span className="duration">{`${timeDiff(bus.departure_time, bus.drop_off_time)}`}</span>
      </div>

      <div className="bus-card__route">
        <span className="location">{bus.merchant_start_point_name}</span>
        <span className="arrow">→</span>
        <span className="location">{bus.merchant_end_point_name}</span>
      </div>
      <div className="bus-card__content">
        <div className='brand-info'>
            <div className='horizontal'>
              <img src={bus.transport_information.image_url} alt="Bus" className="bus-card__image" />
              <div className='vertical'>
                  <span className="brand">{bus.transport_information.name}</span>
                  <span className="rules">Chi tiết quy định</span>
              </div>
            </div>
            <div className='vertical'>
              <div className='horizontal'>
                <span className="rating">{`⭐ ${bus.transport_information.rating}`}</span>
                <button className='favourite-btn' onClick={() => setHeart(!isHeart)}>
                  {!isHeart ? (<img src={ic_heart} alt="heart" />)
                  : (<img src={ic_heart_selected} alt="heart" />)
                }
                </button>
              </div>
              <span className="type">{bus.vehicle_type}</span>
            </div>
        </div>
      </div>
      <div className="bus-card__line"></div>

      <div className="bus-card__footer">
        <div className="price">
          <span>Từ <strong style={{color:"#0C4095"}}>{bus.discount_amount.toLocaleString('en-US')} đ</strong></span>
          <span className="seats-left">Chỉ còn {bus.available_seat} chỗ trống</span>
        </div>
        <button className="continue-btn">Tiếp tục</button>
      </div>
    </div>
    
  );
};

export default CardBus;
