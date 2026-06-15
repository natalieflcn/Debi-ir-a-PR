import { IoCheckmarkCircleSharp } from "react-icons/io5";

import fakeExplorationLocationData from "../../../explorer/pages/explorations/fakeExplorationLocationData";
import { FaRegCircle } from "react-icons/fa";
import Button from "../../../../shared/components/ui/Button";
import Row from "../../../../shared/components/layout/Row";
import AdminFooterCTA from "../../../../shared/components/management/AdminFooterCTA";
import ExplorationLocationCard from "../../../../shared/components/explorations/ExplorationLocationCard";

function ViewLocation() {
  const footerCTA = <AdminFooterCTA />;

  return (
    <ExplorationLocationCard
      explorationLocation={fakeExplorationLocationData}
      userCompleted={true}
      footerCTA={footerCTA}
    />
  );
}

export default ViewLocation;
