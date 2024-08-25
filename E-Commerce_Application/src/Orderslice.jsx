import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: false,
};

const Orderslice = createSlice({
  name: "buypro",
  initialState,
  reducers: {
    buyproduct(state, action) {
      //state.products.push(action.payload);
      action.payload.map((e, i) => state.products.push(e));
      state.status = action.payload.status;
    },
  },
});
export const { buyproduct } = Orderslice.actions;
export default Orderslice.reducer;
