import { configureStore } from '@reduxjs/toolkit';
import watchPageReducer from './watchPageSlice.js';
import homePageReducer from './homePageSlice.js';
import progressReducer from "./progressSlice";

export const store = configureStore({
  reducer: {
    watchPage: watchPageReducer,
    homePage: homePageReducer,
    progress: progressReducer,
  },
});
