import styled from "styled-components";

const StyledFooter = styled.footer`
  display: inline-block;
  font-family: DtMF;
  font-size: 1.5rem;
  letter-spacing: 0.05rem;
`;

function Footer() {
  return (
    <footer>
      <StyledFooter>CReaTeD By NaTaLie FaLCoN</StyledFooter>
      <span>Copyright 2025</span>
    </footer>
  );
}

export default Footer;
