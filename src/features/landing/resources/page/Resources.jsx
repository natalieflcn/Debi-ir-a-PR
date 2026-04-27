import { useState } from "react";
import styled from "styled-components";
import Row from "../../../../shared/components/layout/Row";
import Sidebar from "../../../../shared/components/layout/Sidebar";
import PanelGroup from "../../../../shared/components/layout/PanelGroup";
import { ResourcesColors } from "../../../../styles/themes/resourcesTheme";
import resourcesData from "../data/resourcesData";

const StyledResources = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

function Resources() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <StyledResources>
      <Row $direction="horizontal" $gap="2rem">
        <Sidebar
          menuSections={resourcesData}
          isOpen={isOpen}
          onIsOpen={setIsOpen}
        />
        <PanelGroup
          menuSections={resourcesData}
          colors={ResourcesColors}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </Row>
    </StyledResources>
  );
}

export default Resources;
