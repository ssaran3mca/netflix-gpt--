import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    addTvMovies: null,
    sliderVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTvMovies: (state, action) => {
      state.tvMovies = action.payload;
    },
    addSliderVideo: (state, action) => {
      state.sliderVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addSliderVideo, addTvMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
