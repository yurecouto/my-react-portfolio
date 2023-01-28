import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "language",
  initialState: {
    data: "pt_BR"
  },
  reducers: {
    setLanguage (state, { payload }) { return {...state, data: payload} },
  },
});

export const { setLanguage } = slice.actions;

export const selectLanguage = (state: any) => state.language.data;
export default slice.reducer;
