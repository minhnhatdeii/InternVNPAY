import { useState } from "react";
import { useRef, useEffect } from "react";
import './FilterTripDisplay.scss';
import ReactSlider from 'react-slider';
import ic_select from '../../../assets/images/ic_select.svg';
import ic_selected from '../../../assets/images/ic_selected.svg';
import { useSelector, useDispatch  } from "react-redux";
import { toggleTime, setPriceRange, toggleOperator, toggleTypeBus} from '../../../store/reducers/filterSlice';
import ic_car from '../../../assets/images/car.png';
import {View, Text, Label, Image} from '@vnxjs/components'


export default function FilterTripDisplay() {
  const dispatch = useDispatch();
  const selectedTimes = useSelector(state => state.filter.selectedTimes);
  const priceRange = useSelector(state => state.filter.priceRange);
  const selectedOperators = useSelector(state => state.filter.selectedOperators);
  const operatorList = useSelector(state => state.trip.operatorList);
  const typeBusList = useSelector(state => state.trip.typeBusList);
  const selectedTypeBus = useSelector(state => state.filter.selectedTypeBus);

  const step = 1000;

    

  const timeOptions = [
    { label: 'Sáng sớm', value: '00:00 - 06:00' },
    { label: 'Buổi sáng', value: '06:01 - 12:00' },
    { label: 'Buổi trưa', value: '12:01 - 18:00' },
    { label: 'Buổi tối', value: '18:01 - 23:59' },
  ];
  function convertTypeBus(name) {
    if (name === "LIMOUSINE") return "Limousine";
    if (name === "NORMAL") return "Ghế ngồi";
    if (name === "SLEEPER") return "Giường nằm";
  }
  
  return (
    <View className="filter-panel">
      <View className="section">
        <Text className="filter-panel-text">Thời gian khởi hành</Text>
        <View className="time-options">
          {timeOptions.map((t) => (
            <button
              key={t.value}
              className={`time-button ${selectedTimes.includes(t.value) ? 'selected' : ''}`}
              onClick={() => dispatch(toggleTime(t.value))}
            >
              <strong>{t.label}</strong>
              <View className="time-value">{t.value}</View>
            </button>
          ))}
        </View>
      </View>

      <View className="section">
        <Text className="filter-panel-text">Khoảng giá</Text>
        <View className="value-container">
          <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              value={priceRange}
              step={step}
              max={3000000}
              min={0}
              onChange={(val) => dispatch(setPriceRange(val))}
              minDistance={1000}
          />
          <View className="value-text">
            <Text>{priceRange[0].toLocaleString('en-US')} đ</Text>
            <Text>{priceRange[1].toLocaleString('en-US')} đ</Text>
          </View>
        </View>
      </View>
      <View className="section">
        <Text className="filter-panel-text">Nhà xe</Text>
        <View className="bus-filter-container">
          <View className="bus-operators">
            {operatorList.map((item) => (
              <Label  key={item.transport_information.id} onClick={() => dispatch(toggleOperator(item.transport_information.id))}>
                <View className="operator-item">
                  <View className="horizontal-filter">
                    <Image className="image-filter" src={item.transport_information.image_url} alt="bus_image"/>
                    <Text className="filter-panel-text">{item.transport_information.name}</Text>
                  </View>
                  <Image src={selectedOperators.includes(item.transport_information.id) ? ic_selected : ic_select} />
                </View>
              </Label >
            ))}
          </View>
        </View>
      </View>
      <View className="section">
        <Text className="filter-panel-text">Loại Xe</Text>
        <View className="bus-filter-container">
            <View className="bus-operators">
          {typeBusList.map((item) => (
            <Label  key={item.vehicle_type} onClick={() => dispatch(toggleTypeBus(item.vehicle_type))}>
              <View className="operator-item">
                <View className="horizontal-filter">
                  <View className="container-img-typecar">
                    <Image className="image-filter-typecar" src={ic_car} alt="bus_image"/>
                  </View>
                  <Text className="filter-panel-text">{convertTypeBus(item.vehicle_type)}</Text>
                </View>
                <Image src={selectedTypeBus.includes(item.vehicle_type) ? ic_selected : ic_select} />
              </View>
            </Label>
            ))}
        </View>
        </View>
      </View>
    </View>
  );
}