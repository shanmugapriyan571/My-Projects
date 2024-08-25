import { createSlice } from "@reduxjs/toolkit";
import Post from "./Post";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, addToCart, setSearch } = productsSlice.actions;
export default productsSlice.reducer;
