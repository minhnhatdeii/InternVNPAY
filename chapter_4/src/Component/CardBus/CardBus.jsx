import React, { useState } from 'react';
import './CardBus.css';
import ic_heart from '../../assets/images/ic_heart.svg';
import ic_heart_selected from '../../assets/images/ic_heart_selected.svg';

const CardBus = ({bus}) => {
  const [isHeart, setHeart] = useState(false);
  return (
    <div className="bus-card">
      <div className="bus-card__header">
        <span className="time">00:00 30/03/2024</span>
        <span className="duration">7 tiếng 15 phút</span>
      </div>

      <div className="bus-card__route">
        <span className="location">Văn Phòng Thủ Đức</span>
        <span className="arrow">→</span>
        <span className="location">VP Đà Lạt</span>
      </div>
      <div className="bus-card__content">
        <div className='brand-info'>
            <div className='horizontal'>
              <img src="https://via.placeholder.com/60" alt="Bus" className="bus-card__image" />
              <div className='vertical'>
                  <span className="brand">Tiến Oanh</span>
                  <span className="rules">Chi tiết quy định</span>
              </div>
            </div>
            <div className='vertical'>
              <div className='horizontal'>
                <span className="rating">⭐ 4.7</span>
                <button className='favourite-btn' onClick={() => setHeart(!isHeart)}>
                  {!isHeart ? (<img src={ic_heart} alt="heart" className='icon-heart'/>)
                  : (<img src={ic_heart_selected} alt="heart" className='icon-heart'/>)
                }
                </button>
              </div>
              <span className="type">Limousine</span>
            </div>
        </div>
      </div>
      <div className="bus-card__line"></div>

      <div className="bus-card__footer">
        <div className="price">
          <span>Từ <strong style={{color:"#0C4095"}}>350,000 đ</strong></span>
          <span className="seats-left">Chỉ còn 1 chỗ trống</span>
        </div>
        <button className="continue-btn">Tiếp tục</button>
      </div>
    </div>
  );
};

export default CardBus;
