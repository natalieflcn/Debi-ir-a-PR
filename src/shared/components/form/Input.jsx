import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: var(--border-radius-md);
  padding: auto;
  flex-grow: 1;
  padding: 1rem;
  box-sizing: border-box;
  color: var(--color-dark-200);
  font-weight: var(--font-weight-medium);
  font-family: Museo;
  width: 100%;
`;

function Input({ placeholder, ...props }) {
  return <StyledInput placeholder={placeholder} {...props} />;
}

export default Input;
