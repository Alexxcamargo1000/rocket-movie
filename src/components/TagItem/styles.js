import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme, tagColor }) =>
    !tagColor ? theme.COLORS.TEXT_IN_PRIMARY : `#282124`};
    
  color: #e5e5e5;
  font-size: 12px;
  line-height: 14px;
  border-radius: 8px;
`;
