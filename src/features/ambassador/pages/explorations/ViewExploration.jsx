import ExplorationCard from "../../../../shared/components/explorations/ExplorationCard";
import Button from "../../../../shared/components/ui/Button";

import fakeExplorationData from "../../../explorer/pages/explorations/fakeExplorationData";
import AmbassadorExplorationCardHeaderDetails from "../../components/explorations/AmbassadorExplorationCardHeaderDetails";
import AmbassadorExplorationCardLocations from "../../components/explorations/AmbassadorExplorationCardLocations";

const headerCTA = (
  <Button $variation="primary" $size="medium">
    Edit Details
  </Button>
);

function ViewExploration({ exploration = fakeExplorationData }) {
  const headerDetails = (
    <AmbassadorExplorationCardHeaderDetails author="me" lastUpdated="today" />
  );

  const locationDetails = (
    <AmbassadorExplorationCardLocations locations={exploration.locations} />
  );

  return (
    <ExplorationCard
      exploration={fakeExplorationData}
      headerDetails={headerDetails}
      locationDetails={locationDetails}
    />
  );
}

export default ViewExploration;
