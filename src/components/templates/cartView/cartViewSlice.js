import { createSlice } from '@reduxjs/toolkit';

const cartViewSlice = createSlice({
  name: 'cartBookList',
  initialState: [],
  reducers: {
    addToCartList: (state, action) => {
      const { id, image, title, author, price } = action.payload;
      const quantity = 1;
      const bookIndex = state.findIndex((element) => element.id == id);

      if (!state.some((e) => e.id === id)) {
        state.push({ id, image, title, author, price, quantity });
      } else {
        state[bookIndex].quantity += 1;
      }
    },
    removeBookFromCart: (state, action) => {
      const { id, quantity } = action.payload;
      const bookIndex = state.findIndex((element) => element.id == id);

      if (quantity > 1) {
        state[bookIndex].quantity -= 1;
      } else {
        return state.filter((book) => book.id !== id);
      }
    },
  },
});

export const selectCartBookList = (state) => state.cartBookList;
export const { addToCartList, removeBookFromCart } = cartViewSlice.actions;
export default cartViewSlice.reducer;
