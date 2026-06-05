import ExplorationCard from "../../../../shared/components/explorations/ExplorationCard";
import Button from "../../../../shared/components/ui/Button";
import fakeExplorationData from "../../../explorer/pages/explorations/fakeExplorationData";

const headerCTA = (
  <Button $variation="primary" $size="medium">
    Edit Details
  </Button>
);

function ViewExploration() {
  return (
    <ExplorationCard
      exploration={fakeExplorationData}
      userProgress={null}
      headerCTA={headerCTA}
    >
      View exploration
    </ExplorationCard>
  );
}

export default ViewExploration;
