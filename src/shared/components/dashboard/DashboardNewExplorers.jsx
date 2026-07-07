import styled from "styled-components";
import DashboardItem from "../layout/DashboardItem";
import Heading from "../typography/Heading";
import Table from "../ui/Table";
import Bold from "../typography/Bold";

const newExplorersTableColumns = [
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
  { id: "dateJoined", heading: "Date Joined" },
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

// rows: [
//     {
//       name: "Natalie Falcon",
//       email: "natalie.dflcn@gmail.com",
//       dateAdded: "June 30, 2026",
//     },
//     {
//       name: "Alethia Ragland",
//       email: "alethia.dflcn@gmail.com",
//       dateAdded: "January 30, 2026",
//     },
//     {
//       name: "Jungo Vasquez",
//       email: "jluis.vasquez@gmail.com",
//       dateAdded: "March 20, 2026",
//     },
//   ],

function DashboardNewExplorers({ usersData }) {
  const sortedUsers = usersData.sort(
    (a, b) => new Date(b.dateJoined) - new Date(a.dateJoined),
  );

  const fiveSortedUsers = sortedUsers.slice(0, 5);

  return (
    <DashboardItem>
      <Heading as="h4" $color="var(--color-red-400)">
        New Explorers
      </Heading>

      <Table
        columns={newExplorersTableColumns}
        rows={fiveSortedUsers}
        $theme={newExplorersTableTheme}
      />
    </DashboardItem>
  );
}

export default DashboardNewExplorers;
