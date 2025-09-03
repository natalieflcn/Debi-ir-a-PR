import styled from "styled-components";

import Logo from "./Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  align-items: center;
  padding: 1.5rem 0;

  background-color: var(--color-blue-200);

  @media (max-width: 798px) {
    padding-bottom: 2rem;
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
