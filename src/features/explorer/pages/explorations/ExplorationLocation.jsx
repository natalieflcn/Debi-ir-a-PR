import { IoCheckmarkCircleSharp } from "react-icons/io5";
import ExplorationLocationCard from "../../components/explorations/ExplorationLocationCard";
import {
  ExplorationLocationHeading,
  ExplorationLocationFooter,
} from "../../components/explorations/explorationLocationCard.styles";
import fakeExplorationLocationData from "./fakeExplorationLocationData";
import { FaRegCircle } from "react-icons/fa";
import Button from "../../../../shared/components/ui/Button";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";

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

function ExplorerFooterCTA({ userCompleted }) {
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

      {!userCompleted ? (
        <Button $variation="primary" $size="small">
          I have explored this location
        </Button>
      ) : (
        <Button $variation="darkRed" $size="small">
          I have explored this location
        </Button>
      )}
    </Row>
  );
}

function ExplorationLocation({
  explorationLocation = fakeExplorationLocationData,
}) {
  const headerDetails = (
    <ExplorerHeaderDetails
      userCompleted={true}
      locationName={explorationLocation.locationName}
    />
  );

  const footerCTA = <ExplorerFooterCTA userCompleted={false} />;

  return (
    <ExplorationLocationCard
      explorationLocation={explorationLocation}
      headerDetails={headerDetails}
      footerCTA={footerCTA}
      userCompleted={true}
    />
  );
}

export default ExplorationLocation;
