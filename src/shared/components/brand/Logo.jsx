import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../features/auth/contexts/AuthContext";

const themeVariants = {
  blue: {
    color: "var(--color-blue-200)",
    textShadow: "var(--text-shadow-offset-md) var(--color-red-300)",
  },
  red: {
    color: "var(--color-red-200)",
    textShadow: "var(--text-shadow-offset-md) var(--color-blue-300)",
  },
};

const StyledLogo = styled.h1`
  /* margin-right: 5rem; */
  font-family: DtMF;
  letter-spacing: var(--letter-spacing-dtmf-tight);
  transition: all 0.25s;
  line-height: var(--line-height-xl);

  &:hover,
  &:active {
    ${({ $logoTheme }) => `color: ${$logoTheme.color};
    text-shadow: ${$logoTheme.textShadow}`}
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
  // const { role } = useAuth();
  const role = "admin";
  const logoTheme =
    themeVariants[role === "ambassador" || role === "admin" ? "blue" : "red"];

  return (
    <div>
      <StyledLogo $logoTheme={logoTheme}>
        <NavLink to={`/${role ? role : ""}`}>
          <Debi>DeBÍ</Debi>
          <IrAPR>iR a PR</IrAPR>
        </NavLink>
      </StyledLogo>
    </div>
  );
}

export default Logo;
