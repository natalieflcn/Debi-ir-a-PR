import styled from "styled-components";

const StyledLink = styled.a`
  display: flex;
  flex-grow: 1;
`;

function Link({ href, children, ...props }) {
  return (
    <StyledLink href={href} target="_blank" {...props}>
      {children}
    </StyledLink>
  );
}

export default Link;
