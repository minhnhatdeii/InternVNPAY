import { useState } from "react";
import { useRef, useEffect } from "react";
import './FilterTripDisplay.scss';
import ReactSlider from 'react-slider';
import ic_select from '../../../assets/images/ic_select.svg';
import ic_selected from '../../../assets/images/ic_selected.svg';
import { useSelector, useDispatch  } from "react-redux";
import { toggleTime, setPriceRange, toggleOperator} from '../../../store/reducers/filterSlice';


export default function FilterTripDisplay() {
  const dispatch = useDispatch();
  const selectedTimes = useSelector(state => state.filter.selectedTimes);
  const priceRange = useSelector(state => state.filter.priceRange);
  const selectedOperators = useSelector(state => state.filter.selectedOperators);
  const operatorList = useSelector(state => state.trip.operatorList);
  const step = 1000;

    

  const timeOptions = [
    { label: 'Sáng sớm', value: '00:00 - 06:00' },
    { label: 'Buổi sáng', value: '06:01 - 12:00' },
    { label: 'Buổi trưa', value: '12:01 - 18:00' },
    { label: 'Buổi tối', value: '18:01 - 23:59' },
  ];

function removeDuplicateBusById(busList) {
  const uniqueMap = new Map();

  for (const bus of busList) {
    const id = bus.transport_information.id;
    if (!uniqueMap.has(id)) {
      uniqueMap.set(id, bus);
    }
  }

  return Array.from(uniqueMap.values());
}

  return (
    <div className="filter-panel">
      <div className="section">
        <p className="filter-panel-text">Thời gian khởi hành</p>
        <div className="time-options">
          {timeOptions.map((t) => (
            <button
              key={t.value}
              className={`time-button ${selectedTimes.includes(t.value) ? 'selected' : ''}`}
              onClick={() => dispatch(toggleTime(t.value))}
            >
              <strong>{t.label}</strong>
              <div className="time-value">{t.value}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <p className="filter-panel-text">Khoảng giá</p>
        <div className="value-container">
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
            <div className="value-text">
                <span>{priceRange[0].toLocaleString('en-US')} đ</span>
                <span>{priceRange[1].toLocaleString('en-US')} đ</span>
            </div>
        </div>
      </div>
      <div className="section">
        <p className="filter-panel-text">Nhà xe</p>
        <div className="bus-filter-container">
            <div className="bus-operators">
          {operatorList.map((item) => (
          
            <label key={item.transport_information.id} className="operator-item" onClick={() => dispatch(toggleOperator(item.transport_information.id))}>
              <div className="horizontal">
                <img className="image-filter" src={item.transport_information.image_url} alt="bus_image"/>
                <span className="filter-panel-text">{item.transport_information.name}</span>
              </div>
             <img src={selectedOperators.includes(item.transport_information.id) ? ic_selected : ic_select} />
            </label>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
}