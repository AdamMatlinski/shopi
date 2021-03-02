import { createSlice } from '@reduxjs/toolkit';

const cartIconSlice = createSlice({
  name: 'cartCounter',
  initialState: {
    value: 0,
  },
  reducers: {
    addToCartCounter: (state) => {
      state.value += 1;
    },
    removeFromCartCounter: (state) => {
      state.value -= 1;
    },
  },
});

export const selectCartCounter = (state) => state.cartCounter.value;
export const { addToCartCounter, removeFromCartCounter } = cartIconSlice.actions;
export default cartIconSlice.reducer;
