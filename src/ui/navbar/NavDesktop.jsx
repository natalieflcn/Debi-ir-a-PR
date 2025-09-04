import { NavLink } from "react-router-dom";
import styled from "styled-components";
import User from "./User";

const StyledNavDesktop = styled.ul`
  display: none;
  justify-content: space-between;
  flex: 1;
  font-size: 1.25rem;
  font-weight: 900;
  text-transform: uppercase;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MenuItem = styled.li`
  transition: all 0.2s;

  &:hover,
  &:active {
    color: var(--color-red-200);
    text-shadow: 3px 3px 1px var(--color-blue-300);
  }
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    color: var(--color-red-200);
  }
`;

function NavDesktop({ menuItems }) {
  return (
    <StyledNavDesktop>
      {menuItems.map((item) => (
        <MenuItem key={item.label}>
          <StyledNavLink to={item.link}>{item.label}</StyledNavLink>
        </MenuItem>
      ))}
      <User />
    </StyledNavDesktop>
  );
}

export default NavDesktop;
