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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Spinner from "../../../../shared/components/ui/Spinner";

function Exploration() {
  const { exploration } = useLoaderData();
  const QueryClient = useQueryClient();
  const { isPending, isError, data, error, isSuccess } = useQuery({
    queryKey: ["explorationProgress", exploration._id],
    queryFn: () => getExplorationProgress(exploration._id),
  });

  const mutateExploration = useMutation({
    mutationFn: (explorationId) => startExploration(explorationId),
    onSuccess: () =>
      QueryClient.invalidateQueries({
        queryKey: ["explorationProgress", exploration._id],
      }),
  });

  const userHistory = data?.data?.data || null;

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
    userHistory?.status === "in_progress" ||
    userHistory?.status === "completed";

  const headerDetails = (
    <ExplorerExplorationCardHeaderDetails
      userHistory={userHistory}
      hasStarted={hasStarted}
      exploration={exploration}
      onStartExploration={() => mutateExploration.mutate(exploration._id)}
      mutateIsPending={mutateExploration.isPending}
    />
  );

  const locationDetails = (
    <ExplorerExplorationCardLocations
      hasStarted={hasStarted}
      // exploration={exploration}
      locations={exploration.locations}
      userHistory={userHistory}
      mutateIsPending={mutateExploration.isPending}
    />
  );

  const footerCTA = (
    <ExplorerExplorationCardFooterCTA
      hasStarted={hasStarted}
      exploration={exploration}
      userHistory={userHistory}
      // onStartExploration={handleStartExploration}
      onStartExploration={() => mutateExploration.mutate(exploration._id)}
      mutateIsPending={mutateExploration.isPending}
    />
  );

  return (
    <>
      {isPending && <Spinner />}

      {(isError || mutateExploration.isError) && (
        <span>Error: {error.message}</span>
      )}

      {/* {
    mutation.isSuccess ? "Exploration Started!" : null;
  } */}

      {isSuccess && (
        <ExplorationCard
          exploration={exploration}
          headerDetails={headerDetails}
          locationDetails={locationDetails}
          footerCTA={footerCTA}
          isPending={mutateExploration.isPending}
        />
      )}
    </>
  );
}

export default Exploration;
