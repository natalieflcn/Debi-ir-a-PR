import ExplorationCard from "../../../explorations/components/ExplorationCard";
import Row from "../../../../shared/components/layout/Row";
import AdminExplorationCardHeaderDetails from "../../../../shared/components/management/AdminExplorationCardHeaderDetails";
import AdminExplorationCardLocations from "../../../../shared/components/management/AdminExplorationCardLocations";
import Button from "../../../../shared/components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";
// import fakeExplorationData from "../../../explorer/pages/explorations/fakeExplorationData";
import { useLoaderData } from "react-router-dom";
import AdminFooterBadgeDisplay from "../../../../shared/components/management/AdminFooterBadgeDisplay";

function ViewExploration() {
  const { exploration, user } = useLoaderData();

  // need to use GET user with user.id here
  const headerDetails = (
    <AdminExplorationCardHeaderDetails
      author={exploration.createdBy}
      lastUpdated={exploration.updatedAt}
      type="ambassador"
    />
  );

  const locationDetails = (
    <AdminExplorationCardLocations
      locations={exploration.locations}
      type="ambassador"
    />
  );

  const footerDetails = <AdminFooterBadgeDisplay badge={exploration.badge} />;

  return (
    <ExplorationCard
      exploration={exploration}
      headerDetails={headerDetails}
      locationDetails={locationDetails}
      footerCTA={footerDetails}
      type="ambassador"
    />
  );
}

export default ViewExploration;
