import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.effect.transitionHover};
  cursor: pointer;
  padding: ${({ styleType }) => {
    if (styleType === 'remove') return '8px 16px';
    if (styleType === 'send') return '20px 50px';
  }};
  font-weight: 700;
  text-transform: uppercase;
  background: ${({ theme, styleType }) => {
    if (styleType === 'remove') return theme.colors.red;
    if (styleType === 'send') return theme.colors.black;
  }};
  color: ${({ theme, styleType }) => {
    if (styleType === 'remove' || styleType === 'send') return theme.colors.white;
  }};
  border: 1px solid
    ${({ theme, styleType }) => {
      if (styleType === 'remove') return theme.colors.red;
      if (styleType === 'send') return theme.colors.black;
    }};
  font-size: ${({ theme, styleType }) => {
    if (styleType === 'remove') return theme.fontSize.xs;
    if (styleType === 'send') return theme.fontSize.md;
  }};
  letter-spacing: 2px;
  margin: ${({ theme, styleType }) => {
    if (styleType === 'send') return '30px 0';
  }};

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme, styleType }) => {
      if (styleType === 'remove') return theme.colors.red;
      if (styleType === 'send') return theme.colors.black;
    }};
  }

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    width: ${({ styleType }) => {
      if (styleType === 'send') return '100%';
    }};
  }
`;
