import styled from "styled-components";

const StyledBold = styled.strong`
  display: inline;
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--font-weight-bold);
  color: ${({ $color }) => $color || `var(--color-red-200)`};
`;

function Bold({ $color, children }) {
  return <StyledBold $color={$color}>{children}</StyledBold>;
}

export default Bold;
