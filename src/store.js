import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/themeSlice";
import counterSlice from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    counter: counterSlice,
  },
});
