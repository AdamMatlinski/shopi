import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  BookItemContainer,
  BookItemWrapper,
  StyledBookImg,
  StyledBookTitle,
  StyledBookAuthor,
  StyledBookGenre,
  StyledBookPrice,
  StyledBookLabel,
  StyledTopLabel,
} from './BookItem.styles';
import AddToCartAlert from '../addToCartAlert/AddToCartAlert';
import Button from '../../atoms/button/Button';

const BookItem = ({
  id,
  image,
  title,
  author,
  genre,
  price,
  bookStockAmount,
  addToCartList,
  addToCartCounter,
  addProductPrice,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 2000);
    return () => clearTimeout(timer);
  }, [open]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleAddToCart = ({ id, image, title, author, price }) => {
    dispatch(addToCartList({ id, image, title, author, price }));
    dispatch(addToCartCounter());
    dispatch(addProductPrice(price));
    handleOpen();
  };

  return (
    <BookItemContainer>
      <BookItemWrapper>
        <div>
          <StyledTopLabel>
            <StyledBookPrice>
              <span>{price}</span>
              <span>zł</span>
            </StyledBookPrice>
            {bookStockAmount > 0 ? (
              <StyledBookLabel inStock>
                <span>in stock</span>
                <Button
                  styleType="send"
                  onClick={() => handleAddToCart({ id, image, title, author, price })}
                >
                  add to cart
                </Button>
              </StyledBookLabel>
            ) : (
              <StyledBookLabel>
                <span>out of stock</span>
              </StyledBookLabel>
            )}
          </StyledTopLabel>
          <StyledBookImg>
            <img src={`../../../src/assets/images/${image}`} alt={title} />
          </StyledBookImg>
          <StyledBookTitle>
            <h5>{title}</h5>
          </StyledBookTitle>
          <StyledBookAuthor>
            <span>{author}</span>
          </StyledBookAuthor>
          <StyledBookGenre>
            <span>{genre}</span>
          </StyledBookGenre>
          <AddToCartAlert open={open} />
        </div>
      </BookItemWrapper>
    </BookItemContainer>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  bookStockAmount: PropTypes.string.isRequired,
  addToCartList: PropTypes.func.isRequired,
  addToCartCounter: PropTypes.func.isRequired,
  addProductPrice: PropTypes.func.isRequired,
};

export default BookItem;
