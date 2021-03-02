import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartOrderSummary } from './orderSummarySlice';
import { StyledOrderSummaryContainer, StyledTotalPriceBox } from './OrderSummary.styles';

const OrderSummary = () => {
  const cartTotalPrice = useSelector(selectCartOrderSummary);

  return (
    <StyledOrderSummaryContainer>
      <span>total price:</span>
      <StyledTotalPriceBox>
        <span>{cartTotalPrice.toFixed(2)}</span>
        <span>zł</span>
      </StyledTotalPriceBox>
    </StyledOrderSummaryContainer>
  );
};

export default OrderSummary;
