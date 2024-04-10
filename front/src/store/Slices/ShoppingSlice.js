import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const ShoppingSlice = createSlice({
  name: "shoppingSlice",
  initialState,
  reducers: {
    removeAll: (state) => {
      state.list = [];
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((item) => item._id !== action.payload);
    },
    addItem: (state, action) => {
      const existingItemIndex = state.list.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity++;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const existingItemIndex = state.list.findIndex(
        (item) => item._id === action.payload.productId
      );

      if (existingItemIndex !== -1) {
        if (state.list[existingItemIndex].quantity > 1) {
          state.list[existingItemIndex].quantity--;
        }
      }
    },
  },
});

export const { removeAll, removeItem, addItem,decreaseQuantity } = ShoppingSlice.actions;
export const selectCartItemCount = (state) => state.cart.list.length;
export default ShoppingSlice.reducer;
