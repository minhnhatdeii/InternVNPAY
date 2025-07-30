// redux/slices/filterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';

const initialState = {
  selectedTimes: [],
  priceRange: [0, 3000000],
  selectedOperators: [], // danh sách id nhà xe đã chọn
};

export const selectFilteredBusList = createSelector(
  [(state) => state.trip.busList, (state) => state.filter],
  (busList, filter) => {
    const { selectedTimes, priceRange, selectedOperators } = filter;

    return busList.filter(bus => {
      const price = bus.discount_amount;
      const id = bus.transport_information.id;
      const time = bus.departure_time;

      // check giá
      const priceMatch = price >= priceRange[0] && price <= priceRange[1];

      // check nhà xe
      const operatorMatch = selectedOperators.length === 0 || selectedOperators.includes(id);

      // check thời gian
      const timeMatch = selectedTimes.length === 0 || selectedTimes.some(range => {
        const [start, end] = range.split(' - ');
        return time >= start && time <= end;
      });

      return priceMatch && operatorMatch && timeMatch;
    });
  }
);


const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleTime: (state, action) => {
      const time = action.payload;
      if (state.selectedTimes.includes(time)) {
        state.selectedTimes = state.selectedTimes.filter(t => t !== time);
      } else {
        state.selectedTimes.push(time);
      }
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    toggleOperator: (state, action) => {
      const id = action.payload;
      if (state.selectedOperators.includes(id)) {
        state.selectedOperators = state.selectedOperators.filter(i => i !== id);
      } else {
        state.selectedOperators.push(id);
      }
    },
    resetFilter: () => initialState
  }
});

export const { toggleTime, setPriceRange, toggleOperator, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
