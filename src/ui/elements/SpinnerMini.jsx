import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  width: 100%;
  height: 2.4rem;
  margin: 4rem auto;
  animation: ${rotate} 1.5s infinite linear;
  color: var(--color-blue-0);
`;

export default SpinnerMini;
