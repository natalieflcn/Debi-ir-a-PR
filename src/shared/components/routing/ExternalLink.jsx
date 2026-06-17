import styled from "styled-components";

const StyledLink = styled.a`
  display: flex;
  /* flex-grow: inherit; */

  :hover {
    cursor: pointer;
  }
`;

function ExternalLink({ href, children, ...props }) {
  return (
    <StyledLink href={href} target="_blank" {...props}>
      {children}
    </StyledLink>
  );
}

export default ExternalLink;
