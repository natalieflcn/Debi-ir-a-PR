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

const StyledRow = styled(Row)`
  text-align: center;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: var(--gap-md);
  }
`;

function ExplorerHeaderDetails({ userCompleted, locationName }) {
  return (
    <ExplorationLocationHeading
      as="h4"
      $color="var(--color-red-200)"
      $shadowColor="var(--color-brown-400)"
    >
      {userCompleted ? (
        <IoCheckmarkCircleSharp size={25} color="var(--color-red-300)" />
      ) : (
        <FaRegCircle size={25} />
      )}
      {locationName}
    </ExplorationLocationHeading>
  );
}

function ExplorerFooterCTA({ userCompleted, onToggleCompleted }) {
  return (
    <StyledRow
      $direction="horizontal"
      $align="space-evenly"
      $gap="var(--gap-lg)"
    >
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

      <Button
        $variation={userCompleted ? "darkRed" : "primary"}
        $size="small"
        onClick={onToggleCompleted}
      >
        {userCompleted ? "Mark as Incomplete" : "I have explored this location"}
      </Button>
    </StyledRow>
  );
}

function ExplorationLocation() {
  const { location, userHistory } = useLoaderData();

  const loadUserCompleted = Boolean(
    userHistory.visitLog.find((visit) => visit.locationId === location.id),
  );

  const [userCompleted, setUserCompleted] = useState(loadUserCompleted);

  const { explorationId } = useParams(); // ✅ get id from URL

  function handleToggleCompleted() {
    setUserCompleted((prev) => !prev);
  }

  const headerDetails = (
    <ExplorerHeaderDetails
      userCompleted={userCompleted}
      locationName={location.name}
    />
  );

  const footerCTA = (
    <ExplorerFooterCTA
      userCompleted={userCompleted}
      onToggleCompleted={handleToggleCompleted}
    />
  );

  return (
    <ExplorationLocationCard
      exploration={explorationId}
      location={location}
      headerDetails={headerDetails}
      footerCTA={footerCTA}
      userCompleted={userCompleted}
    />
  );
}

export default ExplorationLocation;
