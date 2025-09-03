import styled from "styled-components";

const Button = styled.button`
  /* small button type, need to add variants later */
  border: none;

  padding: 0.5rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  height: 2rem;
  width: 2rem;
`;

export default Button;
