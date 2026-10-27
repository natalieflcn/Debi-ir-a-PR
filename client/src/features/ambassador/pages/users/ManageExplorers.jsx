import styled from "styled-components";
import Row from "../../../../shared/components/layout/Row";
import SortDropdown from "../../../../shared/components/dropdown/SortDropdown";
import Input from "../../../../shared/components/form/Input";
import CondensedTable from "../../../../shared/components/ui/CondensedTable";
import Button from "../../../../shared/components/ui/Button";
import Bold from "../../../../shared/components/typography/Bold";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { useEffect, useState } from "react";
import Pagination from "../../../../shared/components/ui/Pagination";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { formatDate } from "../../../../shared/utils/helpers";

const AmbassadorExplorersTableColumns = [
  {
    id: "name",
    heading: "Name",
    render: (row) => (
      <RouterLink to={`${row.id}`}>
        <TableNameCell>
          <Bold $color="var(--color-dark-200)">{row.name}</Bold>
        </TableNameCell>
      </RouterLink>
    ),
  },
  { id: "email", heading: "Email" },
  {
    id: "explorationsCompleted",
    heading: "Explorations Completed",
    render: (row) => (
      <TableCell>
        <Bold $color="var(--color-dark-200)">
          {row.completedExplorations.length}{" "}
        </Bold>
        exploration
        {row.completedExplorations.length !== 1 && "s"} completed
      </TableCell>
    ),
  },
  {
    id: "createdAt",
    heading: "Date Joined",
    render: (row) => {
      return (
        <ActionTableCell>
          <Row $direction="horizontal" $gap="var(--gap-sm)">
            {formatDate(row.createdAt)}
          </Row>
        </ActionTableCell>
      );
    },
  },
  {
    id: "action",
    heading: "Action",
    render: (row) => (
      <ActionTableCell>
        <Row $direction="horizontal" $gap="var(--gap-sm)">
          <RouterLink to={`${row.id}`}>
            <Button $size="extraSmall" $variation="primary">
              View
            </Button>
          </RouterLink>
        </Row>
      </ActionTableCell>
    ),
  },
];

const StyledExplorers = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
  min-width: 0;
`;

const StyledRow = styled(Row)`
  @media (max-width: 550px) {
    flex-direction: column;

    input {
      width: 100%;
    }
  }
`;

const ActionTableCell = styled.div`
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
    color: var(--color-blue-200);
    cursor: pointer;
  }
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const explorersTableTheme = {
  boxShadow: "var(--box-shadow-offset-lg)",
  shadowColor: "var(--color-blue-400)",
  headerBackground: "var(--color-blue-200)",
  headerColor: "var(--color-light-0)",
  headerBackgroundAlt: "var(--color-blue-300)",
  headerColorAlt: "var(--color-light-0)",
  cellBackground: "var(--color-light-100)",
  cellBackgroundAlt: "var(--color-light-200)",
  borderColor: "var(--color-blue-300)",
};

const sortCategories = [
  { id: "createdAt", name: "Date Joined" },
  { id: "name", name: "Name" },
];

const ITEMS_PER_PAGE = 10;

function ManageExplorers() {
  // const [search, setSearch] = useState("");
  // const [sortBy, setSortBy] = useState("createdAt");
  // const [currentPage, setCurrentPage] = useState(1);
  // const explorersData = useLoaderData();

  // const queriedUsers = [...explorersData].filter((explorer) =>
  //   search
  //     ? explorer.name.toLowerCase().startsWith(search.toLowerCase())
  //     : true,
  // );

  // const sortedUsers = queriedUsers.sort((a, b) => {
  //   if (sortBy === "name") return a.name.localeCompare(b.name);
  //   else return new Date(b.createdAt) - new Date(a.createdAt);
  // });

  // const totalPages = Math.ceil(sortedUsers.length / ITEMS_PER_PAGE);
  // const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // const paginatedUsers = sortedUsers.slice(
  //   startIndex,
  //   startIndex + ITEMS_PER_PAGE,
  // );

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [sortBy, search]);

  const { users, total } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(users);

  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

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

  const urlSearch = searchParams.get("search") ?? "";
  const [searchInput, setSearchInput] = useState(urlSearch);

  useEffect(() => {
    if (searchInput === urlSearch) return;
    const id = setTimeout(() => updateParams({ search: searchInput }), 300);
    return () => clearTimeout(id);
  }, [searchInput, urlSearch]);

  const handleSort = (value) =>
    updateParams({ sort: value === "name" ? "name" : null });
  const handleFilter = (value) =>
    updateParams({ role: value === "all" ? null : value });

  return (
    <StyledExplorers>
      <StyledRow $direction="horizontal" $gap="var(--gap-lg)">
        <Input
          placeholder="Search for an explorer by name..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SortDropdown
          categories={sortCategories}
          initState="Date Joined"
          onSort={handleSort}
        />
      </StyledRow>

      <CondensedTable
        columns={AmbassadorExplorersTableColumns}
        rows={users}
        $theme={explorersTableTheme}
      />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => updateParams({ page })}
        $variation="secondary"
      />
    </StyledExplorers>
  );
}

export default ManageExplorers;
