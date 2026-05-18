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
  font-size: var(--font-size-xl);
  letter-spacing: var(--letter-spacing-dtmf-normal);

  span {
    align-self: center;
    margin-left: 0.5rem;
    font-family: Museo, sans-serif;
    font-size: var(--font-size-sm);
  }

  @media (max-width: 798px) {
    font-size: var(--font-size-sm);
    letter-spacing: 0.05rem;
    align-items: center;
    gap: var(--gap-sm);
    padding-top: 1.25rem;

    span {
      font-size: var(--font-size-xs);
      margin-left: 0.3rem;
    }

    flex-direction: column;
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

  @media (max-width: 800px) {
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

  @media (max-width: 800px) {
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

  @media (max-width: 800px) {
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
        <Link href="https://github.com/natalieflcn">
          <StyledGitHub />
        </Link>

        <Link href="https://www.linkedin.com/in/natalieflcn/">
          <StyledLinkedIn />
        </Link>

        <Link href="https://www.instagram/indyvox/">
          <StyledPortfolio />
        </Link>
      </Row>
    </StyledFooter>
  );
}

export default Footer;
