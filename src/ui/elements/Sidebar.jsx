import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  gap: 3rem;
  grid: 1/-1;
  margin-right: 2.5rem;
  padding: 3rem 2rem;
  width: 20rem;
  background-color: var(--color-light-200);
  border-radius: 1rem;
  list-style: none;

  @media (max-width: 798px) {
    display: none;
  }
`;

const MenuItem = styled.li``;

function Sidebar({ menuItems }) {
  return (
    <StyledSidebar>
      {menuItems.map((item) => (
        <MenuItem key={item.label}>
          <NavLink to={item.link}>{item.label}</NavLink>
        </MenuItem>
      ))}
    </StyledSidebar>
  );
}

export default Sidebar;
