import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedIndex: 0,
  activeIndexSortType: 0,
  iconStates: true, // true là tăng, false là giảm
  isFilter: false,
};

const dateSortSlice = createSlice({
  name: 'dateSort',
  initialState,
  reducers: {
    setSelectedIndex: (state, action) => {
      state.selectedIndex = action.payload;
    },
    setSortType: (state, action) => {
      const index = action.payload;
      if (state.activeIndexSortType === index) {
        state.iconStates = !state.iconStates;
      } else {
        state.activeIndexSortType = index;
        state.iconStates = true;
      }
    },
    setIconStates: (state, action) => {
      state.selectedIndex = action.payload;
    },
    resetSort: () => initialState,
    setFilter: (state, action) => {
        state.isFilter = action.payload;
    }
  },
});

export const { setSelectedIndex, setSortType, resetSort, setFilter } = dateSortSlice.actions;
export default dateSortSlice.reducer;
