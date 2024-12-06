import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    shwoGptSearch: null,
  },
  reducers: {
    addGptSearch: (state) => {
      state.shwoGptSearch = !state.shwoGptSearch;
    },
  },
});
export const { addGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
