import { createSlice } from "@reduxjs/toolkit";

let parsedLang;

if (localStorage.getItem("LANGUAGE")) {
  const storageLang = localStorage.getItem("LANGUAGE") || ""
  parsedLang = JSON.parse(storageLang)
} else {
  parsedLang = { code: "pt_BR", }
};

export const slice = createSlice({
  name: "language",
  initialState: {
    data: parsedLang.code
  },
  reducers: {
    setLanguage (state, { payload }) { return {...state, data: payload} },
  },
});

export const { setLanguage } = slice.actions;

export const selectLanguage = (state: any) => state.language.data;
export default slice.reducer;
