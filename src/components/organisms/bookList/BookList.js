import React from 'react';
import { useSelector } from 'react-redux';

import { BookListWrapper } from './BookList.styles';
import { selectBooks } from './bookListSlice';
import { addToCartCounter } from '../../molecules/cartIcon/cartIconSlice';
import { addToCartList } from '../../templates/cartView/cartViewSlice';
import { addProductPrice } from '../../molecules/orderSummary/orderSummarySlice';
import BookItem from '../../molecules/bookItem/BookItem';

const BookList = () => {
  const books = useSelector(selectBooks);

  return (
    <BookListWrapper>
      {books.map(
        ({ bookImage, bookId, bookTitle, bookAuthor, bookGenre, bookPrice, bookStockAmount }) => (
          <BookItem
            key={bookId}
            id={bookId}
            image={bookImage}
            title={bookTitle}
            author={bookAuthor}
            genre={bookGenre}
            price={bookPrice}
            bookStockAmount={bookStockAmount}
            addToCartCounter={addToCartCounter}
            addToCartList={addToCartList}
            addProductPrice={addProductPrice}
          />
        ),
      )}
    </BookListWrapper>
  );
};

export default BookList;
