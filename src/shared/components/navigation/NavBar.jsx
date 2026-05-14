import styled from "styled-components";
import Logo from "../brand/Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Bubbles from "../decorative/Bubbles";
import BlueOverlay from "../../../assets/images/ui/BlueOverlay.png";

const StyledNavWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%; // ← full width
  background-color: var(--color-blue-200);
  background-image: url(${BlueOverlay});
`;

const StyledNavBar = styled.nav`
  display: flex;
  /* position: sticky; */
  /* top: 0; */
  /* z-index: 2; */
  /* justify-items: space-between; */
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1rem;

  /* background-color: var(--color-blue-200); */
  /* background-image: url(${BlueOverlay}); */

  @media (max-width: 798px) {
    position: relative;
    justify-content: space-between;
  }
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
