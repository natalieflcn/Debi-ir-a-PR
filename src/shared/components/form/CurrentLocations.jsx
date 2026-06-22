import styled from "styled-components";
import Row from "../layout/Row";
import Heading from "../typography/Heading";
import Button from "../ui/Button";

const StyledRow = styled(Row)`
  flex: 1 1 0;
`;

function CurrentLocations({ locations }) {
  const hasLocations = locations.length > 0;

  return (
    <>
      {!hasLocations && <Heading as="h5">No locations added yet.</Heading>}
      {hasLocations && (
        <Row $gap="var(--gap-lg)">
          {locations.map((location) => (
            <Row
              key={location.id}
              $gap="var(--gap-md)"
              $direction="horizontal"
              $align="flex-start"
            >
              <Heading as="h5" $color="var(--color-red-300)">
                {location.id}
              </Heading>
              <Heading as="h6" $color="var(--color-red-400)">
                {location.locationName}
              </Heading>
              <StyledRow
                $align="flex-end"
                $direction="horizontal"
                $gap="var(--gap-md)"
              >
                <Button $variation="secondary" $size="small">
                  Edit
                </Button>
                <Button $variation="primary" $size="small">
                  Delete
                </Button>
              </StyledRow>
            </Row>
          ))}
        </Row>
      )}
    </>
  );
}

export default CurrentLocations;
