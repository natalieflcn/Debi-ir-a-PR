import { FaRegCircle } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Row from "../../../../shared/components/layout/Row";
import { LocationHeading } from "../../../../shared/components/explorations/explorationCard.styles";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import RouterLink from "../../../../shared/components/routing/RouterLink";

function ExplorerExplorationCardLocations({
  locations,
  hasStarted,
  exploration,
}) {
  return locations.map((location) => (
    <Row $direction="horizontal" $gap="var(--gap-xl)" key={location.id}>
      <Row $direction="horizontal" $gap="var(--gap-md)" $align="flex-start">
        {hasStarted &&
          (location.completed ? (
            <IoCheckmarkCircleSharp size={25} color="var(--color-red-300)" />
          ) : (
            <FaRegCircle size={25} />
          ))}
        <LocationHeading as="h4" $color="var(--color-red-300)">
          {location.id}
        </LocationHeading>
        <Heading as="h5">{location.name}</Heading>
      </Row>
      {hasStarted && (
        <RouterLink
          to={`/explorations/${exploration.id}/locations/${location.id}`}
        >
          <Button $variation="primary" $size="extraSmall">
            Details
          </Button>
        </RouterLink>
      )}
    </Row>
  ));
}

export default ExplorerExplorationCardLocations;
