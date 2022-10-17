import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./reducers/rootSagas";
import catalogReducer from "./reducers/catalogSlice";
import categoryReducer from "./reducers/categorySlice";
import menuReducer from "./reducers/menuSlice";
import productReducer from "./reducers/productSlice";
import newsReducer from "./reducers/newSlice";
import promotionReducer from "./reducers/promotionSlice";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalog: catalogReducer,
    menu: menuReducer,
    category: categoryReducer,
    product: productReducer,
    news: newsReducer,
    promotion: promotionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
const makeStore = () => {
  return store;
};
export const wrapper = createWrapper(makeStore);
