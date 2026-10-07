import styled from "styled-components";

const StyledSmallText = styled.strong`
  display: inline;
  font-size: var(--font-size-xs);
  color: ${({ $color }) => $color};
`;

function SmallText({ $color, children }) {
  return <StyledSmallText $color={$color}>{children}</StyledSmallText>;
}

export default SmallText;
