import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import Heading from "../typography/Heading";
import React from "react";

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 2rem;
  position: sticky;
  top: 8.5rem;
  padding: 3rem;
  list-style: none;
  text-transform: uppercase;
  width: 21rem;

  background: url(${({ $theme }) => $theme.panelBackground});
  box-shadow: var(--box-shadow-offset-lg)
    ${({ $theme }) => $theme.sidebarShadow};
  border-radius: var(--border-radius-lg);

  @media (max-width: 798px) {
    display: none;
  }
`;

const MenuHeading = styled(Heading)`
  font-family: DtMF;
  font-size: var(--font-size-xl);
  text-shadow: var(--text-shadow-offset-md)
    ${({ $theme }) => $theme.sidebarHeadingShadow};
  color: ${({ $theme }) => $theme.sidebarHeadingColor};
  transition: all 0.2s;

  &:not(:first-child) {
    margin-top: 1rem;
  }

  &:hover {
    color: ${({ $theme }) => $theme.sidebarHeadingHoverColor};
    text-shadow: var(--text-shadow-offset-md)
      ${({ $theme }) => $theme.sidebarHeadingHoverShadow};
    cursor: pointer;
  }
`;

const MenuItem = styled.li`
  padding-left: 1.5rem;
  border-left: 2px solid ${({ $theme }) => $theme.sidebarMenuItemBorder};
  font-family: Museo, sans-serif;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-boldest);
  color: ${({ $theme }) => $theme.sidebarMenuItemColor};
  transition: all 0.2s;

  &:hover {
    border-left: 2px solid ${({ $theme }) => $theme.sidebarMenuItemBorderHover};
    color: ${({ $theme }) => $theme.sidebarMenuItemHoverColor};
    text-shadow: var(--text-shadow-offset-sm)
      ${({ $theme }) => $theme.sidebarMenuItemHoverShadow};
  }

  ${({ $isActive, $theme }) =>
    $isActive &&
    css`
      color: ${$theme.sidebarMenuItemActiveColor};
      border-left: 2px solid ${$theme.sidebarMenuItemBorderActive};
      text-shadow: var(--text-shadow-offset-sm)
        ${({ $theme }) => $theme.sidebarMenuItemHoverShadow};
    `};
`;

function Sidebar({ menuSections, isOpen, onIsOpen, theme }) {
  function handleSidebarClick(menuItem) {
    onIsOpen(menuItem);
  }

  return (
    <StyledSidebar $theme={theme}>
      {menuSections.map((menuSection) => (
        <React.Fragment key={menuSection.id}>
          <MenuHeading
            onClick={() => handleSidebarClick(menuSection.heading)}
            $theme={theme}
          >
            {menuSection.heading}
          </MenuHeading>

          {menuSection.sections.map((section) => (
            <MenuItem
              key={section.id}
              onClick={() => handleSidebarClick(section.heading)}
              $isActive={isOpen === section.heading}
              $theme={theme}
            >
              <NavLink to={section.link}>{section.heading}</NavLink>
            </MenuItem>
          ))}
        </React.Fragment>
      ))}
    </StyledSidebar>
  );
}

export default Sidebar;
