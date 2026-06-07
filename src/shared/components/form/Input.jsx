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
`;

function Input({ placeholder }) {
  return <StyledInput placeholder={placeholder} />;
}

export default Input;
