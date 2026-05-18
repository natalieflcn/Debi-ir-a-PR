import { BiMenuAltRight, BiX } from "react-icons/bi";
import styled from "styled-components";
import Button from "../ui/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import User from "./User";
import Heading from "../typography/Heading";

//TODO revise this later, when creating mobile version...
const StyledNavMobile = styled.ul`
  display: flex;
  position: relative;
  z-index: 100;
  font-weight: 500;

  @media (min-width: 798px) {
    width: 100%;
    display: none;
  }
`;

const StyledButton = styled(Button)`
  position: relative;
  bottom: 0.8rem;
  /* right: 0.5rem; */
`;

const Hamburger = styled(BiMenuAltRight)`
  bottom: 1.6rem;
  width: 1rem;
  height: 1rem;
  color: var(--color-light-0);
`;

const CloseMenu = styled(BiX)`
  display: ${({ $isOpen }) => ($isOpen ? `` : `none`)};
  position: relative;
  /* position: fixed; */
  bottom: 0.55rem;
  /* right: 4rem; */
  z-index: 5;
  width: 2rem;
  height: 2rem;
  color: var(--color-dark-200);
`;

const MobileMenu = styled.ul`
  display: flex;
  /* z-index: 10000; */
  flex-direction: column;
  /* justify-content: space-between; */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 2rem 3rem;
  gap: var(--gap-lg);

  background-color: var(--color-light-0);
  color: var(--color-blue-200);

  opacity: ${({ $isOpen }) => ($isOpen ? `1` : `0`)};
  transform: ${({ $isOpen }) =>
    $isOpen ? `translateY(0%)` : `translateY(-100%)`};
  transition:
    transform 1100ms cubic-bezier(0.3, 0.9, 0.5, 0.9),
    opacity 300ms ease-in-out;

  @media (max-width: 500px) {
    gap: var(--gap-md);
  }
`;

const MenuItem = styled(NavLink)`
  a:hover,
  &a:active &a.active {
    color: var(--color-red-200);
  }
`;

const StyledHeading = styled(Heading)`
  @media (max-width: 500px) {
    font-size: var(--font-size-sm);
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
        <StyledButton $size="square" $variation="primary" onClick={handleClick}>
          <Hamburger />
        </StyledButton>
      )}

      <CloseMenu $isOpen={isOpen} onClick={handleClick} />

      <MobileMenu $isOpen={isOpen}>
        {menuItems.map((item) => (
          <MenuItem key={item.label}>
            <NavLink to={item.link} onClick={handleClick}>
              <StyledHeading as="h5">{item.label}</StyledHeading>
            </NavLink>
          </MenuItem>
        ))}
        <User />
      </MobileMenu>
    </StyledNavMobile>
  );
}

export default NavMobile;
