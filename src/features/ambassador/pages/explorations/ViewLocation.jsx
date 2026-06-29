import { IoCheckmarkCircleSharp } from "react-icons/io5";
import ExplorationLocationCard from "../../../../shared/components/explorations/ExplorationLocationCard";
import {
  ExplorationLocationHeading,
  ExplorationLocationFooter,
} from "../../../../shared/components/explorations/explorationLocationCard.styles";
import fakeExplorationLocationData from "../../../explorer/pages/explorations/fakeExplorationLocationData";
import { FaArrowLeft, FaRegCircle } from "react-icons/fa";
import Button from "../../../../shared/components/ui/Button";
import Row from "../../../../shared/components/layout/Row";
import AdminFooterCTA from "../../../../shared/components/management/AdminFooterCTA";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import fakeExplorationsData from "../../../explorer/pages/explorations/fakeExplorationsData";
import { useParams } from "react-router-dom";

function ViewLocation() {
  const footerCTA = <AdminFooterCTA />;

  const { explorationId } = useParams();

  return (
    <ExplorationLocationCard
      exploration={explorationId}
      explorationLocation={fakeExplorationLocationData}
      userCompleted={true}
      footerCTA={footerCTA}
      type="ambassador"
    />
  );
}

export default ViewLocation;
