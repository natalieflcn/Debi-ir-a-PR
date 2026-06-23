import styled from "styled-components";
import Row from "../layout/Row";
import Heading from "../typography/Heading";
import Button from "../ui/Button";
import RouterLink from "../routing/RouterLink";
import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import LocationForm from "./LocationForm";

const StyledRow = styled(Row)`
  flex: 1 1 0;
`;

function CurrentLocations({ locations, exploration }) {
  const [editingLocation, setEditingLocation] = useState(null);
  const [deletingLocation, setDeletingLocation] = useState(null);

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
                $gap="var(--gap-lg)"
              >
                <Button
                  $variation="secondary"
                  $size="small"
                  onClick={(e) => {
                    e.preventDefault();
                    setEditingLocation(location);
                  }}
                >
                  Edit
                </Button>

                <RouterLink>
                  <Button
                    $variation="primary"
                    $size="small"
                    onClick={(e) => {
                      e.preventDefault();
                      setDeletingLocation(location);
                    }}
                  >
                    Delete
                  </Button>
                </RouterLink>
              </StyledRow>
            </Row>
          ))}
        </Row>
      )}
      {editingLocation && (
        <Modal $width="60%" onClose={() => setEditingLocation(null)}>
          <LocationForm exploration={exploration} />
        </Modal>
      )}

      {deletingLocation && (
        <Modal onClose={() => setDeletingLocation(null)}>
          <Row $align="center">
            <Heading as="h6">
              Are you sure you want to delete this location from{" "}
              {exploration.explorationName}?
            </Heading>
            <p>This action is irreversible.</p>
            <Row $direction="horizontal" $gap="var(--gap-lg)">
              <Button
                $size="small"
                $variation="secondary"
                onClick={() => setDeletingLocation(null)}
              >
                Cancel
              </Button>
              <Button $size="small" $variation="primary">
                Delete Location
              </Button>
            </Row>
          </Row>
        </Modal>
      )}
    </>
  );
}

export default CurrentLocations;
