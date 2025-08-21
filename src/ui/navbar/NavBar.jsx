import styled from "styled-components";

import Logo from "./Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
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
