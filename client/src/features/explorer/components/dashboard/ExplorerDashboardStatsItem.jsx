import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Table from "../../../../shared/components/ui/Table";

const statsTableColumns = [
  { id: "culture", heading: "Culture" },
  { id: "art", heading: "Art" },
  { id: "food", heading: "Food" },
  { id: "entertainment", heading: "Entertainment" },
  { id: "nature", heading: "Nature" },
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

function getLocationIds(userHistory) {
  const visitedLocationIds = userHistory
    .flatMap((explorationProgress) => explorationProgress.visitLog)
    .map((visit) => visit.location);

  // userHistory.visitLog.map((visit) => visit.locationId);

  // const locationTags = fakeLocations
  //   .filter((location) => visitedLocationIds.includes(location.locationId))
  //   .flatMap((location) => location.tags);

  return visitedLocationIds;
}

function getLocationTags(explorations, locationIds) {
  const locationData = locationIds.flatMap((locId) => {
    return explorations
      .find((exploration) =>
        exploration.locations.some((currentLoc) => currentLoc._id === locId),
      )
      .locations.find((currentLoc) => currentLoc._id === locId).tags;
  });

  const locationTags = locationData.flatMap((data) => data);

  return locationTags;
}

function ExplorerDashboardStatsItem({ explorations, userHistory }) {
  const data = {
    culture: 0,
    art: 0,
    food: 0,
    entertainment: 0,
    nature: 0,
    other: 0,
  };

  const locationIds = getLocationIds(userHistory);
  const locationTags = getLocationTags(explorations, locationIds);

  locationTags.forEach((tag) => {
    switch (tag) {
      case "attraction":
      case "bachata":
      case "castle":
      case "church":
      case "historical-site":
      case "landmark":
      case "monument":
      case "reggaeton":
      case "salsa":
        data.culture += 1;
        break;

      case "art":
      case "gallery":
      case "museum":
      case "theater":
        data.art += 1;
        break;

      case "bakery":
      case "cafe":
      case "food-truck":
        data.food += 1;
        break;

      case "entertainment":
      case "bar":
      case "billiards":
      case "boutique":
      case "club":
      case "concert":
      case "dancing":
      case "excursion":
      case "park":
      case "sports":
        data.entertainment += 1;
        break;

      case "nature":
      case "beach":
      case "cave":
      case "forest":
      case "hiking":
      case "landscape":
      case "mountain":
      case "river":
      case "trail":
      case "waterfall":
        data.nature += 1;
        break;

      default:
      case "shopping":
      case "plaza":
      case "market":
      case "other":
        data.other += 1;
        break;
    }
  });

  console.log(data);
  return (
    <>
      <DashboardItem $variation="center">
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
