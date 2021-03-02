import styled from 'styled-components';

export const BookListWrapper = styled.ul`
  width: 100%;
  list-style: none;
  background: ${({ theme }) => theme.colors.white};
  padding: 30px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33.333%, 1fr));

  @media ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }

  @media ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    padding: 16px;
  }

  @media ${({ theme }) => theme.mediaQueries.xs} {
    padding: 10px;
  }
`;
