import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_IN_BG};
  height: fit-content;
  
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: min(112rem, 90%);
    height: 11.6rem;
    gap: 8px;

    a {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 63rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  > img {
    width: 6.4rem;
    height: 6.4rem;
    object-fit: cover;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;

    span {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.TITLE};
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
