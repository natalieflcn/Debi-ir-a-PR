import { NavLink } from "react-router-dom";
import styled from "styled-components";
import User from "./User";

const StyledNavDesktop = styled.ul`
  display: none;
  justify-content: space-between;
  flex: 1;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-boldest);
  font-family: Museo;
  letter-spacing: var(--letter-spacing-museo-tight);
  text-transform: uppercase;

  // TODO fix media queries later
  @media (max-width: 1050px) {
    font-size: 1rem;
  }

  @media (min-width: 798px) {
    display: flex;
  }
`;

const StyledNavLink = styled(NavLink)`
  transition: all 0.2s;

  &:hover,
  &:active,
  &.active {
    color: var(--color-red-200);
    text-shadow: var(--text-shadow-md) var(--color-blue-300);
  }
`;

function NavDesktop({ menuItems }) {
  return (
    <StyledNavDesktop>
      {menuItems.map((item) => (
        <li key={item.label}>
          <StyledNavLink to={item.link}>{item.label}</StyledNavLink>
        </li>
      ))}
      <User />
    </StyledNavDesktop>
  );
}

export default NavDesktop;
