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
