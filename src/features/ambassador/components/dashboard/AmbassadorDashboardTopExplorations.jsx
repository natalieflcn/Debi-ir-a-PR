import styled from "styled-components";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Table from "../../../../shared/components/ui/Table";
import Bold from "../../../../shared/components/typography/Bold";

const topExplorationsTableColumns = [
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

function AmbassadorDashboardTopExplorations({ explorations, userHistories }) {
  const explorationEngagement = explorations
    .map((exploration) => {
      const started = userHistories.filter((history) =>
        history.explorationProgress.some(
          (entry) =>
            entry.explorationId === exploration.id &&
            entry.status !== "not_started",
        ),
      ).length;

      const completed = userHistories.filter((history) =>
        history.explorationProgress.some(
          (entry) =>
            entry.explorationId === exploration.id &&
            entry.status === "completed",
        ),
      ).length;

      return {
        id: exploration.id,
        name: exploration.name,
        numStops: exploration.numStops,
        numStarted: started,
        numCompleted: completed,
      };
    })
    .sort((a, b) => {
      if (b.numCompleted !== a.numCompleted) {
        return b.numCompleted - a.numCompleted; // primary: most completed first
      }
      return b.numStarted - a.numStarted;
    }) // most completed first
    .slice(0, 5); // top 5 only

  return (
    <DashboardItem>
      <Heading as="h4" $color="var(--color-red-400)">
        Top Explorations
      </Heading>

      <Table
        columns={topExplorationsTableColumns}
        rows={explorationEngagement}
        $theme={topExplorationsTableTheme}
      />
    </DashboardItem>
  );
}

export default AmbassadorDashboardTopExplorations;
