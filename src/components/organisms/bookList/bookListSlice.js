import { createSlice } from '@reduxjs/toolkit';

const bookListSlice = createSlice({
  name: 'bookList',
  initialState: [
    {
      bookImage: 'steve-jobs.jpg',
      bookTitle: 'Steve Jobs',
      bookAuthor: 'Walter Isaacson',
      bookGenre: 'Biographies',
      bookPrice: '40',
      bookId: '057f890d-199e-4d0d-974e-c68d9960d82f',
      bookStockAmount: '4',
    },
    {
      bookImage: 'elon-musk.jpg',
      bookTitle: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
      bookAuthor: 'Ashlee Vance',
      bookGenre: 'Biographies',
      bookPrice: '39',
      bookId: '057f890d-199e-4d0d-974e-c68d9960d5df',
      bookStockAmount: '2',
    },
    {
      bookImage: 'amazon.jpg',
      bookTitle: 'The Everything Store: Jeff Bezos and the Age of Amazon',
      bookAuthor: 'Brad Stone',
      bookGenre: 'Biographies',
      bookPrice: '35.50',
      bookId: '057f890d-199e-4d0d-974e-c68d9960d2rh',
      bookStockAmount: '0',
    },
    {
      bookImage: 'leonardo.jpg',
      bookTitle: 'Leonardo da Vinci',
      bookAuthor: 'Walter Isaacson',
      bookGenre: 'Biographies',
      bookPrice: '29.99',
      bookId: '057f890d-199e-4d0d-974e-c68d9960p25r',
      bookStockAmount: '2',
    },
  ],
  reducers: {
    addBook: (state, action) => {
      const {
        bookImage,
        bookTitle,
        bookAuthor,
        bookGenre,
        bookPrice,
        bookId,
        bookStockAmount,
      } = action.payload;
      state.push({
        bookImage,
        bookTitle,
        bookAuthor,
        bookGenre,
        bookPrice,
        bookId,
        bookStockAmount,
      });
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.bookId !== action.payload);
    },
  },
});

export const selectBooks = (state) => state.bookList;
export const { addBook, removeBook } = bookListSlice.actions;
export default bookListSlice.reducer;
