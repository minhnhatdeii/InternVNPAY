import React, { useRef } from "react";
import "./SelectFilter.css";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredBusList } from "../../store/reducers/filterSlice";
import { resetFilter } from "../../store/reducers/filterSlice";
import { Navigator } from "@vnxjs/components";
import { setBusList,resetBusList } from "../../store/reducers/tripsSlice";
import { setFilter } from "../../store/reducers/dateSortSlice";
import { View, Button } from "@vnxjs/components";

const SelectFilter = () => {
  const dispatch = useDispatch();
  const filteredList = useSelector(selectFilteredBusList);
  const count = filteredList.length;

  const onClear = () => {
    dispatch(resetFilter());
    dispatch(resetBusList());
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
