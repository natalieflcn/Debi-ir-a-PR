import styled from "styled-components";
import Bold from "../../../../shared/components/typography/Bold";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Table from "../../../../shared/components/ui/Table";
import CondensedTable from "../../../../shared/components/ui/CondensedTable";
import RouterLink from "../../../../shared/components/routing/RouterLink";

const topAmbassadorsTableColumns = [
  {
    id: "name",
    heading: "Name",
    render: (row) => (
      <TableNameCell>
        <RouterLink to={`/admin/users/ambassadors/${row._id}`}>
          <Bold $color="var(--color-dark-200)">{row.name}</Bold>
        </RouterLink>
      </TableNameCell>
    ),
  },
  { id: "email", heading: "Email" },
  {
    id: "numExplorationsCreated",
    heading: "Explorations Created",
    render: (row) => (
      <TableNameCell>{row.createdExplorations.length}</TableNameCell>
    ),
  },
];

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

const topAmbassadorsTableTheme = {
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

function AdminDashboardTopAmbassadors({ usersData, explorations }) {
  const ambassadors = usersData
    .filter((user) => user.role === "ambassador" || user.role === "admin")
    .map((user) => {
      return {
        ...user,
        createdExplorations: explorations.filter(
          (exploration) => exploration.createdBy === user._id,
        ),
      };
    });

  const topAmbassadors = ambassadors.sort(
    (a, b) => b.createdExplorations.length - a.createdExplorations.length,
  );

  const fiveTopAmbassadors = topAmbassadors.slice(0, 5);

  return (
    <DashboardItem $variation="center">
      <Heading as="h4" $color="var(--color-red-400)">
        Top Ambassadors and Admins
      </Heading>

      <CondensedTable
        columns={topAmbassadorsTableColumns}
        rows={fiveTopAmbassadors}
        $theme={topAmbassadorsTableTheme}
      />
    </DashboardItem>
  );
}

export default AdminDashboardTopAmbassadors;
