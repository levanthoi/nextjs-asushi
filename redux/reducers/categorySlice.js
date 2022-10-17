import { createSlice } from "@reduxjs/toolkit";
import { DataCategory } from "../../data/data";

const initialState = {
  value: [...DataCategory],
};

const category = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setCategory: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },
});

export const { setCategory } = category.actions;
export default category.reducer;
