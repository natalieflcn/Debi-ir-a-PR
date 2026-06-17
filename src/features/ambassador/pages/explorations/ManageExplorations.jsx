import styled from "styled-components";
import ExplorationsFilters from "../../../../shared/components/explorations/ExplorationsFilters";
import ExplorationMiniCard from "../../../../shared/components/explorations/ExplorationMiniCard";
import fakeExplorationsData from "../../../explorer/pages/explorations/fakeExplorationsData";
import Row from "../../../../shared/components/layout/Row";

import Input from "../../../../shared/components/form/Input";
import AdminViewMode from "../../../../shared/components/management/AdminViewMode";
import { useState } from "react";
import CondensedTable from "../../../../shared/components/ui/CondensedTable";
import Button from "../../../../shared/components/ui/Button";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { useAmbassadorUI } from "../../contexts/AmbassadorUIContext";

const AmbassadorExplorationsTable = {
  columns: [
    { id: "explorationName", heading: "Exploration Name" },
    { id: "numStops", heading: "# of Stops" },
    { id: "startingLocation", heading: "Start Location" },
    { id: "createdBy", heading: "Created By" },
    { id: "dateCreated", heading: "Date Created" },
    { id: "dateUpdated", heading: "Date Updated" },
    {
      id: "action",
      heading: "Action",
      render: () => (
        <ActionTableCell>
          <Row $direction="horizontal" $gap="var(--gap-sm)">
            <RouterLink to="/ambassador/explorations/:explorationId">
              <Button $size="extraSmall" $variation="secondary">
                View
              </Button>
            </RouterLink>

            <RouterLink to="/ambassador/explorations/:explorationId/edit">
              <Button $size="extraSmall" $variation="primary">
                Edit
              </Button>
            </RouterLink>
          </Row>
        </ActionTableCell>
      ),
    },
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
      id: 1,
      explorationName: "toa alta tour",
      numStops: 5,
      startingLocation: "toa alta, pr",
      createdBy: "me",
      dateCreated: "January 3, 2026",
      dateUpdated: "June 3, 2026",
      action: "View",
    },
    {
      id: 2,
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

const explorationsTableTheme = {
  boxShadow: "var(--box-shadow-offset-lg)",
  shadowColor: "var(--color-green-400)",
  headerBackground: "var(--color-green-200)",
  headerColor: "var(--color-light-0)",
  headerBackgroundAlt: "var(--color-green-300)",
  headerColorAlt: "var(--color-light-0)",
  cellBackground: "var(--color-light-100)",
  cellBackgroundAlt: "var(--color-light-200)",
  borderColor: "var(--color-yellow-300)",
};

const ActionTableCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

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

const AmbassadorExplorationCardButton = [
  {
    id: "view",
    buttonVariation: "secondary",
    buttonName: "View ",
    buttonLink: "/ambassador/explorations/:explorationId",
  },
  {
    id: "edit",
    buttonVariation: "primary",
    buttonName: "Edit ",
    buttonLink: "/ambassador/explorations/:explorationId/edit",
  },
];

function ManageExplorations() {
  const { viewMode, setViewMode } = useAmbassadorUI();

  const handleSelectViewMode = function (mode) {
    setViewMode(mode);
  };

  return (
    <StyledExplorations>
      <Row>
        <RouterLink to="/ambassador/explorations/create">
          <Button $variation="darkRed" $size="small">
            Create New Exploration
          </Button>
        </RouterLink>
      </Row>
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
          $theme={explorationsTableTheme}
        />
      )}
    </StyledExplorations>
  );
}

export default ManageExplorations;
