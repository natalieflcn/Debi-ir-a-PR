import styled from "styled-components";

import Row from "../../../../shared/components/layout/Row";

import Input from "../../../../shared/components/form/Input";
import AdminViewMode from "../../../../shared/components/management/AdminViewMode";
import { useEffect, useState } from "react";
import CondensedTable from "../../../../shared/components/ui/CondensedTable";
import Button from "../../../../shared/components/ui/Button";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { useAdminUI } from "../../contexts/AdminUIContext";
import Pagination from "../../../../shared/components/ui/Pagination";
import { useLoaderData } from "react-router-dom";
import ExplorationsFilters from "../../../explorations/components/ExplorationsFilters";
import ExplorationMiniCard from "../../../explorations/components/ExplorationMiniCard";

const getAdminExplorationsTable = function () {
  return {
    columns: [
      { id: "name", heading: "Exploration Name" },
      { id: "numStops", heading: "# of Stops" },
      { id: "startingCity", heading: "Starting City" },
      { id: "createdBy", heading: "Created By" },
      { id: "dateCreated", heading: "Date Created" },
      { id: "dateUpdated", heading: "Date Updated" },
      {
        id: "action",
        heading: "Action",
        render: (row) => (
          <ActionTableCell>
            <Row $direction="horizontal" $gap="var(--gap-sm)">
              <RouterLink to={`${row.id}`}>
                <Button $size="extraSmall" $variation="secondary">
                  View
                </Button>
              </RouterLink>

              <RouterLink to={`${row.id}/edit`}>
                <Button $size="extraSmall" $variation="primary">
                  Edit
                </Button>
              </RouterLink>
            </Row>
          </ActionTableCell>
        ),
      },
    ],
  };
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

const getAdminExplorationCardButton = function (exploration) {
  console.log("exploration received:", exploration);
  console.log("exploration.id:", exploration?.id);
  return [
    {
      id: "view",
      buttonVariation: "secondary",
      buttonName: "View ",
      buttonLink: `/admin/explorations/${exploration.id}`,
    },
    {
      id: "edit",
      buttonVariation: "primary",
      buttonName: "Edit ",
      buttonLink: `/admin/explorations/${exploration.id}/edit`,
    },
  ];
};

const ITEMS_PER_PAGE = 9;

function ManageExplorations() {
  const { viewMode, setViewMode } = useAdminUI();
  const [sortBy, setSortBy] = useState("featured");
  const [filterBy, setFilterBy] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const explorations = useLoaderData();
  console.log(explorations);

  const filteredExplorations = [...explorations].filter((exploration) => {
    if (filterBy === "all") return true;

    return exploration.tags.some((tag) =>
      tag.toLowerCase().includes(filterBy.toLowerCase()),
    );
  });

  const sortedExplorations = [...filteredExplorations].sort((a, b) => {
    if (sortBy === "numStops") return a.numStops - b.numStops;
    else return a.name.localeCompare(b.name);
  });

  const totalPages = Math.ceil(sortedExplorations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedExplorations = sortedExplorations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  console.log(paginatedExplorations);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, filterBy]);

  const handleSelectViewMode = function (mode) {
    setViewMode(mode);
  };

  console.log(paginatedExplorations);
  return (
    <StyledExplorations>
      <Row>
        <RouterLink to="create">
          <Button $variation="darkRed" $size="small">
            Create New Exploration
          </Button>
        </RouterLink>
      </Row>
      <Row $direction="horizontal" $gap="var(--gap-lg)">
        <Input placeholder="Search for an exploration..." />
        <ExplorationsFilters onSort={setSortBy} onFilter={setFilterBy} />
        <AdminViewMode
          viewMode={viewMode}
          onViewModeChange={handleSelectViewMode}
        />
      </Row>

      {viewMode === "grid" && (
        <ExplorationCards>
          {console.log("about to map:", paginatedExplorations[0].name)}

          {paginatedExplorations.map((exploration) => (
            <ExplorationMiniCard
              name={exploration.name}
              description={exploration.description}
              numStops={exploration.numStops}
              startingCity={exploration.startingCity}
              buttonDetails={getAdminExplorationCardButton(exploration)}
              key={exploration.id}
            />
          ))}
        </ExplorationCards>
      )}

      {viewMode === "list" && (
        <CondensedTable
          columns={getAdminExplorationsTable().columns}
          rows={paginatedExplorations}
          $theme={explorationsTableTheme}
        ></CondensedTable>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        $variation="secondary"
      />
    </StyledExplorations>
  );
}

export default ManageExplorations;
