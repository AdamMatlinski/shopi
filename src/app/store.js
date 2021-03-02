import { configureStore } from '@reduxjs/toolkit';

import bookListReducer from '../components/organisms/bookList/bookListSlice';
import cartIconReducer from '../components/molecules/cartIcon/cartIconSlice';
import cartViewReducer from '../components/templates/cartView/cartViewSlice';
import orderSummaryReducer from '../components/molecules/orderSummary/orderSummarySlice';

export default configureStore({
  reducer: {
    bookList: bookListReducer,
    cartCounter: cartIconReducer,
    cartBookList: cartViewReducer,
    cartOrderSummary: orderSummaryReducer,
  },
});
