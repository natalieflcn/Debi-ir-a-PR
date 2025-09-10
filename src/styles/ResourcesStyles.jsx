import { useState } from "react";
import styled from "styled-components";
import SpinnerMini from "../ui/elements/SpinnerMini";

// Dive into Puerto Rican History
const LoadingFrame = function ({ src, ...props }) {
  const [isLoadingFrame, setIsLoadingFrame] = useState(true);

  return (
    <StyledFrameWrapper $isLoadingFrame={isLoadingFrame}>
      {isLoadingFrame && <StyledSpinnerMini />}
      <StyledFrame
        src={src}
        onLoad={() => setIsLoadingFrame(false)}
        $isLoadingFrame={isLoadingFrame}
        {...props}
      ></StyledFrame>
    </StyledFrameWrapper>
  );
};

const StyledFrameWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  height: ${({ $isLoadingFrame }) => ($isLoadingFrame ? `25rem` : ``)};
  aspect-ratio: 16 / 9;

  @media (max-width: 798px) {
    height: ${({ $isLoadingFrame }) => ($isLoadingFrame ? `50%` : ``)};
  }
`;

const StyledFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  visibility: ${({ $isLoadingFrame }) =>
    $isLoadingFrame ? `hidden` : `visible`};
`;

const StyledFigure = styled.figure`
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
    box-shadow: 2px 2px 2px var(--color-red-200);
    transition: all 0.5s;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

// Donate to Puerto Rican Organizations

// General Formatting
const StyledHeading3 = styled.h3`
  margin-bottom: 1rem;
  font-family: "DTmF";
  font-size: 2rem;
  line-height: 2rem;
  text-transform: uppercase;
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

export const ResourcesColors = {
  "--heading-color": `var(--color-yellow-200)`,
  "--heading-shadow": `var(--color-red-300)`,

  "--panel-bg-color": `var(--color-light-200)`,
  "--panel-heading-color": `var(--color-blue-200)`,
  "--panel-color": `var(--color-dark-200)`,
  "--panel-box-shadow": `var(--color-red-200)`,

  "--panel-bg-highlight": `var(--color-light-100)`,
  "--panel-heading-highlight": `var(--color-red-200)`,
  "--panel-shadow-highlight": `var(--color-blue-200)`,
  "--panel-box-highlight": `var(--color-red-300)`,

  "--btn-open": `var(--color-blue-200)`,
  "--btn-open-hover": `var(--color-blue-100)`,
  "--btn-close": `var(--color-red-200)`,
  "--btn-close-hover": `var(--color-red-100)`,
};

const ResourcesHistoryComponents = {
  span: ({ node, children, ...props }) => (
    <StyledBold {...props}>{children}</StyledBold>
  ),
  p: ({ node, children, ...props }) => (
    <StyledParagraph {...props}>{children}</StyledParagraph>
  ),
  h3: ({ node, children, ...props }) => (
    <StyledHeading3 {...props}>{children}</StyledHeading3>
  ),
  h4: ({ node, children, ...props }) => (
    <StyledHeading4 {...props}>{children}</StyledHeading4>
  ),
  iframe: ({ node, children, ...props }) => <LoadingFrame {...props} />,
  figure: ({ node, children, ...props }) => (
    <StyledFigure {...props}>{children}</StyledFigure>
  ),
};

const ResourcesDonateComponents = {
  p: ({ node, children, ...props }) => (
    <StyledParagraph {...props}>{children}</StyledParagraph>
  ),
};

export const ResourcesComponents = [
  0,
  ResourcesHistoryComponents,
  ResourcesDonateComponents,
  3,
  4,
];
