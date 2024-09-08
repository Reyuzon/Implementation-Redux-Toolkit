import React, { Fragment } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../features/themeSlice";

export default function Theme() {
  const { isDarkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleChangeTheme = (e) => {
    console.log(e);
    if (e.target.checked) {
      dispatch(setDarkMode());
    } else {
      dispatch(setLightMode());
    }
  };

  return (
    <label htmlFor="toggleMode">
      <input
        type="checkbox"
        name="toggleMode"
        id="toggleMode"
        checked={isDarkMode}
        onChange={handleChangeTheme}
      />
      <IoSunny className="sun" />
      <FaMoon className="moon" />
      <span className="toggle"></span>
      <span className="animateBg"></span>
    </label>
  );
}
