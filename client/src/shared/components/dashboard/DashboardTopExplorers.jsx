import styled from "styled-components";
import DashboardItem from "../layout/DashboardItem";
import Heading from "../typography/Heading";
import Table from "../ui/Table";
import Bold from "../typography/Bold";
import CondensedTable from "../ui/CondensedTable";
import RouterLink from "../routing/RouterLink";
import { useAuth } from "../../../features/auth/contexts/AuthContext";

const topExplorersTableColumns = function (role) {
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
      id: "numExplorationsStarted",
      heading: "Explorations Started",
      render: (row) => (
        <TableNameCell>{row.explorationsStarted.length}</TableNameCell>
      ),
    },
    {
      id: "numExplorationsCompleted",
      heading: "Explorations Completed",
      render: (row) => (
        <TableNameCell>{row.explorationsCompleted.length}</TableNameCell>
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
    color: var(--color-red-200);
    cursor: pointer;
  }
`;

const topExplorersTableTheme = {
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

function DashboardTopExplorers({ usersData, explorationProgress }) {
  const { role } = useAuth();

  const explorers = usersData.map((user) => {
    return {
      ...user,
      explorationsStarted: explorationProgress.filter(
        (progress) => progress.user === user._id,
      ),
      explorationsCompleted: explorationProgress
        .filter((progress) => progress.user === user._id)
        .filter((progress) => progress.status === "completed"),
    };
  });

  const topExplorers = explorers.sort(
    (a, b) =>
      b.explorationsCompleted.length - a.explorationsCompleted.length ||
      b.explorationsStarted.length - a.explorationsStarted.length ||
      a.name.localeCompare(b.name),
  );

  const fiveTopExplorers = topExplorers.slice(0, 5);

  return (
    <DashboardItem $variation="center">
      <Heading as="h4" $color="var(--color-red-400)">
        Top Explorers
      </Heading>

      <CondensedTable
        columns={topExplorersTableColumns(role)}
        rows={fiveTopExplorers}
        $theme={topExplorersTableTheme}
      />
    </DashboardItem>
  );
}

export default DashboardTopExplorers;
