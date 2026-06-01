import styled from "styled-components";
import Logo from "../brand/Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Bubbles from "../decorative/Bubbles";
import BlueOverlay from "../../../assets/images/ui/BlueOverlay.png";

const StyledNavWrapper = styled.div`
  position: sticky;
  /* box-sizing: border-box; */
  top: 0;
  z-index: 2;
  width: 100%; // ← full width

  /* background-color: var(--color-blue-200);
  background-image: url(${BlueOverlay}); */

  background-color: ${({ theme }) => theme.backgroundColor};
  background-image: ${({ theme }) => theme.backgroundImage};

  /* @media (max-width: 600px) {
    width: 100%;
    flex-grow: 1;
  } */
`;

const StyledNavBar = styled.nav`
  display: flex;
  /* position: sticky; */
  /* top: 0; */
  /* z-index: 2; */
  /* justify-items: space-between; */
  gap: 4rem;
  min-width: 0;
  align-items: center;
  max-width: 1200px;

  margin: 0 auto;
  padding: 1.5rem 1rem;

  /* background-image: url(${BlueOverlay}); */

  background-image: ${({ theme }) => theme.backgroundImage};
  /* @media (max-width: 800px) {
    position: relative;
    max-width: 400px;
    justify-content: space-around;
    padding: 0;
    gap: 0;
  } */

  @media (max-width: 1200px) {
    /* width: 90%; */
  }

  @media (max-width: 800px) {
    padding: 1.5rem 2rem;

    justify-content: space-between;
  }

  /* @media (max-width: 600px) {
    min-width: 100%;
  } */
`;

function NavBar({ menuItems }) {
  //TODO create state based on whether desktop or mobile nav is open, render menu depending on this condition
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
