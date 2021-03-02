import styled from 'styled-components';

export const AppWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${({ theme }) => theme.mediaQueries.xs} {
    padding: 0 10px;
  }
`;
