import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    shwoGptSearch: null,
    gptMovies: null,
    // gptMiName: null,
  },
  reducers: {
    addGptSearch: (state) => {
      state.shwoGptSearch = !state.shwoGptSearch;
    },
    addGptMovice: (state, action) => {
      state.gptMovies = action.payload;
      // const { gptMovies, gptMiName } = action.payload;
      // state.gptMovies = gptMovies;
      // state.gptMovies = gptMiName;
    },
  },
});
export const { addGptSearch, addGptMovice } = gptSlice.actions;
export default gptSlice.reducer;
