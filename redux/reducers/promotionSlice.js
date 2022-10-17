import { createSlice } from "@reduxjs/toolkit";
import { DataPromotion } from "../../data/data";

const initialState = {
  value: [...DataPromotion],
};

const promotion = createSlice({
  name: "promotion",
  initialState: initialState,
  reducers: {
    setPromotion: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },
});

export const { setPromotion } = promotion.actions;
export default promotion.reducer;
