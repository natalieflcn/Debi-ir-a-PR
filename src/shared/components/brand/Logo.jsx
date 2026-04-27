import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.h1`
  margin-right: 6rem;
  font-family: DtMF;
  letter-spacing: var(--letter-spacing-dtmf-tight);
  transition: all 0.25s;

  &:hover,
  &:active {
    color: var(--color-red-200);
    text-shadow: var(--text-shadow-lg) var(--color-blue-300);
  }
`;

const Debi = styled.p`
  font-size: 3rem;

  @media (max-width: 798px) {
    font-size: 2.4rem;
  }

  @media (max-width: 1050px) {
    font-size: 2rem;
  }
`;

const IrAPR = styled.p`
  font-size: 1.85rem;

  @media (max-width: 798px) {
    font-size: 1.45rem;
  }

  @media (max-width: 1050px) {
    font-size: 1.2rem;
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
