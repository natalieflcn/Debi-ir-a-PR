import { useState } from "react";
import Row from "../layout/Row";
import Button from "../ui/Button";
import Heading from "../typography/Heading";
import Modal from "../ui/Modal";
import LocationForm from "./LocationForm";
import styled from "styled-components";
import fakeExplorationLocationData from "../../../features/explorer/pages/explorations/fakeExplorationLocationData";
const emptyLocation = {
  name: "",
  address: "",
  description: "",
};

const StyledLocationBuilder = styled.div`
  justify-self: flex-start;
  flex: 1 1 0;
  gap: var(--gap-md);
`;

function LocationBuilder({ existingLocations = [] }) {
  const [locations, setLocations] = useState(existingLocations);
  //   const [draft, setDraft] = useState(emptyLocation);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddLocation() {
    setLocations((prev) => [
      ...prev,
      { ...locations, id: crypto.randomUUID() },
    ]);
    setIsModalOpen(false);
  }

  function handleDeleteLocation(id) {
    setLocations((prev) => prev.filter((location) => location.id !== id));
  }

  return (
    <StyledLocationBuilder>
      <Button
        type="button"
        $variation="primary"
        $size="small"
        onClick={() => setIsModalOpen(true)}
      >
        Add Location
      </Button>

      <input type="hidden" name="locations" value={JSON.stringify(locations)} />

      {locations.map((location) => (
        <Row
          key={location.id}
          $direction="horizontal"
          $gap="var(--gap-md)"
          $align="center"
        >
          <Heading as="h5">{location.name}</Heading>
          <p>{location.address}</p>
          <Button
            type="button"
            $variation="darkRed"
            $size="extraSmall"
            onClick={() => handleDeleteLocation(location.id)}
          >
            Delete
          </Button>
        </Row>
      ))}

      {isModalOpen && (
        <Modal $width="50rem" onClose={() => setIsModalOpen(false)}>
          <LocationForm onSubmit={handleAddLocation} />
        </Modal>
      )}
    </StyledLocationBuilder>
  );
}

export default LocationBuilder;
