import { BiMenuAltRight, BiX } from "react-icons/bi";
import styled from "styled-components";
import Button from "../elements/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const StyledNavMobile = styled.ul`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled(BiMenuAltRight)`
  width: 1rem;
  height: 1rem;
  color: white;
`;

const CloseMenu = styled(BiX)`
  display: ${({ $isOpen }) => ($isOpen ? `` : `none`)};
  position: fixed;
  z-index: 1;
  width: 2rem;
  height: 2rem;
  color: black;
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 2.75rem 2rem;
  gap: 2rem;
  list-style: none;
  background-color: white;

  opacity: ${({ $isOpen }) => ($isOpen ? `1` : `0`)};
  transform: ${({ $isOpen }) =>
    $isOpen ? `translateY(0%)` : `translateY(-100%)`};
  transition: transform 1100ms cubic-bezier(0.3, 0.9, 0.5, 0.9),
    opacity 300ms ease-in-out;
`;

const MenuItem = styled.li`
  margin: 0 1rem;

  a {
    text-decoration: none;
  }
`;

function NavMobile({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledNavMobile>
      <Button onClick={handleClick}>
        <Hamburger />
      </Button>

      <CloseMenu $isOpen={isOpen} onClick={handleClick} />

      <MobileMenu $isOpen={isOpen}>
        {menuItems.map((item) => (
          <MenuItem key={item.label}>
            <NavLink to={item.link} onClick={handleClick}>
              {item.label}
            </NavLink>
          </MenuItem>
        ))}
      </MobileMenu>
    </StyledNavMobile>
  );
}

export default NavMobile;
