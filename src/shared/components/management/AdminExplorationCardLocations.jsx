import { LocationHeading } from "../../../features/explorations/components/explorationCard.styles";
import Row from "../layout/Row";
import Heading from "../typography/Heading";
import Button from "../ui/Button";
import RouterLink from "../routing/RouterLink";
import styled from "styled-components";

const StyledRow = styled(Row)`
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: start;
    gap: var(--gap-sm);

    button {
      width: 100%;
    }
  }
`;

const ButtonRow = styled(Row)`
  @media (max-width: 325px) {
    width: 100%;
    flex-direction: column;
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

function AdminExplorationCardLocations({ locations }) {
  return locations.map((location, i) => (
    <StyledRow $direction="horizontal" $gap="var(--gap-xl)" key={location.id}>
      <IconHeadingRow
        $direction="horizontal"
        $gap="var(--gap-md)"
        $align="flex-start"
      >
        <LocationHeading as="h4" $color="var(--color-red-300)">
          {i + 1}
        </LocationHeading>
        <StyledHeadingName as="h5">{location.name}</StyledHeadingName>
      </IconHeadingRow>

      <ButtonRow $direction="horizontal" $gap="var(--gap-md)">
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
      </ButtonRow>
    </StyledRow>
  ));
}

export default AdminExplorationCardLocations;
