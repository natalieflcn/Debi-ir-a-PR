import { useState } from "react";
import styled from "styled-components";
import SpinnerMini from "../ui/elements/SpinnerMini";
import Button from "../ui/elements/Button";

// Dive into Puerto Rican History
const LoadingFrame = function ({ src, ...props }) {
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
    box-shadow: 2px 2px 2px var(--color-red-200);
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
    margin: 0.1rem 0.1rem 1rem;
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
`;

// Keep Up with Puerto Rican News
const StyledNewsFigure = styled.figure`
  display: flex;
  gap: 1rem;

  img {
    width: 50%;
    border-radius: 4px;
  }

  h4 {
    text-transform: none;
    margin-bottom: 1rem;
  }

  a {
    margin-top: 1rem;
  }
`;

// General Formatting
const StyledLink = styled.a`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 0.8rem 0;
  border-radius: 5px;
  color: var(--color-light-0);
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.4s;

  &:first-of-type {
    background-color: var(--color-red-200);

    &:hover {
      box-shadow: 4px 4px 1px var(--color-blue-200);
      background-color: var(--color-red-100);
    }
  }

  &:last-of-type {
    background-color: var(--color-blue-200);

    &:hover {
      box-shadow: 4px 4px 1px var(--color-red-200);
      background-color: var(--color-blue-100);
    }
  }

  &:hover h4 {
    color: var(--color-red-200);
    transition: all 0.5s;
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
    }
  }
`;

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
    <StyledHistoryFigure {...props}>{children}</StyledHistoryFigure>
  ),
};

const ResourcesDonateComponents = {
  p: ({ node, children, ...props }) => (
    <StyledParagraph {...props}>{children}</StyledParagraph>
  ),
  h4: ({ node, children, ...props }) => (
    <StyledHeading4 {...props}>{children}</StyledHeading4>
  ),
  figure: ({ node, children, ...props }) => (
    <StyledDonateFigure {...props}>{children}</StyledDonateFigure>
  ),
  div: ({ node, children, ...props }) => (
    <StyledGallery>{children}</StyledGallery>
  ),
  button: ({ node, children, ...props }) => (
    <Button {...props}>{children}</Button>
  ),
  span: ({ node, children, ...props }) => (
    <StyledBold {...props}>{children}</StyledBold>
  ),
  a: ({ node, children, ...props }) => (
    <StyledLink {...props}>{children}</StyledLink>
  ),
};

const ResourcesActComponents = {
  p: ({ node, children, ...props }) => (
    <StyledParagraph {...props}>{children}</StyledParagraph>
  ),
  span: ({ node, children, ...props }) => (
    <StyledBold {...props}>{children}</StyledBold>
  ),
  img: ({ node, children, ...props }) => (
    <StyledImg {...props}>{children}</StyledImg>
  ),
  figure: ({ node, children, ...props }) => (
    <StyledActFigure {...props}>{children}</StyledActFigure>
  ),
  h4: ({ node, children, ...props }) => (
    <StyledHeading4 {...props}>{children}</StyledHeading4>
  ),
  a: ({ node, children, ...props }) => (
    <StyledLink {...props}>{children}</StyledLink>
  ),
};

export const ResourcesNewsComponents = {
  figure: ({ node, children, ...props }) => (
    <StyledNewsFigure {...props}>{children}</StyledNewsFigure>
  ),
  h4: ({ node, children, ...props }) => (
    <StyledHeading4 {...props}>{children}</StyledHeading4>
  ),
  p: ({ node, children, ...props }) => (
    <StyledParagraph {...props}>{children}</StyledParagraph>
  ),
  a: ({ node, children, ...props }) => (
    <StyledLink {...props}>{children}</StyledLink>
  ),
};

export const ResourcesComponents = [
  0,
  ResourcesHistoryComponents,
  ResourcesDonateComponents,
  ResourcesActComponents,
  ResourcesNewsComponents,
];
