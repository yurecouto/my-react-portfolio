import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme.slice";
import languageReducer from "./slices/language.slice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  }
});
