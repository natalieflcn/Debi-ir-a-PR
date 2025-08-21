import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const DesktopMenu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 100%;
`;

function NavBar({ menuItems }) {
  return (
    <StyledNav>
      <DesktopMenu>
        {menuItems.map((item) => (
          <li key={item.label}>
            <NavLink to={item.link}>{item.label}</NavLink>
          </li>
        ))}
      </DesktopMenu>
    </StyledNav>
  );
}

export default NavBar;
