import { NavLink } from "react-router-dom";
import styled from "styled-components";
import User from "./User";

const StyledNavDesktop = styled.ul`
  display: none;
  justify-content: space-between;
  flex: 1;
  font-size: 1.5rem;
  font-weight: 900;
  font-family: Museo;
  letter-spacing: -0.02rem;
  text-transform: uppercase;

  @media (min-width: 798px) {
    display: flex;
  }

  @media (max-width: 1050px) {
    font-size: 1rem;
  }
`;

const MenuItem = styled.li`
  transition: all 0.2s;

  &:hover,
  &:active {
    color: var(--color-red-200);
    text-shadow: 2px 2px 1px var(--color-blue-300);
  }
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    color: var(--color-red-200);
    text-shadow: 2px 2px 1px var(--color-blue-300);
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
