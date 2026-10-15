import styled from "styled-components";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import SmallText from "../../../../shared/components/typography/SmallText";
import InsetSpan from "../../../../shared/components/ui/InsetSpan";

const StyledRow = styled(Row)`
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const DashboardItemContentRow = styled(Row)`
  /* width: 100%; */

  @media (max-width: 900px) {
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: var(--gap-md);
    text-align: center;
    align-items: center;
  }
`;

const NumTotalLocations = function ({ explorations }) {
  const numLocations = explorations.flatMap(
    (exploration) => exploration.locations,
  ).length;

  return (
    <DashboardItem>
      <DashboardItemContentRow $direction="horizontal" $gap="var(--gap-xl)">
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
      </DashboardItemContentRow>
    </DashboardItem>
  );
};

const NumLocationsExplored = function ({ explorationProgress }) {
  const locationsExplored = [
    ...new Set(
      explorationProgress.flatMap((progress) =>
        progress.visitLog.map((log) => log.location),
      ),
    ),
  ].length;

  return (
    <DashboardItem>
      <DashboardItemContentRow $direction="horizontal" $gap="var(--gap-xl)">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Locations Explored
          </Heading>
          <SmallText>
            (The total number of locations completed by Explorers in Debí ir a
            PR)
          </SmallText>
        </Row>
        <InsetSpan>{locationsExplored}</InsetSpan>
      </DashboardItemContentRow>
    </DashboardItem>
  );
};
function AmbassadorDashboardLocationStats({
  explorations,
  explorationProgress,
}) {
  return (
    <StyledRow $direction="horizontal" $gap="var(--gap-xl)" $align="stretch">
      <NumTotalLocations explorations={explorations} />
      <NumLocationsExplored
        explorations={explorations}
        explorationProgress={explorationProgress}
      />
    </StyledRow>
  );
}

export default AmbassadorDashboardLocationStats;
