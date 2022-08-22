import styled from "styled-components";
export const Container = styled.div`
  padding: 1.6rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  height: 5.6rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BG_INPUT};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.PLACEHOLDER}` : `none`};

  &:focus-within {
    outline-offset: 2px;
    outline: ${({ theme, isNew }) =>
    isNew ? `1px solid ${theme.COLORS.BG_INPUT}` : `none`};
  }

  input {
    font-size: 1.6rem;
    line-height: 1.9rem;
    background-color: ${({ theme, isNew }) =>
      isNew ? "transparent" : theme.COLORS.BG_INPUT};
    outline: none;
  }

  button {
    background-color: transparent;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;
