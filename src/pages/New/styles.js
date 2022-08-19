import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem auto;
  > main {
    overflow-y:auto;
    width: min(113.7rem, 90%);
    margin: 0 auto;
    padding-bottom: 4rem;
    padding-right: 1.6rem;

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
`;

export const TitleWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    transition: 0.2s;

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
  gap: 4rem;

  > .inputWrapper {
    display: flex;
    gap: 4rem;

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

  > div {
    display: flex;
    gap: 2.4rem;
    padding: 1.6rem;
    background: #0d0c0f;
    border-radius: 8px;

    .active {
      padding: 1.6rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      background: ${({ theme }) => theme.COLORS.BG_INPUT};

      input {
        font-size: 1.6rem;
        line-height: 1.9rem;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.PRIMARY};
      }
    }

    .tag {
      border: 1px dashed ${({ theme }) => theme.COLORS.BG_INPUT};
      padding: 1.6rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;

      input {
        font-size: 1.6rem;
        line-height: 1.9rem;
        background-color: transparent;
      }
      svg {
        color: ${({ theme }) => theme.COLORS.PRIMARY};
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  button {
    flex: auto;
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
    background: #0D0C0F;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .save {
    background: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;
