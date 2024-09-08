import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decrementValue, incrementValue } from "../features/counterSlice";

export default function Counter() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementValue());
  };

  const handleDecrement = () => {
    dispatch(decrementValue());
  };

  return (
    <div className="counter-container">
      <button className="btn-min" onClick={handleDecrement}>
        <FaMinus />
      </button>
      <span className="counter-value">{value}</span>
      <button className="btn-plus">
        <FaPlus onClick={handleIncrement} />
      </button>
    </div>
  );
}
