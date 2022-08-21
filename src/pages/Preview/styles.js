import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem auto;

  > main {
    overflow-y: auto;
    width: min(112rem, 90%);
    margin: 0 auto;

    &::-webkit-scrollbar {
      width: 1rem;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.COLORS.BG};
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PRIMARY};
      border-radius: 32px;
    }
    
    }
`