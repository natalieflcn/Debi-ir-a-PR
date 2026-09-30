import styled from "styled-components";
import { Outlet, useNavigation } from "react-router-dom";
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

  return (
    <StyledMainContent>
      <>
        {navigate.state === "loading" && <Spinner />}
        {navigate.state !== "loading" && <Outlet />}
      </>
    </StyledMainContent>
  );
}

export default MainContent;
