import styled from "styled-components";

const StyledBold = styled.strong`
  display: inline;
  font-weight: 700;
  font-size: inherit;
  color: ${({ $color }) => $color || `var(--color-red-200)`};
`;

function Bold({ children }) {
  return <StyledBold>{children}</StyledBold>;
}

export default Bold;
