import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainTitle = styled.h1`
  a {
    font-size: ${({ theme }) => theme.fontSize.title};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};

    @media ${({ theme }) => theme.mediaQueries.sm} {
      font-size: ${({ theme }) => theme.fontSize.titleMobile};
    }
  }
`;

export const LinkBox = styled.div`
  a {
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.xs};
    letter-spacing: 2px;
    font-weight: 900;
    border: 1px solid ${({ theme }) => theme.colors.black};
    display: flex;
    align-items: center;
    padding: 14px 18px;
    margin: 0 50px;
    text-transform: uppercase;
    text-decoration: none;
    transition: ${({ theme }) => theme.effect.transitionHover};
    background: transparent;

    &:hover {
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    }

    @media ${({ theme }) => theme.mediaQueries.sm} {
      margin: 0 16px;
      padding: 8px 10px;
    }
  }
`;
