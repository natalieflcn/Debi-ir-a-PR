import { useState } from "react";
import Row from "../layout/Row";
import Button from "../ui/Button";
import Heading from "../typography/Heading";
import Modal from "../ui/Modal";
import LocationForm from "./LocationForm";
import styled from "styled-components";
import Bold from "../typography/Bold";

const StyledLocationBuilder = styled.div`
  justify-self: flex-start;
  flex: 1 1 0;
  gap: var(--gap-md);

  @media (max-width: 690px) {
    align-self: center;
  }
`;

function LocationBuilder({ exploration, locations, onAdd }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledLocationBuilder>
      <Row $direction="horizontal" $align="start" $gap="var(--gap-md)">
        <Button
          type="button"
          $variation="primary"
          $size="small"
          onClick={() => setIsModalOpen(true)}
        >
          Add Location
        </Button>

        <input
          type="hidden"
          name="locations"
          value={JSON.stringify(locations)}
        />

        {isModalOpen && (
          <Modal $width="50rem" onClose={() => setIsModalOpen(false)}>
            <LocationForm
              onSubmit={(formData) => {
                onAdd(formData);
                setIsModalOpen(false);
              }}
              exploration={exploration}
            />
          </Modal>
        )}
      </Row>
    </StyledLocationBuilder>
  );
}

export default LocationBuilder;
