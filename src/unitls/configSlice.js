import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "lang",
  initialState: {
    lag: "en",
  },
  reducers: {
    chnageLangugae: (state, action) => {
      state.lag = action.payload;
    },
  },
});
export const { chnageLangugae } = configSlice.actions;
export default configSlice.reducer;
