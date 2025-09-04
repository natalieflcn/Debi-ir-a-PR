import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import Heading from "./Heading";
import React from "react";

const StyledSidebar = styled.aside`
  display: flex;
  position: sticky;

  top: 8.5rem;
  align-self: flex-start;
  flex-direction: column;
  gap: 2rem;
  grid: 1/-1;
  margin-right: 2.5rem;
  padding: 3rem;
  width: 21rem;
  background-color: var(--color-light-200);
  box-shadow: 3px 3px 2px var(--color-red-200);
  border-radius: var(--border-radius-lg);
  list-style: none;
  text-transform: uppercase;

  @media (max-width: 798px) {
    display: none;
  }
`;

// const StyledNavLink = styled(NavLink)`
//   &.active {
//     color: var(--color-red-200);
//   }
// `;

const MenuHeading = styled(Heading)`
  font-family: DtMF;
  font-size: 1.75rem;
  text-shadow: 3px 3px 1px var(--color-blue-100);
  color: var(--color-red-200);
  transition: all 0.2s;

  &:not(:first-child) {
    margin-top: 1rem;
  }

  &:hover {
    color: var(--color-yellow-200);
    text-shadow: 2px 2px 1px var(--color-red-300);
  }
`;

const MenuItem = styled.li`
  font-family: Museo, sans-serif;
  font-weight: 900;
  font-size: 1.25rem;
  padding-left: 1.5rem;
  border-left: 2px solid var(--color-blue-100);
  color: var(--color-blue-200);
  transition: all 0.2s;

  &:hover {
    color: var(--color-yellow-200);
    text-shadow: 2px 2px 1px var(--color-red-300);
    border-left: 2px solid var(--color-yellow-400);
  }
`;

function Sidebar({ menuItems }) {
  return (
    <StyledSidebar>
      {menuItems.map((menuSection) => (
        <React.Fragment key={menuSection.label}>
          <MenuHeading>{menuSection.label}</MenuHeading>

          {menuSection.items.map((item) => (
            <MenuItem key={item.label}>
              <NavLink to={item.link}>{item.label}</NavLink>
            </MenuItem>
          ))}
        </React.Fragment>
      ))}
    </StyledSidebar>
  );
}

export default Sidebar;
