import { createSlice } from "@reduxjs/toolkit";

import light from "../../themes/light.theme";


export const slice = createSlice({
  name: "theme",
  initialState: {
    data: light
  },
  reducers: {
    setTheme (state, { payload }) { return {...state, data: payload} },
  },
});

export const { setTheme } = slice.actions;

export const selectTheme = (state: any) => state.theme.data;
export default slice.reducer;
