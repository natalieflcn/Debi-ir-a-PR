import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-family: DtMF;
  letter-spacing: 0.1rem;
  padding: 1.5rem 2rem;
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
          <Debi>Debí</Debi>
          <IrAPR>ir a PR</IrAPR>
        </NavLink>
      </StyledLogo>
    </div>
  );
}

export default Logo;
