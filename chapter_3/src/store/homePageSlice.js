import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getYoutubeHomeData} from "../api/youtubeApi.js";
import { startLoading, updateProgress, finishLoading, setError } from './progressSlice.js';


export const fetchHomePageData = createAsyncThunk(
  'homePage/fetchHomePageData',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startLoading());
      const stepCount = 20;
      for (let i = 1; i <= stepCount; i++) {
        await new Promise((res) => setTimeout(res, 200));
        dispatch(updateProgress(Math.floor((i / stepCount) * 100)));
      }
      const videos = await getYoutubeHomeData();
      dispatch(finishLoading());
      return {
        videos
      };
    } catch (error) {
      dispatch(setError(error.message || 'Something went wrong'));
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: {
    videos: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearHomePageData: (state) => {
      state.videos = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomePageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomePageData.fulfilled, (state, action) => {
        state.videos = action.payload.videos;
        state.loading = false;
      })
      .addCase(fetchHomePageData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearHomePageData } = homePageSlice.actions;
export default homePageSlice.reducer;
