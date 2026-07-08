import { useState } from "react";
import Row from "../layout/Row";
import Button from "../ui/Button";
import Heading from "../typography/Heading";
import Modal from "../ui/Modal";
import LocationForm from "./LocationForm";
import styled from "styled-components";

const StyledLocationBuilder = styled.div`
  justify-self: flex-start;
  flex: 1 1 0;
  gap: var(--gap-md);
`;

function LocationBuilder({ locations, onAdd }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      {isModalOpen && (
        <Modal $width="50rem" onClose={() => setIsModalOpen(false)}>
          <LocationForm
            onSubmit={(formData) => {
              onAdd(formData);

              setIsModalOpen(false);
            }}
          />
        </Modal>
      )}
    </StyledLocationBuilder>
  );
}

export default LocationBuilder;
