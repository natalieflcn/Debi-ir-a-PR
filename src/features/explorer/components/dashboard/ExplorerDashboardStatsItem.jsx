import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Table from "../../../../shared/components/ui/Table";

const locationsExplored = {
  columns: [
    { id: "restaurants", heading: "Restaurants" },
    { id: "bars", heading: "Bars" },
    { id: "landmarks", heading: "Landmarks" },
    { id: "landscapes", heading: "Landscapes" },
    { id: "beaches", heading: "Beaches" },
    { id: "others", heading: "Other" },
  ],
  rows: [
    {
      restaurants: 5,
      bars: 5,
      landmarks: 5,
      landscapes: 5,
      beaches: 5,
      others: 5,
    },
  ],
};

const explorerStatsTableTheme = {
  boxShadow: "var(--box-shadow-offset-lg)",
  shadowColor: "var(--color-brown-400)",
  headerBackground: "var(--color-blue-200)",
  headerColor: "var(--color-light-0)",
  headerBackgroundAlt: "var(--color-red-200)",
  headerColorAlt: "var(--color-light-0)",
  cellBackground: "var(--color-blue-0)",
  cellBackgroundAlt: "var(--color-red-0)",
  borderColor: "var(--color-blue-300)",
};

function ExplorerDashboardStatsItem() {
  return (
    <>
      <DashboardItem>
        <Heading as="h4" $color="var(--color-dark-100)">
          Types of Locations Explored
        </Heading>
        <Table
          columns={locationsExplored.columns}
          rows={locationsExplored.rows}
          $theme={explorerStatsTableTheme}
        />
      </DashboardItem>
    </>
  );
}

export default ExplorerDashboardStatsItem;
