import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });
export const wrapper = createWrapper(makeStore);
