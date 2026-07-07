import styled from "styled-components";
import DashboardItem from "../layout/DashboardItem";
import Heading from "../typography/Heading";
import Table from "../ui/Table";
import Bold from "../typography/Bold";

const topExplorersTableColumns = [
  {
    id: "name",
    heading: "Name",
    render: (row) => (
      <TableNameCell>
        <Bold $color="var(--color-dark-200)">{row.name}</Bold>
      </TableNameCell>
    ),
  },
  { id: "email", heading: "Email" },
  {
    id: "numExplorationsStarted",
    heading: "Explorations Started",
    render: (row) => <TableNameCell>{row.explorationsStarted}</TableNameCell>,
  },
  {
    id: "numExplorationsCompleted",
    heading: "Explorations Completed",
    render: (row) => <TableNameCell>{row.explorationsCompleted}</TableNameCell>,
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

function DashboardTopExplorers({ usersData }) {
  const topExplorers = usersData.sort(
    (a, b) => b.explorationsCompleted - a.explorationsCompleted,
  );

  const fiveTopExplorers = topExplorers.slice(0, 5);

  return (
    <DashboardItem>
      <Heading as="h4" $color="var(--color-red-400)">
        Top Explorers
      </Heading>

      <Table
        columns={topExplorersTableColumns}
        rows={fiveTopExplorers}
        $theme={topExplorersTableTheme}
      />
    </DashboardItem>
  );
}

export default DashboardTopExplorers;
