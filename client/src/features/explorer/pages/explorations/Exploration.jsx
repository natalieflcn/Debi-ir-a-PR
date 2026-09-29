import { IoFlag } from "react-icons/io5";
import ExplorationCard from "../../../explorations/components/ExplorationCard";

import ExplorerExplorationCardHeaderDetails from "../../components/explorations/ExplorerExplorationCardHeaderDetails";
import ExplorerExplorationCardLocations from "../../components/explorations/ExplorerExplorationCardLocations";
import ExplorerExplorationCardFooterCTA from "../../components/explorations/ExplorerExplorationCardFooterCTA";
import { useLoaderData } from "react-router-dom";
import {
  getExplorationProgress,
  startExploration,
} from "../../../../services/explorationProgress";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import SpinnerMini from "../../../../shared/components/ui/SpinnerMini";

function Exploration() {
  const { exploration } = useLoaderData();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["explorationProgress", exploration._id],
    queryFn: () => getExplorationProgress(exploration._id),
  });

  const mutation = useMutation({
    mutationFn: (explorationId) => startExploration(explorationId),
  });

  console.log(data);

  const userHistory = data?.data?.data || null;
  console.log(userHistory);

  // const [userHistory, setUserHistory] = useState(useLoaderData);

  // const [hasStarted, setHasStarted] = useState(Boolean(userHistory?.status));

  // async function handleStartExploration() {
  //   console.log("button clicked");
  //   try {
  //     const { data } = await startExploration(exploration._id);
  //     setUserHistory(data.data);
  //     setHasStarted(true);
  //     console.log(data.data);
  //   } catch (err) {
  //     console.log("Failed to start exploration", err);
  //   }
  // }

  // const hasStarted = userHistory.explorationProgress.some(
  //   (startedExploration) => startedExploration.explorationId === exploration.id,
  // );

  const hasStarted =
    (userHistory?.status === "in_progress" ||
      userHistory?.status === "completed") ??
    false;

  console.log(hasStarted);

  const headerDetails = (
    <ExplorerExplorationCardHeaderDetails
      userHistory={userHistory}
      hasStarted={hasStarted}
      exploration={exploration}
      onStartExploration={() => mutation.mutate(exploration._id)}
    />
  );

  const locationDetails = (
    <ExplorerExplorationCardLocations
      hasStarted={hasStarted}
      // exploration={exploration}
      locations={exploration.locations}
      userHistory={userHistory}
    />
  );

  const footerCTA = (
    <ExplorerExplorationCardFooterCTA
      hasStarted={hasStarted}
      exploration={exploration}
      userHistory={userHistory}
      // onStartExploration={handleStartExploration}
      onStartExploration={() => mutation.mutate(exploration._id)}
    />
  );

  return (
    <>
      {(isPending || mutation.isPending) && <SpinnerMini />}

      {(isError || mutation.isError) && <span>Error: {error.message}</span>}

      {/* {
    mutation.isSuccess ? "Exploration Started!" : null;
  } */}

      <ExplorationCard
        exploration={exploration}
        headerDetails={headerDetails}
        locationDetails={locationDetails}
        footerCTA={footerCTA}
      />
    </>
  );
}

export default Exploration;
