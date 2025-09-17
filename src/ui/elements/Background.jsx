import styled from "styled-components";
import Bubbles from "./Bubbles";

const StyledBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100vh;

  /* background-color: red; */
  overflow: hidden;
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
