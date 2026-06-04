import styled from "styled-components";
import ExplorationsFilters from "../../../explorer/components/explorations/ExplorationsFilters";
import ExplorationMiniCard from "../../../../shared/components/explorations/ExplorationMiniCard";
import fakeExplorationsData from "../../../explorer/pages/explorations/fakeExplorationsData";
import Row from "../../../../shared/components/layout/Row";

import Input from "../../../../shared/components/ui/Input";
import AdminViewMode from "../../../../shared/components/ui/AdminViewMode";
import { useState } from "react";
import CondensedTable from "../../../../shared/components/ui/CondensedTable";

const AmbassadorExplorationsTable = {
  columns: [
    { id: "explorationName", heading: "Exploration Name" },
    { id: "numStops", heading: "# of Stops" },
    { id: "startingLocation", heading: "Start Location" },
    { id: "createdBy", heading: "Created By" },
    { id: "dateCreated", heading: "Date Created" },
    { id: "dateUpdated", heading: "Date Updated" },
    { id: "action", heading: "Action" },
  ],
  rows: [
    {
      id: 0,
      explorationName: "toa alta tour",
      numStops: 5,
      startingLocation: "toa alta, pr",
      createdBy: "me",
      dateCreated: "January 3, 2026",
      dateUpdated: "June 3, 2026",
      action: "View",
    },
    {
      id: 0,
      explorationName: "toa alta tour",
      numStops: 5,
      startingLocation: "toa alta, pr",
      createdBy: "me",
      dateCreated: "January 3, 2026",
      dateUpdated: "June 3, 2026",
      action: "View",
    },
    {
      id: 0,
      explorationName: "toa alta tour",
      numStops: 5,
      startingLocation: "toa alta, pr",
      createdBy: "me",
      dateCreated: "January 3, 2026",
      dateUpdated: "June 3, 2026",
      action: "View",
    },
  ],
};

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

      {viewMode === "list" && (
        <CondensedTable
          columns={AmbassadorExplorationsTable.columns}
          rows={AmbassadorExplorationsTable.rows}
        ></CondensedTable>
      )}
    </StyledExplorations>
  );
}

export default ManageExplorations;
