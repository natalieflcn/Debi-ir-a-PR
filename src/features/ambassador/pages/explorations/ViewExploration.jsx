import ExplorationCard from "../../../../shared/components/explorations/ExplorationCard";
import Row from "../../../../shared/components/layout/Row";
import AdminExplorationCardHeaderDetails from "../../../../shared/components/management/AdminExplorationCardHeaderDetails";
import AdminExplorationCardLocations from "../../../../shared/components/management/AdminExplorationCardLocations";
import Button from "../../../../shared/components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";
import fakeExplorationData from "../../../explorer/pages/explorations/fakeExplorationData";
import { useLoaderData } from "react-router-dom";

function ViewExploration() {
  const exploration = useLoaderData();

  const headerDetails = (
    <AdminExplorationCardHeaderDetails
      author="me"
      lastUpdated="today"
      type="ambassador"
    />
  );

  const locationDetails = (
    <AdminExplorationCardLocations
      locations={exploration.locations}
      type="ambassador"
    />
  );

  return (
    <ExplorationCard
      exploration={fakeExplorationData}
      headerDetails={headerDetails}
      locationDetails={locationDetails}
      type="ambassador"
    />
  );
}

export default ViewExploration;
