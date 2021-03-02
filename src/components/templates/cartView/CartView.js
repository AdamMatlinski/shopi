import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartBookList, removeBookFromCart } from './cartViewSlice';
import { removeFromCartCounter } from '../../molecules/cartIcon/cartIconSlice';
import { subtractProductPrice } from '../../molecules/orderSummary/orderSummarySlice';
import OrderSummary from '../../molecules/orderSummary/OrderSummary';
import {
  StyledBookList,
  StyledBookItem,
  StyledBookImg,
  StyledWrapper,
  StyledBookDesc,
  StyledImgContainer,
  StyledButtonWrapper,
  StyledBookInfoBox,
  StyledPriceBox,
  StyledStockNumber,
} from '../../organisms/adminPanelBookList/AdminPanelBookList.styles.js';
import Button from '../../atoms/button/Button';

const CartView = () => {
  const cartBookList = useSelector(selectCartBookList);
  const dispatch = useDispatch();

  const removeBook = ({ id, price, quantity }) => {
    dispatch(removeBookFromCart({ id, quantity }));
    dispatch(removeFromCartCounter());
    dispatch(subtractProductPrice(price));
  };

  return (
    <>
      {cartBookList.length > 0 ? (
        <StyledBookList>
          {cartBookList.map(({ id, image, title, author, price, quantity }) => (
            <StyledBookItem key={id}>
              <StyledBookInfoBox>
                <StyledImgContainer>
                  <StyledBookImg>
                    <img src={`../../../src/assets/images/${image}`} alt={title} />
                  </StyledBookImg>
                </StyledImgContainer>
                <StyledBookDesc>
                  <StyledWrapper>
                    <h5>{title}</h5>
                    <span>{author}</span>
                  </StyledWrapper>
                  <StyledWrapper>
                    <StyledPriceBox>
                      <span>{price}</span>
                      <span>zł</span>
                    </StyledPriceBox>
                    <div>
                      <span>quantity: </span>
                      <StyledStockNumber>{quantity}</StyledStockNumber>
                    </div>
                  </StyledWrapper>
                </StyledBookDesc>
              </StyledBookInfoBox>

              <StyledButtonWrapper>
                <Button styleType="remove" onClick={() => removeBook({ id, price, quantity })}>
                  remove book
                </Button>
              </StyledButtonWrapper>
            </StyledBookItem>
          ))}
        </StyledBookList>
      ) : (
        <h2>Your cart is empty.</h2>
      )}
      <OrderSummary />
    </>
  );
};

export default CartView;
