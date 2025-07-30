import React from "react";
import "./SelectFilter.css";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredBusList } from "../../store/reducers/filterSlice";
import { resetFilter } from "../../store/reducers/filterSlice";
import { Navigator } from "@vnxjs/components";
import { setBusList,resetBusList } from "../../store/reducers/tripsSlice";
import { setFilter } from "../../store/reducers/dateSortSlice";

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
    <div className="filter-buttons">
      <button className="btn clear-btn" onClick={() => onClear()}>
        Xóa lọc
      </button>
      <Navigator openType='navigateBack'>
          <button className="btn apply-btn" onClick={() => onApply()}>
            Áp dụng ({count})
          </button>
      </Navigator>
    </div>
  );
};

export default SelectFilter;
