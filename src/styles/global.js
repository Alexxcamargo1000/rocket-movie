import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }


  body {
    background-color: ${({ theme }) => theme.COLORS.BG};
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-family: ${({ theme }) => theme.FONTS.TITLE};
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

   select, textarea, input {
    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
    background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }

  button {
    cursor: pointer;
    transition: 0.2s;
    border: none;
        font-family: ${({ theme }) => theme.FONTS.TITLE};
  }



  .logo{
    font-weight: 700;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;
