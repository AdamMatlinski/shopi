import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { CartIconWrapper, Counter } from './CartIcon.styles';
import shoppingCart from '../../../assets/icons/shoppingCart.svg';
import { selectCartCounter } from './cartIconSlice';

const CartIcon = () => {
  const cartSize = useSelector(selectCartCounter);

  return (
    <CartIconWrapper>
      <NavLink to="/cart-view">
        <img src={shoppingCart} alt="shopping cart" />
        <Counter>{cartSize}</Counter>
      </NavLink>
    </CartIconWrapper>
  );
};

export default CartIcon;
