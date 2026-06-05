import { IoFlag } from "react-icons/io5";
import ExplorationCard from "../../../../shared/components/explorations/ExplorationCard";
import Row from "../../../../shared/components/layout/Row";
import ProgressBar from "../../../../shared/components/ui/ProgressBar";
import fakeExplorationData from "./fakeExplorationData";
import Bold from "../../../../shared/components/typography/Bold";
import Button from "../../../../shared/components/ui/Button";
import ExplorerExplorationCardHeaderDetails from "../../components/explorations/ExplorerExplorationCardHeaderDetails";
import ExplorerExplorationCardLocations from "../../components/explorations/ExplorerExplorationCardLocations";
import ExplorerExplorationCardFooterCTA from "../../components/explorations/ExplorerExplorationCardFooterCTA";

function Exploration({ exploration = fakeExplorationData, userProgress = 0 }) {
  const hasStarted = userProgress !== 1;

  const headerDetails = (
    <ExplorerExplorationCardHeaderDetails
      userProgress={userProgress}
      hasStarted={hasStarted}
      exploration={exploration}
    />
  );

  const locationDetails = (
    <ExplorerExplorationCardLocations
      hasStarted={hasStarted}
      locations={exploration.locations}
    />
  );

  const footerCTA = (
    <ExplorerExplorationCardFooterCTA hasStarted={hasStarted} />
  );

  return (
    <ExplorationCard
      exploration={fakeExplorationData}
      headerDetails={headerDetails}
      locationDetails={locationDetails}
      footerCTA={footerCTA}
    />
  );
}

export default Exploration;
