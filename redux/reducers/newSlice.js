import { createSlice } from "@reduxjs/toolkit";
import { DataNews } from "../../data/data";

const initialState = {
  value: [...DataNews],
};

const news = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    setNews: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
  },
});

export const { setNews } = news.actions;
export default news.reducer;
