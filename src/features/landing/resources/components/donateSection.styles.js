import styled from "styled-components";

export const StyledDonateSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h6 {
    color: var(--color-red-300);
  }

  @media (max-width: 798px) {
    img {
      width: 97%;
      margin-right: 0;
    }
  }
`;

export const StyledOrganization = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 0.2rem;
  padding-right: 0.2rem;

  @media (max-width: 798px) {
    display: flex;
    flex-direction: column;

    div {
      flex-direction: column;
      align-items: normal;
    }
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
