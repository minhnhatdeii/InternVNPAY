import React, { useRef } from "react";
import "./SelectFilter.css";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredBusList } from "../../store/reducers/filterSlice";
import { resetFilter } from "../../store/reducers/filterSlice";
import { Navigator } from "@vnxjs/components";
import { setBusList,resetBusList } from "../../store/reducers/tripsSlice";
import { setFilter } from "../../store/reducers/dateSortSlice";
import { View, Button } from "@vnxjs/components";
import { dateList } from "../../pages/SelectTrip/SelectTripDisplay/SelectTripDisplay";

const SelectFilter = () => {
  const dispatch = useDispatch();
  const filteredList = useSelector(selectFilteredBusList);
  const count = filteredList.length;
  const selectedIndex = useSelector(state => state.dateSort.selectedIndex);
  

  const onClear = () => {
    const dateStr = dateList[selectedIndex].date;
    dispatch(resetFilter());
    dispatch(resetBusList({ dateStr, year: '2024' }));
    dispatch(setFilter(false));
   
  };

  const onApply = () => {
     dispatch(setBusList(filteredList));
     dispatch(setFilter(true))
     
  };
    
  return (
    <View className="filter-buttons">
      <Button className="btn clear-btn" onClick={() => onClear()}>
        Xóa lọc
      </Button>
      <Navigator openType='navigateBack'>
          <Button className="btn apply-btn" onClick={() => onApply()}>
            Áp dụng ({count})
          </Button>
      </Navigator>
    </View>
  );
};

export default SelectFilter;
