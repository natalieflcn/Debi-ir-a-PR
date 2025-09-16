import { useState } from "react";
import styled from "styled-components";
import SpinnerMini from "../ui/elements/SpinnerMini";
import Button from "../ui/elements/Button";

// Dive into Puerto Rican History
const ResourceFrame = function ({ src, ...props }) {
  const [isLoadingFrame, setIsLoadingFrame] = useState(true);

  return (
    <StyledHistoryFrameWrapper $isLoadingFrame={isLoadingFrame}>
      {isLoadingFrame && <StyledSpinnerMini />}
      <StyledHistoryFrame
        src={src}
        onLoad={() => setIsLoadingFrame(false)}
        $isLoadingFrame={isLoadingFrame}
        {...props}
      ></StyledHistoryFrame>
    </StyledHistoryFrameWrapper>
  );
};

const StyledHistoryFrameWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  height: ${({ $isLoadingFrame }) => ($isLoadingFrame ? `25rem` : ``)};
  aspect-ratio: 16 / 9;

  @media (max-width: 798px) {
    height: ${({ $isLoadingFrame }) => ($isLoadingFrame ? `50%` : ``)};
  }
`;

const StyledHistoryFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  visibility: ${({ $isLoadingFrame }) =>
    $isLoadingFrame ? `hidden` : `visible`};
`;

const StyledHistoryFigure = styled.figure`
  display: flex;
  margin: 1.5rem 0;

  img {
    max-width: 100%;
    width: 8.5rem;
    height: 8.5rem;
    margin-right: 1.5rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 2px 2px 1px var(--color-yellow-200);
  }

  & figcaption {
    align-content: flex-start;
    margin-top: -0.25rem;
  }

  &:hover h4 {
    color: var(--color-red-200);
    transition: all 0.5s;
  }

  &:hover img {
    box-shadow: 3px 2px 2px var(--color-red-200);
    transition: all 0.5s;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

// Donate to Puerto Rican Organizations
const StyledDonateFigure = styled.figure`
  display: flex;
  margin: 1.5rem 0 1rem;

  img {
    width: 9rem;
    height: 50%;
    border-radius: 4px;
  }

  div {
    display: flex;
    gap: 1rem;
    margin: 0.5rem 0;
  }

  figcaption {
    margin-left: 1.5rem;
  }

  a {
    margin: 0.1rem 0.5rem 0.5rem 0;
  }

  @media (max-width: 798px) {
    flex-direction: column;

    img {
      align-self: center;
      margin-bottom: 0.5rem;
    }

    figcaption {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin: 0;

      a {
        margin: 0.3rem;
      }
    }
  }
`;

const StyledGallery = styled.div`
  display: grid;
  --g: 8px;
  clip-path: inset(1px);
  margin-bottom: 1.5rem;

  img {
    --_p: calc(-1 * var(--g));
    grid-area: 1/1;
    width: 100%;
    aspect-ratio: 16/8;
    cursor: pointer;
    transition: 0.7s 0.2s;
    border-radius: 6px;
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

// End Act 20-22-60
const StyledImg = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const StyledActFigure = styled.figure`
  display: flex;
  margin-top: 1rem;
  align-items: flex-end;

  img {
    width: 45%;
    border-radius: 5px;
    margin-right: 1.5rem;
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 2rem;
    align-self: flex-start;
  }

  a {
    margin-top: 1rem;
  }

  @media (max-width: 798px) {
    flex-direction: column;

    img {
      width: 100%;
      align-self: center;
      margin: 0 0 1.5rem 0;
    }

    figcaption {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin: 0;

      a {
        margin: 0.3rem;
      }
    }

    h4 {
      align-self: center;
    }
  }
`;

// General Formatting
// const StyledLink = styled.a`
//   display: flex;
//   flex-grow: 1;
//   justify-content: center;
//   padding: 0.8rem 0;
//   border-radius: 5px;
//   font-weight: 700;
//   text-transform: uppercase;

//   &:first-of-type {
//     background-color: var(--color-red-200);

//     &:hover {
//       box-shadow: 4px 4px 1px var(--color-blue-200);
//       background-color: var(--color-red-100);
//       color: var(--color-light-0);
//     }
//   }

//   &:last-of-type {
//     background-color: var(--color-blue-200);

//     &:hover {
//       box-shadow: 4px 4px 1px var(--color-red-200);
//       background-color: var(--color-blue-100);
//       color: var(--color-light-0);
//     }
//   }

//   &:hover h4 {
//     color: var(--color-red-200);
//     transition: all 0.5s;
//   }
// `;

const StyledHeading3 = styled.h3`
  margin-bottom: 1rem;
  font-family: "DTmF";
  font-size: 2rem;
  line-height: 2rem;

  color: var(--color-yellow-200);
  text-shadow: 2px 2px 1px var(--color-red-300);
`;

const StyledHeading4 = styled.h4`
  font-family: "Museo";
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  text-transform: uppercase;
  color: var(--color-red-400);
`;

//TODO
const StyledParagraph = styled.p`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledBold = styled.span`
  font-weight: 500;
  color: var(--color-red-200);
`;

const StyledSpinnerMini = styled(SpinnerMini)`
  margin: 11.25rem 0.5rem;

  @media (max-width: 798px) {
    margin: 4rem 0rem;
  }
`;

//1920x1080 imag
