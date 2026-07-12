import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import SmallText from "../../../../shared/components/typography/SmallText";
import InsetSpan from "../../../../shared/components/ui/InsetSpan";

const NumTotalLocations = function ({ explorations }) {
  const numLocations = explorations.flatMap(
    (exploration) => exploration.locationIds,
  ).length;

  return (
    <DashboardItem $height="4rem">
      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Total Locations
          </Heading>
          <SmallText>
            (The total number of locations across all explorations in Debí ir a
            PR)
          </SmallText>
        </Row>
        <InsetSpan>{numLocations}</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

const NumLocationsExplored = function ({ userHistories }) {
  const locationsExplored = new Set(
    userHistories.flatMap((history) =>
      history.visitLog.map((log) => log.locationId),
    ),
  );

  return (
    <DashboardItem $height="4rem">
      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Locations Explored
          </Heading>
          <SmallText>
            (The total number of locations completed by Explorers in Debí ir a
            PR)
          </SmallText>
        </Row>
        <InsetSpan>{locationsExplored.size}</InsetSpan>
      </Row>
    </DashboardItem>
  );
};
function AmbassadorDashboardLocationStats({ explorations, userHistories }) {
  return (
    <Row $direction="horizontal" $gap="var(--gap-xl)">
      <NumTotalLocations explorations={explorations} />
      <NumLocationsExplored
        explorations={explorations}
        userHistories={userHistories}
      />
    </Row>
  );
}

export default AmbassadorDashboardLocationStats;
