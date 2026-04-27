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
      />
      <PanelGroup
        menuSections={resourcesData}
        theme={ResourcesTheme}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </StyledResources>
  );
}

export default Resources;
