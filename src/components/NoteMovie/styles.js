import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  max-height: 22.2rem;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY + "0B"};
  border-radius: 16px;
  padding: 3.2rem;

  h2 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-bottom: 8px;
  }

  p {
    max-height: 54px;
    overflow: hidden;
    margin-block: 1.6rem;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

export const StarsWrapper = styled.div`
  display: flex;
  gap: 2px;

  svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .active path {
    fill: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 8px;

  span {
    display: block;
    padding: 0.5rem 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.TEXT_IN_PRIMARY};
    color: #e5e5e5;
    font-size: 12px;
    line-height: 14px;
    border-radius: 8px;
  }
`;
