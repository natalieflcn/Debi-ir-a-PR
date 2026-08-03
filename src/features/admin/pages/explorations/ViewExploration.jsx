import ExplorationCard from "../../../explorations/components/ExplorationCard";
import AdminExplorationCardHeaderDetails from "../../../../shared/components/management/AdminExplorationCardHeaderDetails";
import AdminExplorationCardLocations from "../../../../shared/components/management/AdminExplorationCardLocations";
import Button from "../../../../shared/components/ui/Button";
import { useLoaderData } from "react-router-dom";

import AdminFooterBadgeDisplay from "../../../../shared/components/management/AdminFooterBadgeDisplay";

function ViewExploration() {
  const { exploration, user } = useLoaderData();

  const headerDetails = (
    <AdminExplorationCardHeaderDetails
      author={user.name}
      lastUpdated={exploration.updatedAt}
    />
  );

  const locationDetails = (
    <AdminExplorationCardLocations locations={exploration.locations} />
  );

  const footerDetails = <AdminFooterBadgeDisplay badge={exploration.badge} />;

  return (
    <ExplorationCard
      exploration={exploration}
      headerDetails={headerDetails}
      locationDetails={locationDetails}
      footerCTA={footerDetails}
      type="admin"
    />
  );
}

export default ViewExploration;
