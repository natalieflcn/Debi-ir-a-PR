import styled from "styled-components";

const StyledInsetSpan = styled.span`
  background-color: var(--color-light-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--box-shadow-inset-sm) var(--color-dark-200);
  padding: 0.5rem;
  /* width: 1rem; */
  height: 1rem;
  min-width: 1rem;
  text-align: center;
`;

function InsetSpan({ children }) {
  return <StyledInsetSpan>{children}</StyledInsetSpan>;
}

export default InsetSpan;
