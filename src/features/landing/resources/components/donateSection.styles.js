import styled from "styled-components";

export const StyledDonateSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledOrganization = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 798px) {
    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;

    div {
      align-items: center;
    }
  }
`;

export const SlicedPhotos = styled.div`
  display: grid;
  --g: 6px;
  clip-path: inset(1px);
  margin: 0 auto;
  justify-self: center;
  width: 100%;

  img {
    /* --_p: calc(-1 * var(--g));
    grid-area: 1/1;

    aspect-ratio: 16/8;
    cursor: pointer;
    transition: 0.7s 0.2s; */

    width: 100%;
    display: block;

    --_p: calc(-1 * var(--g));
    grid-area: 1/1;

    aspect-ratio: 16/8;
    object-fit: cover;

    cursor: pointer;
    transition: 0.7s 0.2s;
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
