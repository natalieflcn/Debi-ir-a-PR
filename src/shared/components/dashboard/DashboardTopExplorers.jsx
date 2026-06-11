import styled from "styled-components";
import DashboardItem from "../layout/DashboardItem";
import Heading from "../typography/Heading";
import Table from "../ui/Table";
import Bold from "../typography/Bold";

const topExplorersTableData = {
  columns: [
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
    { id: "numExplorationsStarted", heading: "Explorations Started" },
    { id: "numExplorationsCompleted", heading: "Explorations Completed" },
  ],
  rows: [
    {
      name: "Natalie Falcon",
      email: "natalie.dflcn@gmail.com",
      numExplorationsStarted: 10,
      numExplorationsCompleted: 4,
    },
    {
      name: "Alethia Ragland",
      email: "alethia.dflcn@gmail.com",
      numExplorationsStarted: 9,
      numExplorationsCompleted: 3,
    },
    {
      name: "Jungo Vasquez",
      email: "jluis.vasquez@gmail.com",
      numExplorationsStarted: 15,
      numExplorationsCompleted: 3,
    },
  ],
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

function DashboardTopExplorers({ tableData = topExplorersTableData }) {
  return (
    <DashboardItem>
      <Heading as="h4" $color="var(--color-red-400)">
        Top Explorers
      </Heading>

      <Table
        columns={tableData.columns}
        rows={tableData.rows}
        $theme={topExplorersTableTheme}
      />
    </DashboardItem>
  );
}

export default DashboardTopExplorers;
