import { configureStore } from "@reduxjs/toolkit";
import TokenSlice from "./Slices/TokenSlice";
import ShoppingSlice from "./Slices/ShoppingSlice";

const store = configureStore({
  reducer: {
    token: TokenSlice,
    cart: ShoppingSlice,
  },
});
export default store;
