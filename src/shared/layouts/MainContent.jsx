import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledMainContent = styled.main`
  position: relative;
  z-index: 3;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media (max-width: 798px) {
    z-index: 0;
  }
`;
function MainContent() {
  return (
    <StyledMainContent>
      <Outlet />
    </StyledMainContent>
  );
}

export default MainContent;
