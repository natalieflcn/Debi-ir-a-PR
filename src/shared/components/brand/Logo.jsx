import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.h1`
  /* margin-right: 5rem; */
  font-family: DtMF;
  letter-spacing: var(--letter-spacing-dtmf-tight);
  transition: all 0.25s;

  &:hover,
  &:active {
    color: var(--color-red-200);
    text-shadow: var(--text-shadow-offset-lg) var(--color-blue-300);
  }
`;

const Debi = styled.p`
  font-size: 3rem;

  @media (max-width: 1200px) {
    font-size: var(--font-size-2xl);
  }

  @media (max-width: 481px) {
    font-size: var(--font-size-xl);
  }
`;

const IrAPR = styled.p`
  font-size: 1.85rem;

  @media (max-width: 1200px) {
    font-size: var(--font-size-lg);
  }

  @media (max-width: 481px) {
    font-size: var(--font-size-md);
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
