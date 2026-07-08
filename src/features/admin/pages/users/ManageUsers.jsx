import styled from "styled-components";
import Row from "../../../../shared/components/layout/Row";
import SortDropdown from "../../../../shared/components/dropdown/SortDropdown";
import Input from "../../../../shared/components/form/Input";
import CondensedTable from "../../../../shared/components/ui/CondensedTable";
import Button from "../../../../shared/components/ui/Button";
import Bold from "../../../../shared/components/typography/Bold";
import ExplorationsFilters from "../../../explorations/components/ExplorationsFilters";
import FilterDropdown from "../../../../shared/components/dropdown/FilterDropdown";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { useEffect, useState } from "react";
import Pagination from "../../../../shared/components/ui/Pagination";
import { useLoaderData } from "react-router-dom";

export const UsersTableColumns = [
  {
    id: "name",
    heading: "Name",
    render: (row) => (
      <RouterLink to={`${row.userType.toLowerCase()}s/${row.id}`}>
        <TableNameCell>
          <Bold $color="var(--color-dark-200)">{row.name}</Bold>
        </TableNameCell>
      </RouterLink>
    ),
  },
  {
    id: "userType",
    heading: "User Type",
    render: (row) => (
      <ActionTableCell>
        <Row $direction="horizontal" $gap="var(--gap-sm)">
          {row.userType?.charAt(0).toUpperCase()}
          {row.userType?.slice(1)}
        </Row>
      </ActionTableCell>
    ),
  },
  { id: "email", heading: "Email" },
  { id: "dateJoined", heading: "Date Joined" },
  {
    id: "action",
    heading: "Action",
    render: (row) => {
      return (
        <ActionTableCell>
          <Row $direction="horizontal" $gap="var(--gap-sm)">
            <RouterLink to={`${row.userType?.toLowerCase()}s/${row.id}`}>
              <Button $size="extraSmall" $variation="primary">
                View
              </Button>
            </RouterLink>
          </Row>
        </ActionTableCell>
      );
    },
  },
];

const StyledUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
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

const ambassadorsTableTheme = {
  boxShadow: "var(--box-shadow-offset-lg)",
  shadowColor: "var(--color-red-400)",
  headerBackground: "var(--color-red-200)",
  headerColor: "var(--color-light-0)",
  headerBackgroundAlt: "var(--color-red-300)",
  headerColorAlt: "var(--color-light-0)",
  cellBackground: "var(--color-light-100)",
  cellBackgroundAlt: "var(--color-light-200)",
  borderColor: "var(--color-red-300)",
};

const sortCategories = [
  { id: "name", name: "Name" },
  { id: "dateJoined", name: "Date Joined" },
];

const filterCategories = [
  { id: "explorer", name: "Explorers" },
  { id: "ambassador", name: "Ambassadors" },
  { id: "all", name: "All" },
];

const ITEMS_PER_PAGE = 10;

function ManageUsers() {
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const usersData = useLoaderData();

  const filteredUsers = [...usersData].filter((user) => {
    if (filterBy === "all") return true;
    return user.userType === filterBy;
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    else return new Date(b.dateJoined) - new Date(a.dateJoined);
  });

  const totalPages = Math.ceil(sortedUsers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = sortedUsers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, filterBy]);

  return (
    <StyledUsers>
      <Row $direction="horizontal" $gap="var(--gap-lg)">
        <Input placeholder="Search for an explorer by name..." />
        <SortDropdown
          categories={sortCategories}
          initState="Name"
          onSort={setSortBy}
        />
        <FilterDropdown
          categories={filterCategories}
          initState="All"
          onFilter={setFilterBy}
        />
      </Row>

      <CondensedTable columns={UsersTableColumns} rows={paginatedUsers} />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        $variation="secondary"
      />
    </StyledUsers>
  );
}

export default ManageUsers;
