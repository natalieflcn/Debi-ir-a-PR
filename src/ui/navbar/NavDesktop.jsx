import { NavLink } from "react-router-dom";
import styled from "styled-components";
import User from "./User";

const StyledNavDesktop = styled.ul`
  display: none;
  list-style: none;
  justify-content: space-around;
  flex: 1;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;

  a {
    text-decoration: none;
  }
`;

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
