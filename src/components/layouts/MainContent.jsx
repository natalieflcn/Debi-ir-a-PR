import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledMainContent = styled.main`
  position: relative;
  z-index: 1000;
`;
function MainContent() {
  return (
    <StyledMainContent>
      <Outlet />
    </StyledMainContent>
  );
}

export default MainContent;
