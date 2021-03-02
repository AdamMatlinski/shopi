import { createSlice } from '@reduxjs/toolkit';

const orderSummarySlice = createSlice({
  name: 'cartOrderSummary',
  initialState: {
    cartTotalPrice: 0,
  },
  reducers: {
    addProductPrice: (state, { payload }) => {
      let priceToNumber = parseFloat(payload);
      state.cartTotalPrice += priceToNumber;
    },
    subtractProductPrice: (state, { payload }) => {
      let priceToNumber = parseFloat(payload);
      state.cartTotalPrice -= priceToNumber;
    },
  },
});

export const selectCartOrderSummary = (state) => state.cartOrderSummary.cartTotalPrice;
export const { addProductPrice, subtractProductPrice } = orderSummarySlice.actions;
export default orderSummarySlice.reducer;
