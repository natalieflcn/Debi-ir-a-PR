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

export const EndActWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
`;

export const ResourcesColors = {
  "--heading-color": `var(--color-yellow-200)`,
  "--heading-shadow": `var(--color-red-300)`,

  "--panel-bg-color": `var(--color-light-200)`,
  "--panel-heading-color": `var(--color-blue-200)`,
  "--panel-color": `var(--color-dark-200)`,
  "--panel-box-shadow": `var(--color-red-200)`,

  "--panel-bg-highlight": `var(--color-light-100)`,
  "--panel-heading-highlight": `var(--color-red-200)`,
  "--panel-shadow-highlight": `var(--color-blue-100)`,
  "--panel-box-highlight": `var(--color-red-300)`,
};
