import { IoCheckmarkCircleSharp } from "react-icons/io5";
import ExplorationLocationCard from "../../../explorer/components/explorations/ExplorationLocationCard";
import {
  ExplorationLocationHeading,
  ExplorationLocationFooter,
} from "../../../explorer/components/explorations/explorationLocationCard.styles";
import fakeExplorationLocationData from "../../../explorer/pages/explorations/fakeExplorationLocationData";
import { FaRegCircle } from "react-icons/fa";
import Button from "../../../../shared/components/ui/Button";
import Row from "../../../../shared/components/layout/Row";
import AdminFooterCTA from "../../../../shared/components/management/AdminFooterCTA";

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
