import { createSlice } from "@reduxjs/toolkit";
import { DataProduct } from "../../data/data";

const initialState = {
  value: [...DataProduct],
};

const product = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setProduct: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },
});

export const { setProduct } = product.actions;
export default product.reducer;
