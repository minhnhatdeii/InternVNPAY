import React from 'react';
import './TripHeader.css';
import { Navigator, Button, View, Image } from '@vnxjs/components';


function TripHeader({icon, namePage, route}) {
  return (
    <View className="trip-header">
      <Navigator openType='navigateBack'>
        <Button className="icon-button back-btn">
          <Image src={icon} alt='back-btn'/>
        </Button>
      </Navigator>
      <View className="trip-info">
        <View className="trip-title">{namePage}</View>
        {route && <View className="trip-route">{route}</View>}
      </View>
      <View className="action-buttons">
        <Button className="icon-button">⋯</Button>
        <View className='btn-tripheader_line'/>
        <Navigator openType='navigateBack'>
          <Button className="icon-button">✕</Button>
        </Navigator>
      </View>
    </View>
  );
};

export default TripHeader;
