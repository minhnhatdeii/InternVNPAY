// src/redux/progressSlice.js
import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
  name: "progress",
  initialState: {
    loading: false,
    progress: 0,   
    error: null
  },
  reducers: {
    startLoading(state) {
      state.loading = true;
      state.progress = 0;
      state.error = null;
    },
    updateProgress(state, action) {
      state.progress = action.payload;
    },
    finishLoading(state) {
      state.loading = false;
      state.progress = 100;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  startLoading,
  updateProgress,
  finishLoading,
  setError
} = progressSlice.actions;

export default progressSlice.reducer;
