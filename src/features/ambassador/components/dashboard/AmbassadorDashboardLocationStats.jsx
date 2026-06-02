import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import SmallText from "../../../../shared/components/typography/SmallText";
import InsetSpan from "../../../../shared/components/ui/InsetSpan";

const NumTotalLocations = function () {
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
        <InsetSpan>5</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

const NumLocationsExplored = function () {
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
        <InsetSpan>5</InsetSpan>
      </Row>
    </DashboardItem>
  );
};
function AmbassadorDashboardLocationStats() {
  return (
    <Row $direction="horizontal" $gap="var(--gap-xl)">
      <NumTotalLocations />
      <NumLocationsExplored />
    </Row>
  );
}

export default AmbassadorDashboardLocationStats;
