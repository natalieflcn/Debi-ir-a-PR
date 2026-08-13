import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import SmallText from "../../../../shared/components/typography/SmallText";
import InsetSpan from "../../../../shared/components/ui/InsetSpan";

const NumTotalExplorations = function ({ numExplorations }) {
  return (
    <DashboardItem $variation="center">
      <Row $direction="horizontal" $gap="var(--gap-xl)" $align="stretch">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Total Explorations
          </Heading>
          <SmallText>
            (The total number of explorations created by Ambassadors in Debí ir
            a PR)
          </SmallText>
        </Row>
        <InsetSpan>{numExplorations}</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

const NumExplorationsCompleted = function ({ numExplorationsCompleted }) {
  return (
    <DashboardItem $variation="center">
      <Row $direction="horizontal" $gap="var(--gap-xl)" $align="stretch">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Explorations Completed
          </Heading>
          <SmallText>
            (The total number of explorations all Explorers have completed in
            Debí ir a PR)
          </SmallText>
        </Row>
        <InsetSpan>{numExplorationsCompleted}</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

function AmbassadorDashboardExplorationStats({
  explorations,
  numExplorationsCompleted,
}) {
  const numExplorations = explorations.length;

  return (
    <Row $direction="horizontal" $gap="var(--gap-xl)" $align="stretch">
      <NumTotalExplorations numExplorations={numExplorations} />
      <NumExplorationsCompleted
        numExplorationsCompleted={numExplorationsCompleted}
      />
    </Row>
  );
}

export default AmbassadorDashboardExplorationStats;
