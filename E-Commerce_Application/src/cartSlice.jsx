import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    addcart(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity(state, action) {
      const product = state.find((product) => product.id === action.payload);

      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const product = state.find((product) => product.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});
export const { add, remove, incrementQuantity, decrementQuantity, addcart } =
  cartSlice.actions;
export default cartSlice.reducer;
