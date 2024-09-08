import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Theme from "./components/Theme";
import Counter from "./components/Counter";

export default function App() {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div className={`${isDarkMode ? "dark" : "light"} contain`}>
      <Theme />
      <Counter />
    </div>
  );
}
