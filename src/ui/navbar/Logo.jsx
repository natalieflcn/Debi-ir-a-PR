import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-family: DtMF;
  letter-spacing: 0.1rem;
  padding: 1.5rem 2rem;

  a:hover,
  a:active {
    color: var(--color-red-200);
    text-shadow: 0px 0px 3px var(--color-red-400);
  }
`;

const Debi = styled.p`
  font-size: 2.75rem;
`;

const IrAPR = styled.p`
  font-size: 1.65rem;
`;

function Logo() {
  return (
    <div>
      <StyledLogo>
        <NavLink to="/">
          <Debi>DeBÍ</Debi>
          <IrAPR>iR a PR</IrAPR>
        </NavLink>
      </StyledLogo>
    </div>
  );
}

export default Logo;
