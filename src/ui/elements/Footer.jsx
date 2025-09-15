import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import styled from "styled-components";
import Row from "./Row";
import { NavLink } from "react-router-dom";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  font-family: DtMF;
  font-size: 1.5rem;
  letter-spacing: 0.07rem;

  span {
    font-family: Museo;
    font-size: 1rem;
    align-self: center;
    margin-left: 0.5rem;
  }

  @media (max-width: 798px) {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;

    span {
      margin-left: 0.1rem;
      font-size: 0.6rem;
    }
  }
`;

const StyledGitHub = styled(BiLogoGithub)`
  margin-right: 1rem;
  transition: all 0.2s;

  &:hover {
    color: var(--color-blue-100);
  }

  @media (max-width: 798px) {
    margin-right: 0.5rem;
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const StyledLinkedIn = styled(BiLogoLinkedin)`
  transition: all 0.2s;

  &:hover {
    color: var(--color-blue-100);
  }

  @media (max-width: 798px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const year = new Date().getFullYear();

function Footer() {
  return (
    <StyledFooter>
      <Row $direction="horizontal">
        CReaTeD By NaTaLie FaLCoN <span>&copy;</span> <span>{year}</span>
      </Row>

      <Row $direction="horizontal">
        <NavLink to="https://github.com/natalieflcn">
          <StyledGitHub />
        </NavLink>

        <NavLink to="https://www.linkedin.com/in/nataliedfalcon/">
          <StyledLinkedIn />
        </NavLink>
      </Row>
    </StyledFooter>
  );
}

export default Footer;
