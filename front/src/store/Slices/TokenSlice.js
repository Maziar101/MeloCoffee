import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};
const TokenSlice = createSlice({
  name: "token Slice",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
    login: (state) => {
      state.token = true;
    },
  },
});
export default TokenSlice.reducer;
export const { logout } = TokenSlice.actions;
