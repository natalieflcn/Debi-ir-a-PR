import { LocationHeading } from "../explorations/explorationCard.styles";
import Row from "../layout/Row";
import Heading from "../typography/Heading";
import Button from "../ui/Button";
import RouterLink from "../routing/RouterLink";

function AdminExplorationCardLocations({ locations }) {
  return locations.map((location) => (
    <Row $direction="horizontal" $gap="var(--gap-xl)" key={location.id}>
      <Row $direction="horizontal" $gap="var(--gap-md)" $align="flex-start">
        <LocationHeading as="h4" $color="var(--color-red-300)">
          {location.id}
        </LocationHeading>
        <Heading as="h5">{location.name}</Heading>
      </Row>

      <Row $direction="horizontal" $gap="var(--gap-md)">
        <RouterLink to={`locations/${location.id}`}>
          <Button $variation="secondary" $size="extraSmall">
            Details
          </Button>
        </RouterLink>

        <RouterLink to={`locations/${location.id}/edit`}>
          <Button $variation="primary" $size="extraSmall">
            Edit
          </Button>
        </RouterLink>
      </Row>
    </Row>
  ));
}

export default AdminExplorationCardLocations;
