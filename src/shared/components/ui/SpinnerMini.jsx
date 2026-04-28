import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  margin: 4rem auto;
  width: 100%;
  height: 2.4rem;
  color: var(--color-blue-0);
  animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
