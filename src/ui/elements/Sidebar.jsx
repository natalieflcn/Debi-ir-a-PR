import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledSidebar = styled.aside`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  gap: 2rem;
  grid: 1/-1;
  margin-right: 2.5rem;
  padding: 3rem;
  width: 21rem;
  background-color: var(--color-light-200);
  border-radius: 1rem;
  list-style: none;
  @media (max-width: 798px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  ${({ as }) => variants[as]}
  text-transform: uppercase;

  &:hover {
    color: var(--color-yellow-200);
  }
`;

const variants = {
  h1: css`
    font-family: DtMF;
    font-size: 1.75rem;

    text-shadow: 3px 3px 1px var(--color-blue-100);
    color: var(--color-red-200);

    &:not(:first-child) {
      margin-top: 1rem;
    }

    &:hover {
      text-shadow: 3px 3px 1px var(--color-red-300);
    }
  `,

  h2: css`
    font-family: Museo, sans-serif;
    font-weight: 900;
    font-size: 1.25rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--color-blue-100);
    color: var(--color-blue-200);

    &:hover {
      text-shadow: 2px 2px 1px var(--color-red-300);
      border-left: 2px solid var(--color-yellow-400);
    }
  `,
};

function Sidebar({ menuItems }) {
  return (
    <StyledSidebar>
      {menuItems.map((item) => (
        <MenuItem as={item.heading} key={item.label}>
          <NavLink to={item.link}>{item.label}</NavLink>
        </MenuItem>
      ))}
    </StyledSidebar>
  );
}

export default Sidebar;
