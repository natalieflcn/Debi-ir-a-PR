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

const NumTotalExplorations = function ({ numExplorations }) {
  return (
    <DashboardItem>
      <DashboardItemContentRow $direction="horizontal" $gap="var(--gap-xl)">
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
      </DashboardItemContentRow>
    </DashboardItem>
  );
};

const NumExplorationsCompleted = function ({ numExplorationsCompleted }) {
  return (
    <DashboardItem>
      <DashboardItemContentRow $direction="horizontal" $gap="var(--gap-xl)">
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
      </DashboardItemContentRow>
    </DashboardItem>
  );
};

function AmbassadorDashboardExplorationStats({
  explorations,
  numExplorationsCompleted,
}) {
  const numExplorations = explorations.length;

  return (
    <StyledRow $direction="horizontal" $gap="var(--gap-xl)" $align="stretch">
      <NumTotalExplorations numExplorations={numExplorations} />
      <NumExplorationsCompleted
        numExplorationsCompleted={numExplorationsCompleted}
      />
    </StyledRow>
  );
}

export default AmbassadorDashboardExplorationStats;
