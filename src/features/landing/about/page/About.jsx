import styled from "styled-components";
import PanelGroup from "../../../../shared/components/layout/PanelGroup";
import aboutData from "../data/aboutData";
import { useState } from "react";
import Sidebar from "../../../../shared/components/layout/Sidebar";
import { AboutColors } from "../../../../styles/themes/aboutTheme";

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
        colors={AboutColors}
      />
      <Sidebar menuSections={aboutData} onIsOpen={setIsOpen} isOpen={isOpen} />
    </StyledAbout>
  );
}

export default About;
