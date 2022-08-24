import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_IN_BG};
  height: fit-content;

  img {
    width: 6.4rem;
    height: 6.4rem;
    object-fit: cover;
    border-radius: 50%;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: min(112rem, 90%);
    min-height: 11.6rem;
    gap: 8px;

    a.logo-header {
      font-size: 24px;
      line-height: 32px;
      height: 5.6rem;
      display: flex;
      align-items: center;
      margin-top: -1.2rem;
    }

    @media (max-width: 720px) {
      gap: 2rem;
    }
  }
`;

export const InputWrapper = styled.div`
  max-width: 63rem;
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  @media (max-width: 720px) {
    display: none;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;

    a {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.TITLE};
      text-align: right;
    }

    button {
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
      font-size: 1.4rem;
      line-height: 1.8rem;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const PopUpMobile = styled.div`
  position: fixed;
  bottom: 6rem;
  right: 3rem;
  padding: 0.8rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY + "1A"};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY + "5A"};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: 0.2s;

  &.hide {
    display: none;
  }

  button {
    margin-top: 0.8rem;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.TITLE};
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

export const ButtonMobile = styled.button`
  display: none;

  @media (max-width: 720px) {
    z-index: 10;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${({ theme }) => theme.COLORS.TEXT_IN_PRIMARY};
    > svg {
      color: ${({ theme }) => theme.COLORS.TEXT_IN_PRIMARY};
    }
  }
`;
