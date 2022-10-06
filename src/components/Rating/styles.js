import styled from "styled-components";

export const StarsWrapper = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .active path {
    fill: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`


