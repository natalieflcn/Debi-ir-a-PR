import styled from "styled-components";

// Keep Up with Puerto Rican News Panel
export const PuertoRicanNewsWrapper = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 47%;
    border-radius: var(--border-radius-sm);
  }

  @media (max-width: 798px) {
    flex-direction: column;
    gap: 1rem;

    img {
      width: 100%;
    }
  }
`;
