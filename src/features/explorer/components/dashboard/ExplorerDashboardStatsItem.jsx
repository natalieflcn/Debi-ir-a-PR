import { fakeLocations } from "../../../../../data/fakeLocations";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Table from "../../../../shared/components/ui/Table";

const statsTableColumns = [
  { id: "restaurants", heading: "Restaurants" },
  { id: "bars", heading: "Bars" },
  { id: "landmarks", heading: "Landmarks" },
  { id: "landscapes", heading: "Landscapes" },
  { id: "beaches", heading: "Beaches" },
  { id: "other", heading: "Other" },
];

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

function getLocationTags(userHistory) {
  const visitedLocationIds = userHistory.visitLog.map(
    (visit) => visit.locationId,
  );

  const locationTags = fakeLocations
    .filter((location) => visitedLocationIds.includes(location.locationId))
    .flatMap((location) => location.tags);

  return locationTags;
}

function ExplorerDashboardStatsItem({ userHistory }) {
  const data = {
    restaurants: 0,
    bars: 0,
    landmarks: 0,
    landscapes: 0,
    beaches: 0,
    other: 0,
  };

  const locationTags = getLocationTags(userHistory);

  locationTags.forEach((tag) => {
    switch (tag) {
      case "restaurant":
        data.restaurants += 1;
        break;

      case "bar":
        data.bars += 1;
        break;

      case "landmark":
        data.landmarks += 1;
        break;

      case "landscape":
        data.landscapes += 1;
        break;

      case "beach":
        data.beaches += 1;
        break;

      default:
        data.other += 1;
        break;
    }
  });

  return (
    <>
      <DashboardItem>
        <Heading as="h4" $color="var(--color-dark-100)">
          Types of Locations Explored
        </Heading>
        <Table
          columns={statsTableColumns}
          rows={[data]}
          $theme={explorerStatsTableTheme}
        />
      </DashboardItem>
    </>
  );
}

export default ExplorerDashboardStatsItem;
