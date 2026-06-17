import styled from "styled-components";
import Row from "../../../../shared/components/layout/Row";
import SortDropdown from "../../../../shared/components/ui/SortDropdown";
import Input from "../../../../shared/components/form/Input";
import CondensedTable from "../../../../shared/components/ui/CondensedTable";
import Button from "../../../../shared/components/ui/Button";
import Bold from "../../../../shared/components/typography/Bold";
import RouterLink from "../../../../shared/components/ui/RouterLink";

const AmbassadorExplorersTable = {
  columns: [
    {
      id: "name",
      heading: "Name",
      render: (row) => (
        <RouterLink to=":userId">
          <TableNameCell>
            <Bold $color="var(--color-dark-200)">{row.name}</Bold>
          </TableNameCell>
        </RouterLink>
      ),
    },
    { id: "email", heading: "Email" },
    { id: "explorationsCompleted", heading: "Explorations Completed" },
    { id: "dateJoined", heading: "Date Joined" },
    {
      id: "action",
      heading: "Action",
      render: () => (
        <ActionTableCell>
          <Row $direction="horizontal" $gap="var(--gap-sm)">
            <RouterLink to=":userId">
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
      email: "natalie.dflcn@gmail.com",
      explorationsCompleted: 5,
      dateJoined: "January 17, 2025",
      action: "View",
    },
    {
      id: 1,
      name: "Alethia Ragland",
      email: "thearagland@gmail.com",
      explorationsCompleted: 3,
      dateJoined: "June 23, 2025",
      action: "View",
    },
    {
      id: 2,
      name: "Jorge Gonzalez",
      email: "genioa@gmail.com",
      explorationsCompleted: 6,
      dateJoined: "March 6, 2025",
      action: "View",
    },
  ],
};

const StyledExplorers = styled.div`
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

function ManageExplorers() {
  return (
    <StyledExplorers>
      <Row $direction="horizontal" $gap="var(--gap-lg)">
        <Input placeholder="Search for an explorer by name..." />
        <SortDropdown />
      </Row>

      <CondensedTable
        columns={AmbassadorExplorersTable.columns}
        rows={AmbassadorExplorersTable.rows}
        $theme={explorersTableTheme}
      ></CondensedTable>
    </StyledExplorers>
  );
}

export default ManageExplorers;
