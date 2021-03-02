import styled from 'styled-components';

export const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 60px;

  &:hover {
    a {
      span {
        transition: ${({ theme }) => theme.effect.transitionHover};
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;

export const Counter = styled.span`
  text-align: center;
  position: absolute;
  right: 0;
  top: 0;
  padding: 4px 8px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  transition: ${({ theme }) => theme.effect.transitionHover};
`;
