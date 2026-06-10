import ExplorationCard from "../../../../shared/components/explorations/ExplorationCard";
import AdminExplorationCardHeaderDetails from "../../../../shared/components/management/AdminExplorationCardHeaderDetails";
import AdminExplorationCardLocations from "../../../../shared/components/management/AdminExplorationCardLocations";
import Button from "../../../../shared/components/ui/Button";

import fakeExplorationData from "../../../explorer/pages/explorations/fakeExplorationData";

function ViewExploration({ exploration = fakeExplorationData }) {
  const headerDetails = (
    <AdminExplorationCardHeaderDetails author="me" lastUpdated="today" />
  );

  const locationDetails = (
    <AdminExplorationCardLocations locations={exploration.locations} />
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
