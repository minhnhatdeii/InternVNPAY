import React, { useState } from 'react';
import './CardBus.css';
import ic_heart from '../../assets/images/ic_heart.svg';
import ic_heart_selected from '../../assets/images/ic_heart_selected.svg';
import arrow_route from '../../assets/images/arrow2.png';
import star from '../../assets/images/star.png';

import { Button, View, Image, Text } from '@vnxjs/components';

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
function convertTypeBus(name) {
    if (name === "LIMOUSINE") return "Limousine";
    if (name === "NORMAL") return "Ghế ngồi";
    if (name === "SLEEPER") return "Giường nằm";
  }
  return (
    <View className="bus-card">
      <View className="bus-card__header">
        <Text className="time">{`${bus.departure_time} ${bus.departure_date.replace(/-/g, "/")}`}</Text>
        <Text className="duration">{`${timeDiff(bus.departure_time, bus.drop_off_time)}`}</Text>
      </View>

      <View className="bus-card__route">
        <Text className="location text-right">{bus.merchant_start_point_name}</Text>
        <View className="arrow-line-container">
          <View className="dot" />
          <View className="dashed-line left-line" />

          <View className="arrow-button">
              <Image src={arrow_route} className='route-img'/>
          </View>

          <View className="dashed-line right-line" />
          <View className="dot" />
        </View>
        <Text className="location text-left">{bus.merchant_end_point_name}</Text>
      </View>
      <View className="bus-card__content">
        <View className='brand-info'>
          <View className='horizontal'>
            <Image src={bus.transport_information.image_url} alt="Bus" className="bus-card__image"/>
            <View className='vertical'>
                <Text className="brand">{bus.transport_information.name}</Text>
                <Text className="rules">Chi tiết quy định</Text>
            </View>
          </View>
          <View className='vertical'>
            <View className='horizontal'>
              <Image src={star} className='fav_icon'/>
              <Text className="rating">{`${bus.transport_information.rating}`}</Text>
              {/* <Button className='favourite-btn' onClick={() => setHeart(!isHeart)}> */}
                {!isHeart ? (<Image src={ic_heart} alt="heart" onClick={() => setHeart(!isHeart)}/>)
                : (<Image src={ic_heart_selected} alt="heart" onClick={() => setHeart(!isHeart)}/>)
              }
              {/* </Button> */}
            </View>
            <Text className="type">{convertTypeBus(bus.vehicle_type)}</Text>
          </View>
        </View>
      </View>

      <View className='bus-card__line-container'>
         <View class="semi-circle cirle-left"></View>
         <View className="bus-card__line"></View>
         <View class="semi-circle cirle-right"></View>
      </View>
     

      <View className="bus-card__footer">
        <View className="price">
          <Text>Từ <strong style={{color:"#0C4095"}}>{bus.discount_amount.toLocaleString('en-US')} đ</strong></Text>
          <Text className="seats-left">Chỉ còn {bus.available_seat} chỗ trống</Text>
        </View>
        <Button className="continue-btn">Tiếp tục</Button>
      </View>
    </View>
  );
};

export default CardBus;
