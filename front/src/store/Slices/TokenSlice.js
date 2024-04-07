import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};
const TokenSlice = createSlice({
  name: "token Slice",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});
export default TokenSlice.reducer;
export const { login , logout } = TokenSlice.actions;
