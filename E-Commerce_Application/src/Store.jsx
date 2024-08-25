import { configureStore } from "@reduxjs/toolkit";
//import countReducer from "./slices/userslice";
import cartSlice from "./cartSlice";
import searchReducer from "./searchSlice";
import productReducer from "./productSlice";
import buyReducer from "./Orderslice";

export const store = configureStore({
  reducer: {
    // user: countReducer,
    cart: cartSlice,
    search: searchReducer,
    products: productReducer,
    buypro: buyReducer,
  },
});
export default store;
