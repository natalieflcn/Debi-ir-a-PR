import styled from "styled-components";

const StyledBold = styled.span`
  font-weight: 500;
  color: var(--color-red-200);
`;

const StyledParagraph = styled.p`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledHeading3 = styled.h3`
  font-family: "DTmF";
  font-size: 2rem;
  line-height: 2rem;
  text-transform: uppercase;
  color: var(--color-yellow-200);
  text-shadow: 2px 2px 1px var(--color-red-300);
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

export const ResourcesComponents = {
  span: ({ node, children, ...props }) => (
    <StyledBold {...props}>{children}</StyledBold>
  ),
  p: ({ node, children, ...props }) => (
    <StyledParagraph {...props}>{children}</StyledParagraph>
  ),
  h3: ({ node, children, ...props }) => (
    <StyledHeading3>{children}</StyledHeading3>
  ),
};
