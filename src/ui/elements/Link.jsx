import styled from "styled-components";

const StyledLink = styled.a`
  display: flex;
  flex-grow: 1;
`;

function Link({ href, children }) {
  return <StyledLink href={href}>{children}</StyledLink>;
}

export default Link;
