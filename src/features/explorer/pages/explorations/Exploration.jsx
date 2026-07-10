import { IoFlag } from "react-icons/io5";
import ExplorationCard from "../../../explorations/components/ExplorationCard";

import ExplorerExplorationCardHeaderDetails from "../../components/explorations/ExplorerExplorationCardHeaderDetails";
import ExplorerExplorationCardLocations from "../../components/explorations/ExplorerExplorationCardLocations";
import ExplorerExplorationCardFooterCTA from "../../components/explorations/ExplorerExplorationCardFooterCTA";
import { useLoaderData } from "react-router-dom";

function Exploration() {
  const { exploration, userHistory } = useLoaderData();

  console.log(userHistory);

  const hasStarted = userHistory.explorationProgress.some(
    (startedExploration) => startedExploration.explorationId === exploration.id,
  );

  const headerDetails = (
    <ExplorerExplorationCardHeaderDetails
      userHistory={userHistory}
      hasStarted={hasStarted}
      exploration={exploration}
    />
  );

  const locationDetails = (
    <ExplorerExplorationCardLocations
      hasStarted={hasStarted}
      exploration={exploration}
      locations={exploration.locations}
    />
  );

  const footerCTA = (
    <ExplorerExplorationCardFooterCTA hasStarted={hasStarted} />
  );

  return (
    <ExplorationCard
      exploration={exploration}
      headerDetails={headerDetails}
      locationDetails={locationDetails}
      footerCTA={footerCTA}
    />
  );
}

export default Exploration;
