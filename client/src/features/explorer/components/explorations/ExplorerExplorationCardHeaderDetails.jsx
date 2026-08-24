import { IoFlag } from "react-icons/io5";
import Row from "../../../../shared/components/layout/Row";
import Bold from "../../../../shared/components/typography/Bold";
import Button from "../../../../shared/components/ui/Button";
import ProgressBar from "../../../../shared/components/ui/ProgressBar";
import styled from "styled-components";

const StyledRow = styled(Row)`
  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--gap-md);
  }
`;

function ExplorerExplorationCardHeaderDetails({
  hasStarted,
  exploration,
  userHistory,
}) {
  const stopsRemaining = exploration.numStops;

  const userProgress = Math.round(
    (userHistory.explorationProgress.find(
      (visitedExploration) =>
        visitedExploration.explorationId === exploration.id,
    ).locationsVisited /
      exploration.numStops) *
      100,
  );

  return (
    <>
      {hasStarted && (
        <>
          <StyledRow
            $direction="horizontal"
            $gap="var(--gap-xl)"
            $align="center"
          >
            <Row $direction="horizontal" $gap="var(--gap-sm)">
              <IoFlag color="var(--color-red-300)" />
              <Bold $color="var(--color-dark-200)">
                {exploration.numStops} stops completed
              </Bold>
            </Row>
            <Row $direction="horizontal" $gap="var(--gap-sm)">
              <IoFlag color="var(--color-red-300)" />
              <Bold $color="var(--color-dark-200)">
                {stopsRemaining} stops remaining
              </Bold>
            </Row>
          </StyledRow>
          <Row>
            <ProgressBar completed={userProgress}></ProgressBar>
          </Row>
        </>
      )}
      {!hasStarted && (
        <Button $variation="primary" $size="small">
          Start Exploring
        </Button>
      )}
    </>
  );
}

export default ExplorerExplorationCardHeaderDetails;
