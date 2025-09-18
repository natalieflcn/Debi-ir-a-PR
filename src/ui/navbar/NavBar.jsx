import styled from "styled-components";

import Logo from "./Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 1;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem;
  background-color: var(--color-blue-200);
  background-image: url("public/images/BlueOverlay.png");

  @media (max-width: 798px) {
    position: relative;
    justify-content: space-between;
  }
`;

function NavBar({ menuItems }) {
  //TODO create state based on whether desktop or mobile nav is open, render menu depending on this condition
  return (
    <StyledNav>
      <Logo />
      <NavDesktop menuItems={menuItems} />
      <NavMobile menuItems={menuItems}></NavMobile>
    </StyledNav>
  );
}

export default NavBar;
