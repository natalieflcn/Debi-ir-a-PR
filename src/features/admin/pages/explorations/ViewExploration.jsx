import ExplorationCard from "../../../explorations/components/ExplorationCard";
import AdminExplorationCardHeaderDetails from "../../../../shared/components/management/AdminExplorationCardHeaderDetails";
import AdminExplorationCardLocations from "../../../../shared/components/management/AdminExplorationCardLocations";
import Button from "../../../../shared/components/ui/Button";
import { useLoaderData } from "react-router-dom";
import fakeExplorationData from "../../../explorer/pages/explorations/fakeExplorationData";

function ViewExploration() {
  const exploration = useLoaderData();

  const headerDetails = (
    <AdminExplorationCardHeaderDetails author="me" lastUpdated="today" />
  );

  const locationDetails = (
    <AdminExplorationCardLocations locations={exploration.locations} />
  );

  return (
    <ExplorationCard
      exploration={exploration}
      headerDetails={headerDetails}
      locationDetails={locationDetails}
      type="admin"
    />
  );
}

export default ViewExploration;
