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
      if (itemInCart) itemInCart.quantity += action.payload.quantity;
      else state.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
      //   const a = document.querySelector(".box-cart");
      //   console.log(a);
    },
    deleteFromCart: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
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
    increaseCart: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      item.quantity++;
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  },
});
export const {
  addToCart,
  deleteFromCart,
  updateCart,
  increaseCart,
  decreaseCart,
} = cartSlice.actions;
export default cartSlice.reducer;
