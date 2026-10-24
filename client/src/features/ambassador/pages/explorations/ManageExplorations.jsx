import styled from "styled-components";
import ExplorationsFilters from "../../../explorations/components/ExplorationsFilters";
import ExplorationMiniCard from "../../../explorations/components/ExplorationMiniCard";

import Row from "../../../../shared/components/layout/Row";

import Input from "../../../../shared/components/form/Input";
import AdminViewMode from "../../../../shared/components/management/AdminViewMode";
import { useEffect, useState } from "react";
import CondensedTable from "../../../../shared/components/ui/CondensedTable";
import Button from "../../../../shared/components/ui/Button";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { useAmbassadorUI } from "../../contexts/AmbassadorUIContext";
import Pagination from "../../../../shared/components/ui/Pagination";
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import Bold from "../../../../shared/components/typography/Bold";
import { formatDate } from "../../../../shared/utils/helpers";
import { useAuth } from "../../../auth/contexts/AuthContext";
import AdminShowCreatedExplorations from "../../../../shared/components/management/AdminShowCreatedExplorations";
import Spinner from "../../../../shared/components/ui/Spinner";
import { useAdminUI } from "../../../admin/contexts/AdminUIContext";

const AmbassadorExplorationsTableColumns = function (users) {
  return [
    {
      id: "name",
      heading: "name",
      render: (row) => (
        <TableNameCell>
          <RouterLink to={`${row.slug}`}>
            <Bold $color="var(--color-dark-200)">{row.name}</Bold>
          </RouterLink>
        </TableNameCell>
      ),
    },
    { id: "numStops", heading: "# of Stops" },
    {
      id: "city",
      heading: "City",
      render: (row) => {
        const city =
          row.cities.length === 1 ? row.cities[0] : "Multiple Cities";
        return <TableCell>{city}</TableCell>;
      },
    },
    {
      id: "createdBy",
      heading: "Created By",
      render: (row) => {
        if (!row.createdBy) return <TableCell>Unknown User</TableCell>;

        const user = users.find(
          (user) => user?._id?.toString() === row?.createdBy.toString(),
        );

        if (!user) {
          return <TableCell>Unknown User</TableCell>;
        }

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
            <RouterLink to={`/ambassador/explorations/${row.slug}`}>
              <Button $size="extraSmall" $variation="secondary">
                View
              </Button>
            </RouterLink>

            <RouterLink to={`/ambassador/explorations/${row.slug}/edit`}>
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

const InputFiltersRow = styled(Row)`
  @media (max-width: 1200px) {
    flex-direction: column;

    input {
      width: 100%;
    }
  }
`;

const FiltersAdminTogglesRow = styled(Row)`
  @media (max-width: 870px) {
    flex-direction: column;

    input {
      width: 100%;
    }
  }
`;

const ExplorationCards = styled.div`
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap-xl);
  justify-content: center;
  align-items: stretch; */

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: var(--gap-xl);
  width: 100%;
`;

const AmbassadorExplorationCardButton = function (explorationSlug) {
  return [
    {
      id: "view",
      buttonVariation: "secondary",
      buttonName: "View ",
      buttonLink: `/ambassador/explorations/${explorationSlug}`,
    },
    {
      id: "edit",
      buttonVariation: "primary",
      buttonName: "Edit ",
      buttonLink: `/ambassador/explorations/${explorationSlug}/edit`,
    },
  ];
};

const ITEMS_PER_PAGE = 9;

function ManageExplorations() {
  const { viewMode, setViewMode } = useAmbassadorUI();
  const { explorations, total, results, users } = useLoaderData();
  const { user } = useAuth();
  const navigation = useNavigation();

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
  // const sortBy = searchParams.get("sort") ?? "createdAt";
  // const filterBy = searchParams.get("tag") ?? "All";
  const showFeatured = searchParams.get("featured") === "true";
  const showMyExplorations = searchParams.get("createdBy") === user.id;
  const isLoading = navigation.state === "loading";

  function updateParams(updates) {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        for (const [key, value] of Object.entries(updates)) {
          if (value === null || value === "" || value === false)
            next.delete(key);
          else next.set(key, value);
        }
        if (!("page" in updates)) next.delete("page");
        return next;
      },
      { replace: true },
    );
  }

  // Debounced search; the guard stops it from resetting the page on mount
  const urlSearch = searchParams.get("search") ?? "";
  const [searchInput, setSearchInput] = useState(urlSearch);

  useEffect(() => {
    if (searchInput === urlSearch) return;
    const id = setTimeout(() => updateParams({ search: searchInput }), 300);
    return () => clearTimeout(id);
  }, [searchInput, urlSearch]);

  const handleSort = (value) =>
    updateParams({ sort: value === "createdAt" ? null : value });
  const handleFilter = (value) =>
    updateParams({ tag: value === "All" ? null : value });
  const handleFeatured = (checked) =>
    updateParams({ featured: checked ? "true" : null });
  const handleMine = (checked) =>
    updateParams({ createdBy: checked ? user.id : null });

  const handleSelectViewMode = (mode) => setViewMode(mode);

  return (
    <StyledExplorations>
      <Row>
        <RouterLink to="/ambassador/explorations/create">
          <Button $variation="darkRed" $size="small">
            Create New Exploration
          </Button>
        </RouterLink>
      </Row>
      <InputFiltersRow $direction="horizontal" $gap="var(--gap-lg)">
        <Input
          placeholder="Search for an exploration..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <FiltersAdminTogglesRow $direction="horizontal" $gap="var(--gap-lg)">
          <ExplorationsFilters
            onSort={handleSort}
            onFilter={handleFilter}
            filterInitState={searchParams.get("tag") ?? "All"}
            showFeatured={showFeatured}
            onShowFeatured={handleFeatured}
          />

          <Row $direction="horizontal" $gap="var(--gap-lg)">
            <AdminShowCreatedExplorations
              showMyExplorations={showMyExplorations}
              onShowMyExplorations={handleMine}
            />
            <AdminViewMode
              viewMode={viewMode}
              onViewModeChange={handleSelectViewMode}
            />
          </Row>
        </FiltersAdminTogglesRow>
      </InputFiltersRow>

      {isLoading && <Spinner />}

      {viewMode === "grid" && !isLoading && (
        <ExplorationCards>
          {explorations.map((exploration) => {
            const city =
              exploration.cities.length === 1
                ? exploration.cities[0]
                : "Multiple Cities";

            return (
              <ExplorationMiniCard
                exploration={exploration}
                city={city}
                buttonDetails={AmbassadorExplorationCardButton(
                  exploration.slug,
                )}
                key={exploration.id}
              />
            );
          })}
        </ExplorationCards>
      )}

      {viewMode === "list" && !isLoading && (
        <CondensedTable
          columns={AmbassadorExplorationsTableColumns(users)}
          rows={explorations}
          $theme={explorationsTableTheme}
        />
      )}

      {explorations.length === 0 && !isLoading && (
        <Row $align="center">
          <Bold $color="var(--color-light-0)">
            There are no explorations to show.
          </Bold>
        </Row>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => updateParams({ page })}
        $variation="secondary"
      />
    </StyledExplorations>
  );
}

export default ManageExplorations;
