import { createSlice } from '@reduxjs/toolkit';


const savedDateSortState = JSON.parse(sessionStorage.getItem('dateSortState'));
const defaultDateSortState = {
  selectedIndex: 0,
  activeIndexSortType: 0,
  iconStates: true, // true là tăng, false là giảm
  isFilter: false,
};
const initialState = savedDateSortState || defaultDateSortState;

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
    setIndexSortType: (state, action) => {
      state.activeIndexSortType = 0;
      state.iconStates = true;
    },
    resetSort: () => defaultDateSortState,
    setFilter: (state, action) => {
        state.isFilter = action.payload;
    }
  },
});

export const { setSelectedIndex, setSortType, resetSort, setFilter, setIndexSortType } = dateSortSlice.actions;
export default dateSortSlice.reducer;
