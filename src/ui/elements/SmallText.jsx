import styled from "styled-components";

const StyledSmallText = styled.strong`
  display: inline;
  font-size: 1rem;
`;

function SmallText({ children }) {
  return <StyledSmallText>{children}</StyledSmallText>;
}

export default SmallText;
