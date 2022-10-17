import {
  toastSuccessNotify,
  toastErrorNotify,
  toastWarnNotify,
} from "../../components/toast";
const { createSlice } = require("@reduxjs/toolkit");

// let items = [];
// //   typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart")) : [];
// if (typeof window !== "undefined") {
//   items = JSON.parse(localStorage.getItem("cart"));
// }

const cartSlice = createSlice({
  name: "cart",
  initialState: () => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart")) ?? [];
    }
    return [];
  },
  reducers: {
    addToCart: (state, action) => {
      //   Kiểm tra sản phẩm đã có trong giỏ hàng chưa
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        toastWarnNotify("Sản phẩm đã có trong giỏ hàng");
        itemInCart.quantity += action.payload.quantity;
      } else {
        toastSuccessNotify("Thêm vào giỏ hàng thành công");
        state.push(action.payload);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
      //   const a = document.querySelector(".box-cart");
      //   console.log(a);
    },
    deleteFromCart: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
      toastSuccessNotify("Đã xóa thành công");
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
      return [...state];
    },
    updateCart: (state, action) => {
      state.find((item) => item.id === action.payload.id).quantity =
        action.payload.quantity;
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    decreaseCart: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    // increaseCart: (state, action) => {},
    increaseCart: (state, action) => {
      // console.log("action", action);
      const item = state.find((item) => item.id === action.payload.id);
      item.quantity++;
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
      // console.log("inc");
      return state;
    },
  },
});

export const cartSelector = (state) => {
  return state.cart;
};

export const {
  addToCart,
  deleteFromCart,
  updateCart,
  increaseCart,
  decreaseCart,
} = cartSlice.actions;
export default cartSlice.reducer;
