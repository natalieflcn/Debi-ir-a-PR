import { IoCheckmarkCircleSharp } from "react-icons/io5";

import { FaRegCircle } from "react-icons/fa";
import Button from "../../../../shared/components/ui/Button";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import ExplorationLocationCard from "../../../locations/components/ExplorationLocationCard";
import { ExplorationLocationHeading } from "../../../locations/components/explorationLocationCard.styles";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { formatDate } from "../../../../shared/utils/helpers";
import Bold from "../../../../shared/components/typography/Bold";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addVisitLocation,
  getExplorationProgress,
  removeVisitLocation,
} from "../../../../services/explorationProgress";
import Spinner from "../../../../shared/components/ui/Spinner";
import SpinnerMini from "../../../../shared/components/ui/SpinnerMini";
import { useAuth } from "../../../auth/contexts/AuthContext";

const StyledRow = styled(Row)`
  text-align: center;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: var(--gap-md);
  }
`;

const VisitedRow = styled(Row)`
  text-align: center;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: var(--gap-xs);
  }
`;

const CompletedRow = styled(Row)`
  @media (max-width: 700px) {
    flex-direction: column;
    gap: var(--gap-xs);
  }
`;

function ExplorerHeaderDetails({
  userCompleted,
  visitedAt,
  locationName,
  mutateIsPending,
}) {
  return (
    <>
      {mutateIsPending && (
        <Row $align="center">
          <SpinnerMini />
        </Row>
      )}
      {!mutateIsPending && (
        <Row>
          {userCompleted && (
            <VisitedRow
              $direction="horizontal"
              $align="center"
              $gap="var(--gap-sm)"
            >
              <IoCheckmarkCircleSharp size={20} color="var(--color-red-300)" />
              <Bold $color="var(--color-brown-200)">
                Visited on {formatDate(visitedAt)}
              </Bold>
            </VisitedRow>
          )}
        </Row>
      )}
    </>
  );
}

// {userCompleted ? ( <ExplorationLocationHeading as="h6" $color="var(--color-dark-200)">

//         <IoCheckmarkCircleSharp size={25} color="var(--color-red-300)" /> <p>Completed on {userHistory.visitedAt}</p>

//     </ExplorationLocationHeading>}

function ExplorerFooterCTA({
  userCompleted,
  onToggleCompleted,
  mutateIsPending = false,
}) {
  return (
    <StyledRow
      $direction="horizontal"
      $align="space-evenly"
      $gap="var(--gap-lg)"
    >
      {!mutateIsPending && (
        <>
          <Row $direction="horizontal" $gap="var(--gap-lg)">
            {!userCompleted && (
              <Heading as="h6">Have you explored this location yet?</Heading>
            )}
          </Row>

          {userCompleted && (
            <CompletedRow
              $direction="horizontal"
              $gap="var(--gap-sm
              )"
            >
              <Heading as="h5" $color="var(--color-red-300)">
                Completed!
              </Heading>
              <IoCheckmarkCircleSharp size={40} color="var(--color-red-300)" />
            </CompletedRow>
          )}
        </>
      )}

      {mutateIsPending && <SpinnerMini />}
      {!mutateIsPending && (
        <Button
          $variation={userCompleted ? "darkRed" : "primary"}
          $size="small"
          onClick={onToggleCompleted}
        >
          {userCompleted
            ? "Mark as Incomplete"
            : "I have explored this location"}
        </Button>
      )}
    </StyledRow>
  );
}

function ExplorationLocation() {
  const { exploration, location } = useLoaderData();
  const QueryClient = useQueryClient();
  const { user } = useAuth();
  const { isPending, isError, data, error, isSuccess } = useQuery({
    queryKey: ["explorationProgress", exploration._id, user._id],
    queryFn: () => getExplorationProgress(exploration._id),
  });

  const mutateCompleteLocation = useMutation({
    mutationFn: ({ explorationId, locationId }) =>
      addVisitLocation(explorationId, locationId),
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["explorationProgress", exploration._id, user._id],
      });

      QueryClient.invalidateQueries({
        queryKey: ["allExplorationProgress", user._id],
      });
    },
  });

  const mutateRemoveLocation = useMutation({
    mutationFn: ({ explorationId, locationId }) =>
      removeVisitLocation(explorationId, locationId),
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["explorationProgress", exploration._id, user._id],
      });

      QueryClient.invalidateQueries({
        queryKey: ["allExplorationProgress", user._id],
      });
    },
  });

  const userHistory = data?.data?.data || null;

  const userCompleted = Boolean(
    userHistory?.visitLog?.some((visit) => visit.location === location._id),
  );

  function handleToggleCompleted() {
    if (userCompleted)
      mutateRemoveLocation.mutate({
        explorationId: exploration._id,
        locationId: location._id,
      });
    else
      mutateCompleteLocation.mutate({
        explorationId: exploration._id,
        locationId: location._id,
      });
  }
  const mutateIsPending =
    mutateCompleteLocation.isPending || mutateRemoveLocation.isPending;
  const headerDetails = (
    <ExplorerHeaderDetails
      userCompleted={userCompleted}
      visitedAt={
        userHistory?.visitLog.find((visit) => visit.location === location._id)
          ?.visitedAt
      }
      locationName={location.name}
      mutateIsPending={mutateIsPending}
    />
  );

  const footerCTA = (
    <ExplorerFooterCTA
      userCompleted={userCompleted}
      onToggleCompleted={handleToggleCompleted}
      mutateIsPending={mutateIsPending}
    />
  );

  return (
    <>
      {(isPending ||
        mutateCompleteLocation.isPending ||
        mutateRemoveLocation.isPending) && <Spinner />}

      {isSuccess && (
        <ExplorationLocationCard
          exploration={exploration}
          location={location}
          headerDetails={headerDetails}
          footerCTA={footerCTA}
          userCompleted={userCompleted}
        />
      )}
    </>
  );
}

export default ExplorationLocation;
