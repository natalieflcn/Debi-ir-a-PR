import styled from "styled-components";

import Logo from "./Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 10;
  align-items: center;
  padding: 2rem 5rem;
  background-color: var(--color-blue-200);

  @media (max-width: 798px) {
    width: 85%;
    position: relative;
    justify-content: space-between;
    padding: 2rem 2rem;
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
