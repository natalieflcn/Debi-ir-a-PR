import styled from "styled-components";
import ExplorationsFilters from "../../../explorer/components/explorations/ExplorationsFilters";
import ExplorationMiniCard from "../../../../shared/components/explorations/ExplorationMiniCard";
import fakeExplorationsData from "../../../explorer/pages/explorations/fakeExplorationsData";
import Row from "../../../../shared/components/layout/Row";

import Input from "../../../../shared/components/ui/Input";
import AdminViewMode from "../../../../shared/components/ui/AdminViewMode";
import { useState } from "react";

const StyledExplorations = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
`;

const ExplorationCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap-2xl);
`;

const AmbassadorExplorationCardButton = {
  buttonName: "View and Edit Exploration",
  buttonLink: "",
};

function ManageExplorations() {
  const [viewMode, setViewMode] = useState("grid");

  const handleSelectViewMode = function (mode) {
    setViewMode(mode);
  };

  return (
    <StyledExplorations>
      <Row $direction="horizontal" $gap="var(--gap-lg)">
        <Input placeholder="Search for an exploration..." />
        <ExplorationsFilters />
        <AdminViewMode
          viewMode={viewMode}
          onViewModeChange={handleSelectViewMode}
        />
      </Row>

      {viewMode === "grid" && (
        <ExplorationCards>
          {fakeExplorationsData.map((exploration) => (
            <ExplorationMiniCard
              name={exploration.name}
              description={exploration.description}
              numStops={exploration.numStops}
              startLocation={exploration.startLocation}
              buttonDetails={AmbassadorExplorationCardButton}
              key={exploration.id}
            />
          ))}
        </ExplorationCards>
      )}
    </StyledExplorations>
  );
}

export default ManageExplorations;
