import { createSlice } from "@reduxjs/toolkit";
import { DataMenu } from "../../data/data";

const initialState = {
  value: [...DataMenu],
};

const menu = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    setMenu: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },
});

export const { setMenu } = menu.actions;
export default menu.reducer;
