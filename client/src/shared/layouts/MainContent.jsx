import styled from "styled-components";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Spinner from "../components/ui/Spinner";

const StyledMainContent = styled.main`
  position: relative;
  z-index: 3;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media (max-width: 800px) {
    padding: 1.5rem;
    z-index: 0;
  }
`;
function MainContent() {
  const navigate = useNavigation();
  const location = useLocation();

  const isPageTransition =
    navigate.state === "loading" &&
    navigate.location.pathname !== location.pathname;
  return (
    <StyledMainContent>
      <>{isPageTransition ? <Spinner /> : <Outlet />}</>
    </StyledMainContent>
  );
}

export default MainContent;
