import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY + "12"};
    z-index: -1;
  }

  > header {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: min(112rem, 90%);
    height: 14.4rem;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      font-size: 16px;
      line-height: 21px;
    }
  }

  > main {
    width: min(112rem, 90%);
    margin: 0 auto;

    .avatar {
      margin-top: -9.3rem;
      margin-bottom: 6.4rem;
      text-align: center;

      img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 9.3rem;
      }
    }

    > form {
      margin: 0 auto;
      width: 33.6rem;

      div:nth-child(2) {
        margin-bottom: 2.4rem;
      }

      > button {
        width: 100%;
        height: 4.8rem;
        font-size: 1.6rem;
        line-height: 2.1rem;
        background-color: ${({ theme }) => theme.COLORS.PRIMARY};
        border-radius: 1rem;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.1rem;
        color: ${({ theme }) => theme.COLORS.TEXT_IN_PRIMARY};

        &:hover {
          opacity: 0.8;
        }

        &:disabled {
          opacity: 0.5;
          cursor: initial;
        }
      }
    }
  }
`;
