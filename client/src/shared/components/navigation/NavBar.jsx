import styled from "styled-components";
import Logo from "../brand/Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Bubbles from "../decorative/Bubbles";
import BlueOverlay from "../../../assets/images/ui/BlueOverlay.webp";

const StyledNavWrapper = styled.div`
  position: sticky;

  top: 0;
  z-index: 2;
  width: 100%;

  background-color: ${({ theme }) => theme.backgroundColor};
  background-image: ${({ theme }) => theme.backgroundImage};
`;

const StyledNavBar = styled.nav`
  display: flex;

  gap: 4rem;
  min-width: 0;
  align-items: center;
  max-width: 1200px;

  margin: 0 auto;
  padding: 1.5rem 1rem;
  overflow: hidden;

  background-image: ${({ theme }) => theme.backgroundImage};

  @media (max-width: 1200px) {
    gap: 3rem;
  }

  @media (max-width: 800px) {
    padding: 1.5rem 2rem;

    justify-content: space-between;
  }
`;

function NavBar({ menuItems }) {
  return (
    <StyledNavWrapper>
      <StyledNavBar>
        <Bubbles numBubbles={25} />
        <Logo />
        <NavDesktop menuItems={menuItems} />
        <NavMobile menuItems={menuItems}></NavMobile>
      </StyledNavBar>
    </StyledNavWrapper>
  );
}

export default NavBar;
