import { IoCheckmarkCircleSharp } from "react-icons/io5";

import fakeExplorationLocationData from "../../../explorer/pages/explorations/fakeExplorationLocationData";
import { FaRegCircle } from "react-icons/fa";
import Button from "../../../../shared/components/ui/Button";
import Row from "../../../../shared/components/layout/Row";
import AdminFooterCTA from "../../../../shared/components/management/AdminFooterCTA";
import ExplorationLocationCard from "../../../explorations/components/ExplorationLocationCard";
import { useParams } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

function ViewLocation() {
  const footerCTA = <AdminFooterCTA />;
  const location = useLoaderData();

  const { explorationId } = useParams();

  return (
    <ExplorationLocationCard
      exploration={explorationId}
      location={location}
      userCompleted={true}
      footerCTA={footerCTA}
      type="admin"
    />
  );
}

export default ViewLocation;
