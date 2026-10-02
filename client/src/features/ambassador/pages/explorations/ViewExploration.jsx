import { useLoaderData } from "react-router-dom";
import AdminExplorationCardHeaderDetails from "../../../../shared/components/management/AdminExplorationCardHeaderDetails";
import AdminExplorationCardLocations from "../../../../shared/components/management/AdminExplorationCardLocations";
import AdminFooterBadgeDisplay from "../../../../shared/components/management/AdminFooterBadgeDisplay";
import ExplorationCard from "../../../explorations/components/ExplorationCard";

function ViewExploration() {
  const { exploration } = useLoaderData();

  // need to use GET user with user.id here
  const headerDetails = (
    <AdminExplorationCardHeaderDetails
      exploration={exploration}
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
