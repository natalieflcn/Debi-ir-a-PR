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
            (The total number of explorations created by Ambassadors in{" "}
            <span translate="no" className="notranslate">
              Debí ir a PR
            </span>
            )
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
            <span translate="no" className="notranslate">
              Debí ir a PR
            </span>
            )
          </SmallText>
        </Row>
        <InsetSpan>{numExplorationsCompleted}</InsetSpan>
      </DashboardItemContentRow>
    </DashboardItem>
  );
};

function AmbassadorDashboardExplorationStats({
  explorations,
  explorationProgress,
}) {
  const numExplorations = explorations.length;
  const numExplorationsCompleted = [
    ...new Set(
      explorationProgress
        .filter((progress) => progress.status === "completed")
        .map((progress) => progress.exploration),
    ),
  ];

  return (
    <StyledRow $direction="horizontal" $gap="var(--gap-xl)" $align="stretch">
      <NumTotalExplorations numExplorations={numExplorations} />
      <NumExplorationsCompleted
        numExplorationsCompleted={numExplorationsCompleted.length}
      />
    </StyledRow>
  );
}

export default AmbassadorDashboardExplorationStats;
