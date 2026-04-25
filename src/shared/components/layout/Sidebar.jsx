import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Heading from "../typography/Heading";
import React from "react";
import CreamOverlay from "../../../assets/images/ui/CreamOverlay.png";

const StyledSidebar = styled.aside`
  display: flex;
  position: sticky;

  top: 8.5rem;
  align-self: flex-start;
  flex-direction: column;
  gap: 2rem;
  /* grid: 1/-1; */
  padding: 3rem;
  width: 21rem;
  background-color: var(--color-light-200);
  box-shadow: 3px 3px 2px var(--color-red-200);
  border-radius: var(--border-radius-lg);
  list-style: none;
  text-transform: uppercase;
  background-image: url(${CreamOverlay});

  @media (max-width: 798px) {
    display: none;
  }
`;

const MenuHeading = styled(Heading)`
  font-family: DtMF;
  font-size: 1.9rem;
  text-shadow: 2px 2px 1px var(--color-blue-100);
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
    text-shadow: 1px 2px 1px var(--color-red-300);
    border-left: 2px solid var(--color-red-300);
  }

  ${({ $isActive }) =>
    $isActive &&
    ` color: var(--color-yellow-200);
    border-left: 2px solid var(--color-red-300);`}
`;

function Sidebar({ menuSections, isOpen, onIsOpen }) {
  function handleSidebarClick(heading) {
    onIsOpen(heading);
  }

  return (
    <StyledSidebar>
      {menuSections.map((menuSection) => (
        <React.Fragment key={menuSection.id}>
          <MenuHeading onClick={() => handleSidebarClick(menuSection.heading)}>
            {menuSection.heading}
          </MenuHeading>

          {menuSection.sections.map((section) => (
            <MenuItem
              key={section.id}
              onClick={() => handleSidebarClick(section.heading)}
              $isActive={isOpen === section.heading}
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
