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
  a:hover,
  a:active {
    color: var(--color-red-200);
    text-shadow: 0px 0px 3px var(--color-red-400);
  }
`;
//create inset text shadow to make words appear bolder

function NavDesktop({ menuItems }) {
  return (
    <StyledNavDesktop>
      {menuItems.map((item) => (
        <MenuItem key={item.label}>
          <NavLink to={item.link}>{item.label}</NavLink>
        </MenuItem>
      ))}
      <User />
    </StyledNavDesktop>
  );
}

export default NavDesktop;
