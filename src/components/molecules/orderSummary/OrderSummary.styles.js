import styled from 'styled-components';

export const StyledOrderSummaryContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 16px;
  max-width: 320px;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  margin-top: 30px;

  span {
    margin-right: 6px;
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 100%;
  }
`;

export const StyledTotalPriceBox = styled.div`
  display: flex;
  font-weight: 900;
`;
