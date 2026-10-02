import { IoFlag } from "react-icons/io5";
import ExplorationCard from "../../../explorations/components/ExplorationCard";

import ExplorerExplorationCardHeaderDetails from "../../components/explorations/ExplorerExplorationCardHeaderDetails";
import ExplorerExplorationCardLocations from "../../components/explorations/ExplorerExplorationCardLocations";
import ExplorerExplorationCardFooterCTA from "../../components/explorations/ExplorerExplorationCardFooterCTA";
import { useLoaderData } from "react-router-dom";
import {
  endExploration,
  getExplorationProgress,
  startExploration,
} from "../../../../services/explorationProgress";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Spinner from "../../../../shared/components/ui/Spinner";

function Exploration() {
  const { exploration } = useLoaderData();
  const QueryClient = useQueryClient();
  const { isPending, isError, data, error, isSuccess } = useQuery({
    queryKey: ["explorationProgress", exploration._id],
    queryFn: () => getExplorationProgress(exploration._id),
  });

  const handleStartExploration = useMutation({
    mutationFn: (explorationId) => startExploration(explorationId),

    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["explorationProgress", exploration._id],
      });

      QueryClient.invalidateQueries({
        queryKey: ["allExplorationProgress"],
      });
    },
  });

  const handleEndExploration = useMutation({
    mutationFn: (explorationId) => endExploration(explorationId),
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["explorationProgress", exploration._id],
      });

      QueryClient.invalidateQueries({
        queryKey: ["allExplorationProgress"],
      });
    },
  });

  const userHistory = data?.data?.data || null;

  const hasStarted =
    userHistory?.status === "in_progress" ||
    userHistory?.status === "completed";

  const headerDetails = (
    <ExplorerExplorationCardHeaderDetails
      userHistory={userHistory}
      hasStarted={hasStarted}
      exploration={exploration}
      onStartExploration={() => handleStartExploration.mutate(exploration._id)}
      mutateIsPending={handleStartExploration.isPending}
    />
  );

  const locationDetails = (
    <ExplorerExplorationCardLocations
      hasStarted={hasStarted}
      // exploration={exploration}
      locations={exploration.locations}
      userHistory={userHistory}
      mutateIsPending={handleStartExploration.isPending}
    />
  );

  const footerCTA = (
    <ExplorerExplorationCardFooterCTA
      hasStarted={hasStarted}
      exploration={exploration}
      userHistory={userHistory}
      // onStartExploration={handleStartExploration}
      onStartExploration={() => handleStartExploration.mutate(exploration._id)}
      onEndExploration={() => handleEndExploration.mutate(exploration._id)}
      mutateIsPending={handleStartExploration.isPending}
    />
  );

  return (
    <>
      {isPending && <Spinner />}

      {(isError || handleStartExploration.isError) && (
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
          isPending={handleStartExploration.isPending}
        />
      )}
    </>
  );
}

export default Exploration;
