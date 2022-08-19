import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
  color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  margin-bottom: 8px;
  border-radius: 1rem;
  > input {
    border-radius: 1rem;
    height: 5.6rem;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
    border: 0;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
