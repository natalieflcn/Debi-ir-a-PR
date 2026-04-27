import Row from "./Row";
import Link from "../ui/Link";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { SlGlobe } from "react-icons/sl";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  font-family: DtMF;
  font-size: var(--font-size-md);
  letter-spacing: var(--letter-spacing-dtmf-normal);

  span {
    align-self: center;
    margin-left: 0.5rem;
    font-family: Museo, sans-serif;
    font-size: var(--font-size-sm);
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
  width: 1.5rem;
  height: 1.5rem;
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
  margin-right: 1.1rem;
  width: 1.5rem;
  height: 1.5rem;
  transition: all 0.2s;

  &:hover {
    color: var(--color-blue-100);
  }

  @media (max-width: 798px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const StyledPortfolio = styled(SlGlobe)`
  width: 1.25rem;
  height: 1.25rem;
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
        <Link to="https://github.com/natalieflcn">
          <StyledGitHub />
        </Link>

        <Link to="https://www.linkedin.com/in/natalieflcn/">
          <StyledLinkedIn />
        </Link>

        <Link to="https://www.instagram/indyvox/">
          <StyledPortfolio />
        </Link>
      </Row>
    </StyledFooter>
  );
}

export default Footer;
