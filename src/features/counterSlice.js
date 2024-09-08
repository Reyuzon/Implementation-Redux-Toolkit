import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementValue: (state) => {
      state.value++;
    },
    decrementValue: (state) => {
      if (state.value > 0) {
        state.value--;
      }
    },
  },
});

export const { incrementValue, decrementValue } = counterSlice.actions;
export default counterSlice.reducer;
