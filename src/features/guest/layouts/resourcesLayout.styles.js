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

// End Act 20-22-60 Panel
export const EndActWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
`;

// Donate to Puerto Rican Organizations Panel
export const CharityOrganizationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    /* display: flex; */
    /* gap: 1rem; */
  }
`;

export const SlicedPhotos = styled.div`
  display: grid;
  --g: 8px;
  clip-path: inset(1px);

  img {
    --_p: calc(-1 * var(--g));
    grid-area: 1/1;
    width: 100%;
    aspect-ratio: 16/8;
    cursor: pointer;
    transition: 0.7s 0.2s;
    border-radius: var(--border-radius-lg);
  }

  img:first-child {
    clip-path: polygon(0 0, calc(100% + var(--_p)) 0, 0 calc(100% + var(--_p)));
  }

  img:last-child {
    clip-path: polygon(
      100% 100%,
      100% calc(0% - var(--_p)),
      calc(0% - var(--_p)) 100%
    );
  }

  &:hover > img:last-child,
  &:hover > img:first-child:hover {
    --_p: calc(50% - var(--g));
  }
  &:hover > img:first-child,
  &:hover > img:first-child:hover + img {
    --_p: calc(-50% - var(--g));
  }

  @media (max-width: 798px) {
    --g: 4px;
  }
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
