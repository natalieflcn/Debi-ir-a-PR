import styled from "styled-components";
import DashboardItem from "../layout/DashboardItem";
import Heading from "../typography/Heading";
import Table from "../ui/Table";
import Bold from "../typography/Bold";
import CondensedTable from "../ui/CondensedTable";
import { formatDate } from "../../utils/helpers";
import RouterLink from "../routing/RouterLink";
import { useAuth } from "../../../features/auth/contexts/AuthContext";

// const StyledDashboardItem = styled(DashboardItem)`
//   width: 100%;
//   min-width: 0;
//   overflow-x: auto;
// `;

const TableWrapper = styled.div`
  width: 100%;
  min-width: 0;
  overflow-x: auto;
`;
const newExplorersTableColumns = function (role) {
  return [
    {
      id: "name",
      heading: "Name",
      render: (row) => {
        const prefix = role === "admin" ? "/explorers" : "";

        return (
          <TableNameCell>
            <RouterLink to={`/${role}/users${prefix}/${row._id}`}>
              <Bold $color="var(--color-dark-200)">{row.name}</Bold>
            </RouterLink>
          </TableNameCell>
        );
      },
    },
    { id: "email", heading: "Email" },
    {
      id: "createdAt",
      heading: "Date Joined",
      render: (row) => (
        <TableNameCell>{formatDate(row.createdAt)}</TableNameCell>
      ),
    },
  ];
};

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

const newExplorersTableTheme = {
  boxShadow: "var(--box-shadow-offset-lg)",
  shadowColor: "var(--color-blue-300)",
  headerBackground: "var(--color-blue-200)",
  headerColor: "var(--color-light-0)",
  headerBackgroundAlt: "var(--color-blue-300)",
  headerColorAlt: "var(--color-light-0)",
  cellBackground: "var(--color-light-100)",
  cellBackgroundAlt: "var(--color-light-200)",
  borderColor: "var(--color-blue-300)",
};

function DashboardNewExplorers({ usersData }) {
  const { role } = useAuth();

  const sortedUsers = usersData.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  const fiveSortedUsers = sortedUsers.slice(0, 5);

  return (
    <DashboardItem $variation="center">
      <Heading as="h4" $color="var(--color-red-400)">
        New Explorers
      </Heading>

      <CondensedTable
        columns={newExplorersTableColumns(role)}
        rows={fiveSortedUsers}
        $theme={newExplorersTableTheme}
      />
    </DashboardItem>
  );
}

export default DashboardNewExplorers;
