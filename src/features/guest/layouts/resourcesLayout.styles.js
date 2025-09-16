import { useState } from "react";
import styled from "styled-components";
import SpinnerMini from "../../../ui/elements/SpinnerMini";
// STYLED COMPONENTS

// Dive into Puerto Rican History Panel
export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: var(--color-yellow-200);
    text-shadow: 2px 3px 1px var(--color-red-300);
    text-transform: uppercase;
  }
`;

export const HistoryFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-lg);
  visibility: ${({ $isLoadingFrame }) =>
    $isLoadingFrame ? `hidden` : `visible`};
`;

export const HistoryVideoSection = styled.div`
  width: 100%;
  height: ${({ $isLoadingFrame }) => ($isLoadingFrame ? `25rem` : ``)};
  aspect-ratio: 16 / 9;

  @media (max-width: 798px) {
    height: ${({ $isLoadingFrame }) => ($isLoadingFrame ? `50%` : ``)};
  }
`;

export const HistoryBookSection = styled.figure`
  display: flex;
  margin-bottom: 1.5rem;

  h6 {
    color: var(--color-red-400);
    margin-bottom: 0.25rem;
    transition: all 0.5s;
  }

  img {
    width: 6.2rem;
    aspect-ratio: 3/4;
    border-radius: 0 4px 4px 0;
    box-shadow: 3px 2px 1px var(--color-yellow-200);
    margin-right: 1.5rem;
    transition: all 0.5s;
  }

  &:hover h6 {
    color: var(--color-red-200);
  }

  &:hover img {
    box-shadow: 2px 2px 2px var(--color-red-200);
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

// Donate to Puerto Rican Organizations Panel
export const CharityOrganizationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h6 {
    color: var(--color-red-300);
  }
`;

// End Act 20-22-60 Panel
export const EndActWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;

  h5 {
    color: var(--color-red-400);
  }
`;

// Keep Up with Puerto Rican News Panel
export const PuertoRicanNewsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  img {
    width: 47%;
    border-radius: var(--border-radius-sm);
  }

  h6 {
    color: var(--color-red-400);
  }

  @media (max-width: 798px) {
    flex-direction: column;
    gap: 1rem;

    img {
      width: 100%;
    }
  }
`;

// HELPER COMPONENTS
export const HistorySpinnerMini = styled(SpinnerMini)`
  margin: 11.25rem 0.5rem;

  @media (max-width: 798px) {
    margin: 4rem 0rem;
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

// COLOR PALETTE
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
