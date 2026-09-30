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

const StyledRow = styled(Row)`
  text-align: center;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: var(--gap-md);
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
            <Row $direction="horizontal" $align="center" $gap="var(--gap-sm)">
              <IoCheckmarkCircleSharp size={25} color="var(--color-red-300)" />
              <Bold $color="var(--color-light-0)">
                Visited on {formatDate(visitedAt)}
              </Bold>
            </Row>
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
            <Row
              $direction="horizontal"
              $gap="var(--gap-sm
              )"
            >
              <Heading as="h5" $color="var(--color-red-300)">
                Completed!
              </Heading>
              <IoCheckmarkCircleSharp size={40} color="var(--color-red-300)" />
            </Row>
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

  console.log(exploration._id);
  const { isPending, isError, data, error, isSuccess } = useQuery({
    queryKey: ["explorationProgress", exploration._id],
    queryFn: () => getExplorationProgress(exploration._id),
  });

  const mutateCompleteLocation = useMutation({
    mutationFn: ({ explorationId, locationId }) =>
      addVisitLocation(explorationId, locationId),
    onSuccess: async () => {
      console.log("onsuccess is running");
      QueryClient.invalidateQueries({
        queryKey: ["explorationProgress", exploration._id],
      });
    },
  });

  const mutateRemoveLocation = useMutation({
    mutationFn: ({ explorationId, locationId }) =>
      removeVisitLocation(explorationId, locationId),
    onSuccess: () =>
      QueryClient.invalidateQueries({
        queryKey: ["explorationProgress", exploration._id],
      }),
  });

  const userHistory = data?.data?.data || null;

  const userCompleted = Boolean(
    userHistory?.visitLog?.some((visit) => visit.location === location._id),
  );

  console.log(userHistory.visitLog);
  console.log(userCompleted);

  function handleToggleCompleted() {
    console.log("user completed", userCompleted);
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
        userHistory?.visitLog.find((visit) => visit?.location === location._id)
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
      {isPending && <Spinner />}

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
