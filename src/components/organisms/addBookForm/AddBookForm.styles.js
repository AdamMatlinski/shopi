import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 16px;
  max-width: 800px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px 0;
  width: 50%;
  padding: 0 20px;

  @media ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0;
  }
`;

export const Input = styled.input`
  display: flex;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 6px;
  height: 34px;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputLabel = styled.label`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-bottom: 8px;
`;

export const StyledErrorSpan = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const StyledSelect = styled.select`
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  padding: 6px;
  height: 34px;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
