import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { HeaderContainer, TitleBox, MainTitle, LinkBox } from './Header.styles';
import CartIcon from '../../molecules/cartIcon/CartIcon';

const Header = () => {
  let location = useLocation();
  return (
    <HeaderContainer>
      <TitleBox>
        <MainTitle>
          <NavLink to="/">Shopi</NavLink>
        </MainTitle>
        {location.pathname === '/' ? (
          <LinkBox>
            <NavLink to="/admin-panel">Admin Panel</NavLink>
          </LinkBox>
        ) : (
          <LinkBox>
            <NavLink to="/">Home Page</NavLink>
          </LinkBox>
        )}
      </TitleBox>
      <CartIcon />
    </HeaderContainer>
  );
};

export default Header;
