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
      @media (max-width: 720px) {
        display: none;
      }
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.COLORS.BG};
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PRIMARY};
      border-radius: 32px;
    }
  }
`;

export const TitleWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 1rem;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    transition: 0.2s;
    background: transparent;
    width: fit-content ;

    &:hover {
      opacity: 0.5;
    }
  }

  h1 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
    margin-bottom: 4rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 1rem;

  > .inputWrapper {
    display: flex;
    gap: 3.2rem;

    @media (max-width: 720px) {
     flex-wrap: wrap;
     gap: .8rem;
    }

    > input {
      font-size: 1.6rem;
    }
  }

  > textarea {
    border-radius: 1rem;
    height: 25.4rem;
    max-height: 25.4rem;
    width: 100%;
    padding: 12px;
    resize: none;
    overflow-y: auto;
    font-size: 1.6rem;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER};
    }
    &::-webkit-scrollbar {
      width: 1rem;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.COLORS.BG};
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PLACEHOLDER};
      border-radius: 32px;
    }
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  flex-wrap: wrap;
`;

export const Tags = styled.div`
  display: flex;
  gap: 2.4rem;
  padding: 1.6rem;
  background: #0d0c0f;
  border-radius: 8px;
  flex-wrap: wrap;

  @media (max-width: 720px) {
     gap: .8rem;

     div {
      width: 100%;
     }
    }

  
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    }

  button {
    height: 56px;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.1rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .delete {
    background: #0d0c0f;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .save {
    background: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;
