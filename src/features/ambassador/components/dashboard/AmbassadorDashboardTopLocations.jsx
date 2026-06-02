import styled from "styled-components";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Table from "../../../../shared/components/ui/Table";
import Bold from "../../../../shared/components/typography/Bold";

const topLocationsTableData = {
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
    { id: "location", heading: "Location" },
    { id: "numCompleted", heading: "# of Explorers Completed" },
  ],
  rows: [
    {
      name: "San Juan food",
      location: "San Juan, PR",
      numCompleted: 64,
    },
    {
      name: "Hato Rey food",
      location: "Hato Rey, PR",
      numCompleted: 43,
    },
    {
      name: "Bayamon food",
      location: "Bayamon, PR",
      numCompleted: 24,
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
    color: var(--color-yellow-200);
    cursor: pointer;
  }
`;

const topLocationsTableTheme = {
  boxShadow: "var(--box-shadow-offset-lg)",
  shadowColor: "var(--color-yellow-400)",
  headerBackground: "var(--color-yellow-200)",
  headerColor: "var(--color-light-0)",
  headerBackgroundAlt: "var(--color-yellow-300)",
  headerColorAlt: "var(--color-light-0)",
  cellBackground: "var(--color-light-100)",
  cellBackgroundAlt: "var(--color-light-200)",
  borderColor: "var(--color-yellow-300)",
};

function AmbassadorDashboardTopLocations({
  tableData = topLocationsTableData,
}) {
  return (
    <DashboardItem>
      <Heading as="h4" $color="var(--color-red-400)">
        Top Locations
      </Heading>

      <Table
        columns={tableData.columns}
        rows={tableData.rows}
        $theme={topLocationsTableTheme}
      />
    </DashboardItem>
  );
}

export default AmbassadorDashboardTopLocations;
