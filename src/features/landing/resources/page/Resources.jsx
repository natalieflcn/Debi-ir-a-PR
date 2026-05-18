import Sidebar from "../../../../shared/components/layout/Sidebar";
import PanelGroup from "../../../../shared/components/layout/PanelGroup";
import resourcesData from "../data/resourcesData";
import styled from "styled-components";
import { ResourcesTheme } from "../../../../styles/themes/resourcesTheme";
import { useState } from "react";

const StyledResources = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

function Resources() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <StyledResources>
      <Sidebar
        menuSections={resourcesData}
        isOpen={isOpen}
        onIsOpen={setIsOpen}
        theme={ResourcesTheme}
      />
      <PanelGroup
        menuSections={resourcesData}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        theme={ResourcesTheme}
      />
    </StyledResources>
  );
}

export default Resources;
