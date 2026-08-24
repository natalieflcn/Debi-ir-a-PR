import styled from "styled-components";

const StyledSmallText = styled.strong`
  display: inline;
  font-size: var(--font-size-xs);
`;

function SmallText({ children }) {
  return <StyledSmallText>{children}</StyledSmallText>;
}

export default SmallText;
