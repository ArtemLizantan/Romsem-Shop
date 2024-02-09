import { getProductsPizza } from "./products.actions";
import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    error: null,
    product: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsPizza.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsPizza.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProductsPizza.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.product = {};
      });
  },
});
