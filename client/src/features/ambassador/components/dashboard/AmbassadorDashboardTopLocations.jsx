import styled from "styled-components";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Table from "../../../../shared/components/ui/Table";
import Bold from "../../../../shared/components/typography/Bold";
import CondensedTable from "../../../../shared/components/ui/CondensedTable";

const topLocationsTableColumns = [
  {
    id: "exploration",
    heading: "Exploration",
    render: (row) => (
      <TableNameCell>
        <Bold $color="var(--color-dark-200)">{row.exploration}</Bold>
      </TableNameCell>
    ),
  },
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
  explorations,
  explorationProgress,
}) {
  const locations = explorations.flatMap((exploration) =>
    exploration.locations.map((location) => ({
      ...location,
      exploration: exploration.name,
    })),
  );

  const topLocations = locations
    .map((location) => {
      const visited = [
        ...new Set(
          explorationProgress
            .filter((progress) =>
              progress.visitLog.some((log) => log.location === location._id),
            )
            .map((progress) => progress.user),
        ),
      ].length;

      return {
        name: location.name,
        id: location._id,
        numCompleted: visited,
        location: location.address.city,
        exploration: location.exploration,
      };
    })
    .sort((a, b) => b.numCompleted - a.numCompleted)
    .slice(0, 5); // most completed first
  return (
    <DashboardItem $variation="center">
      <Heading as="h4" $color="var(--color-red-400)">
        Top Locations
      </Heading>

      <CondensedTable
        columns={topLocationsTableColumns}
        rows={topLocations}
        $theme={topLocationsTableTheme}
      />
    </DashboardItem>
  );
}

export default AmbassadorDashboardTopLocations;
