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
    margin-bottom: 3.2rem;
    display: grid;
    grid-template-rows: 14.5rem auto;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 5rem;
  h1 {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4.2rem;

    @media (max-width: 720px) {
      font-size: 2.4rem;
    }
  }
  a {
    padding: 1.2rem 3.2rem;
    color: ${({ theme }) => theme.COLORS.TEXT_IN_PRIMARY};
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-family: "Roboto Slab";
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
    border-radius: 8px;
    display:flex;
    align-items:center;
    gap: 4px;
    &:hover {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      background-color: ${({ theme }) => theme.COLORS.TEXT_IN_PRIMARY};
    }

    @media (max-width: 720px) {
      padding: .8rem 1.6rem;
    }
  }
`;

export const Cards = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 3.2rem;
  justify-content: flex-start;
  text-align: justify;

  > button {
    background: transparent;
    border: none;
    text-align:left ;
  }

  &::-webkit-scrollbar {
    width: 1rem;

    @media (max-width: 720px) {
      display:none ;
    }
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BG};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius:32px;
  }
`;