import { configureStore } from '@reduxjs/toolkit';
import dateSortReducer from './reducers/dateSortSlice';
import tripReducer from './reducers/tripsSlice'
import filterReducer from './reducers/filterSlice';

export const store = configureStore({
  reducer: {
    dateSort: dateSortReducer,
    trip: tripReducer,
    filter: filterReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  sessionStorage.setItem('filterState', JSON.stringify(state.filter));
  sessionStorage.setItem('tripState', JSON.stringify(state.trip));
  sessionStorage.setItem('dateSortState', JSON.stringify(state.dateSort));
});