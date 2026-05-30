import ExplorationLocationCard from "../../components/explorations/ExplorationLocationCard";
import fakeExplorationLocationData from "./fakeExplorationLocationData";

function ExplorationLocation() {
  return (
    <ExplorationLocationCard
      explorationLocation={fakeExplorationLocationData}
      userProgress={false}
    ></ExplorationLocationCard>
  );
}

export default ExplorationLocation;
