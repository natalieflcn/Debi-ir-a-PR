import { FaRegCircle } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Row from "../../../../shared/components/layout/Row";

import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { LocationHeading } from "../../../explorations/components/explorationCard.styles";
import styled from "styled-components";

const StyledRow = styled(Row)`
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: start;
    gap: var(--gap-xs);

    button {
      width: 100%;
    }
  }
`;

const IconHeadingRow = styled(Row)`
  @media (max-width: 800px) {
    gap: var(--gap-sm);
  }

  @media (max-width: 550px) {
    gap: var(--gap-xs);
  }
`;

const StyledHeadingName = styled(Heading)`
  @media (max-width: 550px) {
    font-size: var(--font-size-sm);
  }
`;
function getUserCompletedLocations(locations, userHistory) {
  const completedLocations = locations.filter((location) =>
    userHistory.visitLog.some((visit) => visit.locationId === location.id),
  );

  return completedLocations;
}

function ExplorerExplorationCardLocations({
  locations,
  hasStarted,
  exploration,
  userHistory,
}) {
  const completedLocationIds = new Set(
    userHistory.visitLog.map((visit) => visit.locationId),
  );

  return locations.map((location, i) => {
    const isCompleted = completedLocationIds.has(location.id);

    return (
      <StyledRow $direction="horizontal" $gap="var(--gap-xl)" key={location.id}>
        <IconHeadingRow
          $direction="horizontal"
          $gap="var(--gap-md)"
          $align="flex-start"
        >
          {hasStarted &&
            (isCompleted ? (
              <IoCheckmarkCircleSharp size={25} color="var(--color-red-300)" />
            ) : (
              <FaRegCircle size={25} />
            ))}
          <LocationHeading as="h4" $color="var(--color-red-300)">
            {i + 1}
          </LocationHeading>
          <StyledHeadingName as="h5">{location.name}</StyledHeadingName>
        </IconHeadingRow>
        {hasStarted && (
          <RouterLink
            to={`/explorations/${exploration.id}/locations/${location.id}`}
          >
            <Button $variation="primary" $size="extraSmall">
              Details
            </Button>
          </RouterLink>
        )}
      </StyledRow>
    );
  });
}

export default ExplorerExplorationCardLocations;
