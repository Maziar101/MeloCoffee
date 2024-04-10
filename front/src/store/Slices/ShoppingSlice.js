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
  },
});

export const { removeAll, removeItem, addItem } = ShoppingSlice.actions;
export const selectCartItemCount = (state) => state.cart.list.length;
export default ShoppingSlice.reducer;
