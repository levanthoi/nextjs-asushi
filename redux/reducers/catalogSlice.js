import { createSlice } from "@reduxjs/toolkit";
import { DataCataLog } from "../../data/data";

const initialState = {
  value: [...DataCataLog],
};

const catalog = createSlice({
  name: "catalog",
  initialState: initialState,
  reducers: {
    setCatalog: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },
});

export const { setCatalog } = catalog.actions;
export default catalog.reducer;
