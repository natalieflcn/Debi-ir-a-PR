import styled from "styled-components";
import ExplorationsFilters from "../../../explorations/components/ExplorationsFilters";
import ExplorationMiniCard from "../../../explorations/components/ExplorationMiniCard";
import fakeExplorationsData from "../../../explorer/pages/explorations/fakeExplorationsData";
import Row from "../../../../shared/components/layout/Row";

import Input from "../../../../shared/components/form/Input";
import AdminViewMode from "../../../../shared/components/management/AdminViewMode";
import { useEffect, useState } from "react";
import CondensedTable from "../../../../shared/components/ui/CondensedTable";
import Button from "../../../../shared/components/ui/Button";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { useAmbassadorUI } from "../../contexts/AmbassadorUIContext";
import Pagination from "../../../../shared/components/ui/Pagination";
import { useLoaderData } from "react-router-dom";
import Bold from "../../../../shared/components/typography/Bold";
import { formatDate } from "../../../../shared/utils/helpers";

const AmbassadorExplorationsTableColumns = function (users) {
  return [
    {
      id: "name",
      heading: "name",
      render: (row) => (
        <TableNameCell>
          <RouterLink to={`${row.id}`}>
            <Bold $color="var(--color-dark-200)">{row.name}</Bold>
          </RouterLink>
        </TableNameCell>
      ),
    },
    { id: "numStops", heading: "# of Stops" },
    { id: "startingCity", heading: "Starting City" },
    {
      id: "createdBy",
      heading: "Created By",
      render: (row) => {
        const user = users.find((user) => user.id === row.createdBy);
        return <TableCell>{user.name}</TableCell>;
      },
    },
    {
      id: "createdAt",
      heading: "Date Created",
      render: (row) => <TableCell>{formatDate(row.createdAt)}</TableCell>,
    },
    {
      id: "updatedAt",
      heading: "Date Updated",
      render: (row) => <TableCell>{formatDate(row.updatedAt)}</TableCell>,
    },
    {
      id: "action",
      heading: "Action",
      render: (row) => (
        <TableCell>
          <Row $direction="horizontal" $gap="var(--gap-sm)">
            <RouterLink to={`/ambassador/explorations/${row.id}`}>
              <Button $size="extraSmall" $variation="secondary">
                View
              </Button>
            </RouterLink>

            <RouterLink to={`/ambassador/explorations/${row.id}/edit`}>
              <Button $size="extraSmall" $variation="primary">
                Edit
              </Button>
            </RouterLink>
          </Row>
        </TableCell>
      ),
    },
  ];
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

const TableCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const TableNameCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  & strong {
    transition: color 0.2s ease;
  }

  &:hover strong {
    color: var(--color-red-200);
    cursor: pointer;
  }
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
    buttonLink: "/ambassador/explorations/explorationId",
  },
  {
    id: "edit",
    buttonVariation: "primary",
    buttonName: "Edit ",
    buttonLink: "/ambassador/explorations/explorationId/edit",
  },
];

const ITEMS_PER_PAGE = 9;

function ManageExplorations() {
  const { viewMode, setViewMode } = useAmbassadorUI();
  const [sortBy, setSortBy] = useState("featured");
  const [filterBy, setFilterBy] = useState("all");
  const [showFeatured, setShowFeatured] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { explorations, users } = useLoaderData();

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

  const featuredExplorations = [...sortedExplorations].filter(
    (exploration) => exploration.featured,
  );

  const totalPages = Math.ceil(sortedExplorations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedExplorations = showFeatured
    ? featuredExplorations.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    : sortedExplorations.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, filterBy, showFeatured]);

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
        <ExplorationsFilters
          onSort={setSortBy}
          onFilter={setFilterBy}
          filterInitState="All"
          showFeatured={showFeatured}
          onShowFeatured={setShowFeatured}
        />
        <AdminViewMode
          viewMode={viewMode}
          onViewModeChange={handleSelectViewMode}
        />
      </Row>

      {viewMode === "grid" && (
        <ExplorationCards>
          {paginatedExplorations.map((exploration) => (
            <ExplorationMiniCard
              name={exploration.name}
              description={exploration.description}
              numStops={exploration.numStops}
              startingCity={exploration.startingCity}
              buttonDetails={AmbassadorExplorationCardButton}
              key={exploration.id}
            />
          ))}
        </ExplorationCards>
      )}

      {viewMode === "list" && (
        <CondensedTable
          columns={AmbassadorExplorationsTableColumns(users)}
          rows={paginatedExplorations}
          $theme={explorationsTableTheme}
        />
      )}

      {paginatedExplorations.length === 0 && (
        <Row $align="center">
          <Bold $color="var(--color-light-0)">
            There are no explorations to show.
          </Bold>
        </Row>
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
