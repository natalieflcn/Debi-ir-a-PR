import { BiMenuAltRight } from "react-icons/bi";
import styled from "styled-components";
import Button from "../elements/Button";

const StyledNavMobile = styled.ul``;

const MenuItem = styled.li`
  margin: 0 1rem;

  a {
    text-decoration: none;
  }
`;

const Hamburger = styled(BiMenuAltRight)`
  color: white;
`;

function NavMobile() {
  // TODO create state for whether mobile menu is open, display hamburger or mobile menu based upon this
  return (
    <>
      <Button>
        <Hamburger />
      </Button>
    </>
  );
}

export default NavMobile;
