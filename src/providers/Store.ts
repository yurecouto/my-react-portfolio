import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme.slice";

export default configureStore({
  reducer: {
    theme: themeReducer,
  }
});
