import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: min(63.7rem, 100%) 1fr;

  main {
    margin-top: -4rem;
    display: grid;
    place-items: center;

    > div {
      max-width: 34rem;
      text-align: center;
      h1 {
        font-size: 4.8rem;
        line-height: 6.3rem;
      }

      p {
        font-size: 1.4rem;
        line-height: 1.8rem;
        margin-bottom: 4.8rem;
        text-align: left;
      }

      form {
        margin-bottom: 4.2rem;
        legend {
          font-size: 2.4rem;
          line-height: 3.2rem;
          color: ${({ theme }) => theme.COLORS.TITLE};
          font-family: ${({ theme }) => theme.FONTS.TITLE};
          font-weight: 500;
          margin-bottom: 4.8rem;
          text-align: left;
        }

        button {
          width: 100%;
          height: 5.6rem;
          border-radius: 1rem;
          margin-top: 2.4rem;
          color: ${({ theme }) => theme.COLORS.TEXT_IN_PRIMARY};
          background-color: ${({ theme }) => theme.COLORS.PRIMARY};
          font-weight: 500;
          line-height: 2.1rem;
        }
      }

      a {
        line-height: 21px;
        color: ${({ theme }) => theme.COLORS.PRIMARY};
        font-family: ${({ theme }) => theme.FONTS.TITLE};
      }
    }
  }

  .bgImage {
    width: 100%;
    height: 100vh;
    background-image: url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(0.5);
  }
`;
