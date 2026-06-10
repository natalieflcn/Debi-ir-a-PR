import styled from "styled-components";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Table from "../../../../shared/components/ui/Table";
import Bold from "../../../../shared/components/typography/Bold";

const topExplorationsTableData = {
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
    { id: "numStops", heading: "# of Stops" },
    { id: "numStarted", heading: "# of Explorers Started" },
    { id: "numCompleted", heading: "# of Explorers Completed" },
  ],
  rows: [
    {
      name: "San Juan Tour",
      numStops: 8,
      numStarted: 15,
      numCompleted: 4,
    },
    {
      name: "Bayamon Tour",
      numStops: 6,
      numStarted: 15,
      numCompleted: 4,
    },
    {
      name: "Toa Alta Tour",
      numStops: 8,
      numStarted: 15,
      numCompleted: 4,
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
    color: var(--color-green-200);
    cursor: pointer;
  }
`;

const topExplorationsTableTheme = {
  boxShadow: "var(--box-shadow-offset-lg)",
  shadowColor: "var(--color-green-400)",
  headerBackground: "var(--color-green-200)",
  headerColor: "var(--color-light-0)",
  headerBackgroundAlt: "var(--color-green-300)",
  headerColorAlt: "var(--color-light-0)",
  cellBackground: "var(--color-light-100)",
  cellBackgroundAlt: "var(--color-light-200)",
  borderColor: "var(--color-green-300)",
};

function AmbassadorDashboardTopExplorations({
  tableData = topExplorationsTableData,
}) {
  return (
    <DashboardItem>
      <Heading as="h4" $color="var(--color-red-400)">
        Top Explorations
      </Heading>

      <Table
        columns={tableData.columns}
        rows={tableData.rows}
        $theme={topExplorationsTableTheme}
      />
    </DashboardItem>
  );
}

export default AmbassadorDashboardTopExplorations;
