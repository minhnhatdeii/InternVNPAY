import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWatchPageData } from '../api/getWatchPage';
import { getCommentVideoData } from '../api/getCommentVideo';

export const fetchWatchPageData = createAsyncThunk(
  'watchPage/fetchWatchPageData',
  async (videoId, { rejectWithValue }) => {
    console.log("abc");
    try {
      const data = await getWatchPageData(videoId);
      const comments = await getCommentVideoData(videoId);
      return {
        mainVideo: data.mainVideoWatchPage,
        suggestedVideo: data.suggestVideoWatchPage,
        comments,
      };
    } catch (error) {
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);

const watchPageSlice = createSlice({
  name: 'watchPage',
  initialState: {
    mainVideo: null,
    suggestedVideo: [],
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearWatchPageData: (state) => {
      state.mainVideo = null;
      state.suggestedVideo = [];
      state.comments = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWatchPageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWatchPageData.fulfilled, (state, action) => {
        state.mainVideo = action.payload.mainVideo;
        state.suggestedVideo = action.payload.suggestedVideo;
        state.comments = action.payload.comments;
        state.loading = false;
      })
      .addCase(fetchWatchPageData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearWatchPageData } = watchPageSlice.actions;
export default watchPageSlice.reducer;
