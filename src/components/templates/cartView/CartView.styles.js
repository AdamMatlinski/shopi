import styled from 'styled-components';

export const StyledBookList = styled.ol`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  padding: 30px;
  border-radius: 16px;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    padding: 20px;
  }
`;

export const StyledBookItem = styled.li`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  padding-bottom: 20px;

  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledBookInfoBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-start;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
  }
`;

export const StyledImgContainer = styled.div`
  display: flex;
`;

export const StyledBookDesc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.bg} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    align-items: center;
    margin-top: 6px;
    margin-bottom: 20px;
  }
`;

export const StyledBookImg = styled.div`
  width: 60px;
  height: 80px;
  margin-right: 20px;

  img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    width: 80px;
    height: 100px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 30px;

  h5 {
    font-weight: 900;
    font-size: ${({ theme }) => theme.fontSize.md};
    margin: 0;
    margin-bottom: 6px;

    @media ${({ theme }) => theme.mediaQueries.sm} {
      text-align: center;
    }
  }

  span {
    @media ${({ theme }) => theme.mediaQueries.sm} {
      text-align: center;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.bg} {
    margin-bottom: 10px;
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    margin-right: 0;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledPriceBox = styled.div`
  margin-bottom: 6px;

  span {
    font-weight: 900;
    margin-right: 4px;
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    text-align: center;
  }
`;

export const StyledStockNumber = styled.span`
  font-weight: 700;
  margin-left: 4px;
`;
