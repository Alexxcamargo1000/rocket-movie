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
    padding-bottom: 1rem;

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

  > a {
    display: flex;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    width: fit-content;
    gap: 8px;
  }

  img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER_IN_BG};
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1.9rem;
  margin-bottom: 2.4rem;

  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 1rem;

    .active path {
      fill: ${({ theme }) => theme.COLORS.PRIMARY};
    }

    svg {
      width: 1.875rem;
      height: 1.875rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }
`;

export const InfoUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4rem;

  > span {
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.COLORS.TITLE};
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4rem;
`;

export const Content = styled.div`
  text-align: justify;
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 1.6rem;
  line-height: 2.1rem;
  padding: 8px;
`;