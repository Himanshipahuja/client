import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    tax:0
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      state.tax+=action.payload.tax;
    },
    deleteProduct: (state, action) => {
      state.quantity =0;
      state.products=[];
      state.total =0;
      state.tax=0;
      console.log("deleted");
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export const removeProduct = (productId) => {
  return {
    type: 'REMOVE_PRODUCT', // Replace with your actual action type
    payload: productId,
  };
};
export default cartSlice.reducer;
