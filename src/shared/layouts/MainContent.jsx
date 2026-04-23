import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledMainContent = styled.main`
  position: relative;
  z-index: 3;

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
