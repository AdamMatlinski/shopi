import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppWrapper } from './App.styles';
import BookList from '../components/organisms/bookList/BookList';
import Footer from '../components/organisms/footer/Footer';
import Header from '../components/organisms/header/Header';
import CartView from '../components/templates/cartView/CartView';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import AdminPanel from '../components/templates/adminPanel/AdminPanel';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/">
          <BookList />
        </Route>
        <Route path="/admin-panel">
          <AdminPanel />
        </Route>
        <Route path="/cart-view">
          <CartView />
        </Route>
      </Switch>
      <Footer />
    </AppWrapper>
  </ThemeProvider>
);

export default App;
