import styled from "styled-components";
import PanelGroup from "../../../../shared/components/layout/PanelGroup";
import aboutData from "../data/aboutData";
import { useState } from "react";
import Sidebar from "../../../../shared/components/layout/Sidebar";
import { AboutTheme } from "../../../../styles/themes/aboutTheme";

const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;

function About() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <StyledAbout>
      <PanelGroup
        menuSections={aboutData}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        theme={AboutTheme}
      />
      <Sidebar
        menuSections={aboutData}
        onIsOpen={setIsOpen}
        isOpen={isOpen}
        theme={AboutTheme}
      />
    </StyledAbout>
  );
}

export default About;
