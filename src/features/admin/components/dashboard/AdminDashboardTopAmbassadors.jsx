import styled from "styled-components";
import Bold from "../../../../shared/components/typography/Bold";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Table from "../../../../shared/components/ui/Table";

const topAmbassadorsTableData = {
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
    { id: "numExplorationsCreated", heading: "Explorations Created" },
  ],
  rows: [
    {
      name: "Natalie Falcon",
      email: "natalie.dflcn@gmail.com",
      numExplorationsCreated: 4,
    },
    {
      name: "Natalie Falcon",
      email: "natalie.dflcn@gmail.com",
      numExplorationsCreated: 4,
    },
    {
      name: "Natalie Falcon",
      email: "natalie.dflcn@gmail.com",
      numExplorationsCreated: 4,
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

function AdminDashboardTopAmbassadors({ tableData = topAmbassadorsTableData }) {
  return (
    <DashboardItem>
      <Heading as="h4" $color="var(--color-red-400)">
        Top Ambassadors
      </Heading>

      <Table
        columns={tableData.columns}
        rows={tableData.rows}
        $theme={topAmbassadorsTableTheme}
      />
    </DashboardItem>
  );
}

export default AdminDashboardTopAmbassadors;
