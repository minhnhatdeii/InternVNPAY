import React, { useState } from 'react';
import './CardBusLoading.css';


import { Button, View, Image, Text } from '@vnxjs/components';

const CardBusLoading = () => {
  
  return (
    <View className="bus-card"> 
      <View className="bus-card__header">
        <Text className="skeleton-line shimmer short"></Text>
        <Text className="skeleton-line shimmer sshort"></Text>
      </View>

      <View className="bus-card__route">
        <Text className="skeleton-line shimmer sshort height5"/>
        <View className="skeleton-line shimmer  sshort height5"/>
        <Text className="skeleton-line shimmer sshort height5"/>
      </View>
      <View className="bus-card__content">
        <View className='brand-info'>
         
            <View className="price">
                <View className='skeleton-line shimmer sshort'></View>
                <View className="skeleton-line shimmer short"></View>
            </View>
            <View className='vertical2'>
                <View className='skeleton-line shimmer max'/>
                <View className="skeleton-line shimmer max"/>
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
          <Text className='skeleton-line shimmer sshort'></Text>
          <Text className="skeleton-line shimmer short"></Text>
        </View>
        <View className="skeleton-button shimmer sshort"></View>
      </View>
    </View>
  );
};

export default CardBusLoading;
