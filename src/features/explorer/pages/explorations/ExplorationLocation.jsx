import ExplorationLocationCard from "../../components/explorations/ExplorationLocationCard";
import fakeExplorationLocationData from "./fakeExplorationLocationData";

function ExplorationLocation() {
  return (
    <ExplorationLocationCard
      explorationLocation={fakeExplorationLocationData}
      userCompleted={true}
    ></ExplorationLocationCard>
  );
}

export default ExplorationLocation;
