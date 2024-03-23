import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
const ShoppingSlice = createSlice({
  name: "shopping Slice",
  initialState,
  reducers: {
    removeAll: (state) => {
      state.list = [];
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((e) => {
        if (e.id == action.payload) {
          if (e.quantity > 0) {
            e.quantity -= 1;
            return e;
          } else {
            return false;
          }
        }
        return true;
      });
    },
    addItem: (state, action) => {
      let addItem = false;
      if (state.list.length == 0) {
        let pr = action.payload;
        pr.quantity = 1;
        addItem = true;
        state.list.push(pr);
      }else{
        state.list = state.list.map((e)=>{
            if(e.id == action.payload.id){
                e.quantity += 1;
                addItem = true;
                return e;
            }
            return e;
        });
      }
      if(!addItem){
        let pr = action.payload;
        pr.quantity = 1;
        addItem = true;
        state.list.push(pr);        
      }
    },
  },
});
export const {removeAll,removeItem,addItem} = ShoppingSlice.actions;
export default ShoppingSlice.reducer;