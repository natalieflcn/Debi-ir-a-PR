import { BiMenuAltRight, BiX } from "react-icons/bi";
import styled, { css } from "styled-components";
import Button from "../elements/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import User from "./User";

const StyledNavMobile = styled.ul`
  display: flex;
  position: relative;
  z-index: 100;
  font-weight: 500;
  color: #191d23;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledButton = styled(Button)`
  position: relative;
  bottom: 0.8rem;
`;

const Hamburger = styled(BiMenuAltRight)`
  bottom: 1.6rem;
  width: 1rem;
  height: 1rem;
  color: var(--color-light-0);
`;

const CloseMenu = styled(BiX)`
  display: ${({ $isOpen }) => ($isOpen ? `` : `none`)};
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 5;
  width: 2rem;
  height: 2rem;
  color: var(--color-dark-200);
`;

const MobileMenu = styled.ul`
  display: flex;
  /* z-index: 10000; */
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 2.75rem 3rem;
  gap: 3rem;
  font-weight: 700;
  background-color: var(--color-light-0);
  color: var(--color-blue-200);

  opacity: ${({ $isOpen }) => ($isOpen ? `1` : `0`)};
  transform: ${({ $isOpen }) =>
    $isOpen ? `translateY(0%)` : `translateY(-100%)`};
  transition: transform 1100ms cubic-bezier(0.3, 0.9, 0.5, 0.9),
    opacity 300ms ease-in-out;
`;

const MenuItem = styled.li`
  a:hover,
  a:active {
    color: var(--color-red-200);
  }
`;

function NavMobile({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledNavMobile>
      {!isOpen && (
        <StyledButton $size="small" $variation="primary" onClick={handleClick}>
          <Hamburger />
        </StyledButton>
      )}

      <CloseMenu $isOpen={isOpen} onClick={handleClick} />

      <MobileMenu $isOpen={isOpen}>
        {menuItems.map((item) => (
          <MenuItem key={item.label}>
            <NavLink to={item.link} onClick={handleClick}>
              {item.label}
            </NavLink>
          </MenuItem>
        ))}
        <User />
      </MobileMenu>
    </StyledNavMobile>
  );
}

export default NavMobile;
