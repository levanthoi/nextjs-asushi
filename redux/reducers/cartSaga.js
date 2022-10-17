import { call, fork, take, put, takeEvery } from "redux-saga/effects";
import { cartSelector, increaseCart } from "./cartSlice";
// import { useSelector } from "react-redux";

function* handleIncrease(payload) {
  // console.log("action", action);
  console.log("cart", cartSelector.cart);
  //   const item = state.find((item) => item.id === action.payload.id);
  //   item.quantity++;
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("cart", JSON.stringify(state));
  //   }
  // yield put(increaseCart(action));
  console.log("payload", payload);
  console.log("handleIncrease");
}

function* watchCartFlow() {
  // const action = yield take(increaseCart.type);
  // console.log("action watchCartFlow", action);
  console.log("watchCartFlow");
  // while (true) {
  // const action = yield take(increaseCart.type);
  // yield fork(handleIncrease, action.payload);
  // }
  // yield takeEvery(increaseCart.type, handleIncrease);
  // yield call(handleIncrease, action);
}

export default function* cartSaga() {
  yield fork(watchCartFlow);
}
