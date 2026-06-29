import { IoCheckmarkCircleSharp } from "react-icons/io5";

import fakeExplorationLocationData from "./fakeExplorationLocationData";
import fakeExplorationsData from "./fakeExplorationsData";
import { FaRegCircle } from "react-icons/fa";
import Button from "../../../../shared/components/ui/Button";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import ExplorationLocationCard from "../../../../shared/components/explorations/ExplorationLocationCard";
import { ExplorationLocationHeading } from "../../../../shared/components/explorations/explorationLocationCard.styles";
import { useState } from "react";
import { useParams } from "react-router-dom";

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
    <Row $direction="horizontal" $align="space-evenly">
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
    </Row>
  );
}

function ExplorationLocation({
  explorationLocation = fakeExplorationLocationData,
}) {
  const [userCompleted, setUserCompleted] = useState(false);

  const { explorationId } = useParams(); // ✅ get id from URL

  function handleToggleCompleted() {
    setUserCompleted((prev) => !prev);
  }
  const headerDetails = (
    <ExplorerHeaderDetails
      userCompleted={userCompleted}
      locationName={explorationLocation.name}
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
      explorationLocation={explorationLocation}
      headerDetails={headerDetails}
      footerCTA={footerCTA}
      userCompleted={userCompleted}
    />
  );
}

export default ExplorationLocation;
