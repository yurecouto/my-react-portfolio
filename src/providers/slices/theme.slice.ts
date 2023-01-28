import { createSlice } from "@reduxjs/toolkit";

import dark from "../../themes/dark.theme";

export const slice = createSlice({
  name: "theme",
  initialState: {
    data: dark
  },
  reducers: {
    setTheme (state, { payload }) { return {...state, data: payload} },
  },
});

export const { setTheme } = slice.actions;

export const selectTheme = (state: any) => state.theme.data;
export default slice.reducer;
