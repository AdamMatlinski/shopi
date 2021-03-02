import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    position: relative;
    min-height: 100%;
    background: ${({ theme }) => theme.colors.background};
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Lato', sans-serif;
    margin: 0 0 50px;
  }

  a, button {
    font-family: 'Lato', sans-serif;
  }
`;
