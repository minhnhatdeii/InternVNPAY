import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getYoutubeHomeData} from "../api/youtubeApi.js";


export const fetchHomePageData = createAsyncThunk(
  'homePage/fetchHomePageData',
  async (_, { rejectWithValue }) => {
    try {
      const videos = await getYoutubeHomeData();
      return {
        videos
      };
    } catch (error) {
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
