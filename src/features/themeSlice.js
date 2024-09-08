import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: !!JSON.parse(localStorage.getItem("darkMode")),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      localStorage.setItem("darkMode", JSON.stringify(true));
      state.isDarkMode = true;
    },
    setLightMode: (state) => {
      localStorage.setItem("darkMode", JSON.stringify(false));
      state.isDarkMode = false;
    },
  },
});

export const { setDarkMode, setLightMode } = themeSlice.actions;
export default themeSlice.reducer;
