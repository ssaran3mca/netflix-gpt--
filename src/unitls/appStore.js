import { configureStore } from "@reduxjs/toolkit";
import userReucer from "./userSlice";
import moviesReducer from "./movieSlice";
import showGptSearch from "./gptSlice";
import configResicer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReucer,
    movies: moviesReducer,
    gpt: showGptSearch,
    config: configResicer,
  },
});
export default appStore;
