import styled from "styled-components";
import AboutLayout from "../AboutLayout";

const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;

function About() {
  return <AboutLayout />;
}

export default About;
