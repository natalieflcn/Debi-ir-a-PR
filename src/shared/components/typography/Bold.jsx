import styled from "styled-components";

const StyledBold = styled.strong`
  display: inline;
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--font-weight-bold);
  color: ${({ $color }) => $color || `var(--color-red-200)`};
  line-height: ${({ $lineHeight }) => $lineHeight || "inherit"};
`;

function Bold({ $color, $lineHeight, children }) {
  return (
    <StyledBold $color={$color} $lineHeight={$lineHeight}>
      {children}
    </StyledBold>
  );
}

export default Bold;
