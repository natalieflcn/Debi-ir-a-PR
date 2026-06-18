import styled from "styled-components";
import Row from "../../../../shared/components/layout/Row";
import SortDropdown from "../../../../shared/components/dropdown/SortDropdown";
import Input from "../../../../shared/components/form/Input";
import CondensedTable from "../../../../shared/components/ui/CondensedTable";
import Button from "../../../../shared/components/ui/Button";
import Bold from "../../../../shared/components/typography/Bold";
import ExplorationsFilters from "../../../../shared/components/explorations/ExplorationsFilters";
import FilterDropdown from "../../../../shared/components/dropdown/FilterDropdown";
import RouterLink from "../../../../shared/components/routing/RouterLink";

const AmbassadorExplorersTable = {
  columns: [
    {
      id: "name",
      heading: "Name",
      render: (row) => (
        <RouterLink to={`${row.userType.toLowerCase()}s/:userId`}>
          <TableNameCell>
            <Bold $color="var(--color-dark-200)">{row.name}</Bold>
          </TableNameCell>
        </RouterLink>
      ),
    },
    { id: "userType", heading: "User Type" },
    { id: "email", heading: "Email" },
    { id: "dateJoined", heading: "Date Joined" },
    {
      id: "action",
      heading: "Action",
      render: (row) => (
        <ActionTableCell>
          <Row $direction="horizontal" $gap="var(--gap-sm)">
            <RouterLink to={`${row.userType.toLowerCase()}s/:userId`}>
              <Button $size="extraSmall" $variation="primary">
                View
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
      name: "Natalie Falcon",
      userType: "Explorer",
      email: "natalie.dflcn@gmail.com",
      dateJoined: "January 17, 2025",
      action: "View",
    },
    {
      id: 1,
      name: "Alethia Ragland",
      userType: "Ambassador",
      email: "thearagland@gmail.com",
      dateJoined: "June 23, 2025",
      action: "View",
    },
    {
      id: 2,
      name: "Jorge Gonzalez",
      userType: "Explorer",
      email: "genioa@gmail.com",
      explorationsCompleted: 6,
      dateJoined: "March 6, 2025",
      action: "View",
    },
  ],
};

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
  { id: "explorers", name: "Explorers" },
  { id: "ambassadors", name: "Ambassadors" },
  { id: "all", name: "All" },
];

function ManageUsers() {
  return (
    <StyledUsers>
      <Row $direction="horizontal" $gap="var(--gap-lg)">
        <Input placeholder="Search for an explorer by name..." />
        <SortDropdown categories={sortCategories} />
        <FilterDropdown categories={filterCategories} initState="All" />
      </Row>

      <CondensedTable
        columns={AmbassadorExplorersTable.columns}
        rows={AmbassadorExplorersTable.rows}
      ></CondensedTable>
    </StyledUsers>
  );
}

export default ManageUsers;
