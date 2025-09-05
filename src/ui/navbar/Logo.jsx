import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-family: DtMF;
  letter-spacing: 0.1rem;
  margin-right: 6rem;
  transition: all 0.25s;

  &:hover,
  &:active {
    color: var(--color-red-200);
    text-shadow: 3px 3px 1px var(--color-blue-300);
  }
`;

const Debi = styled.p`
  font-size: 2.75rem;

  @media (max-width: 798px) {
    font-size: 2.4rem;
  }
`;

const IrAPR = styled.p`
  font-size: 1.65rem;

  @media (max-width: 798px) {
    font-size: 1.45rem;
  }
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
