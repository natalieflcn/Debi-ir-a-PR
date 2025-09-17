import styled from "styled-components";
import Bubbles from "./Bubbles";

const StyledBackground = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 2;

  @media (max-width: 798px) {
    z-index: 0;
  }
`;

function Background({ children }) {
  return (
    <StyledBackground>
      <Bubbles />
      {children}
    </StyledBackground>
  );
}

export default Background;
