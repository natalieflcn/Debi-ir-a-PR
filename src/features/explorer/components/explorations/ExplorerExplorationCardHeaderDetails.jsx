import { IoFlag } from "react-icons/io5";
import Row from "../../../../shared/components/layout/Row";
import Bold from "../../../../shared/components/typography/Bold";
import Button from "../../../../shared/components/ui/Button";
import ProgressBar from "../../../../shared/components/ui/ProgressBar";

function ExplorerExplorationCardHeaderDetails({ hasStarted, exploration }) {
  const stopsRemaining = exploration.numStops;

  return (
    <>
      {hasStarted && (
        <>
          <Row $direction="horizontal" $gap="var(--gap-xl)" $align="center">
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
          </Row>
          <Row>
            <ProgressBar completed={60}></ProgressBar>
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
