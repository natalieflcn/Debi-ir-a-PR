import styled from "styled-components";

export const StyledHistorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledVideoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StyledBookSection = styled.figure`
  display: flex;

  h6 {
    transition: all 0.5s;
  }

  img {
    transition: all 0.5s;
  }

  &:hover h6 {
    color: var(--color-red-200);
  }

  &:hover img {
    box-shadow: var(--box-shadow-offset-md) var(--color-red-200);
  }

  @media (max-width: 798px) {
    margin-bottom: 1rem;

    img {
      width: 7rem;
      height: 12rem;
      margin-bottom: 1rem;
    }
  }
`;
