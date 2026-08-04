import { useState } from "react";
import Row from "../layout/Row";
import Button from "../ui/Button";
import Heading from "../typography/Heading";
import Modal from "../ui/Modal";
import LocationForm from "./LocationForm";
import styled from "styled-components";
import BadgeForm from "./BadgeForm";

const StyledBadgeBuilder = styled.div`
  justify-self: flex-start;
  flex: 1 1 0;
  gap: var(--gap-md);
`;

function BadgeBuilder() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("badgebuilder running");
  return (
    <StyledBadgeBuilder>
      <Button
        type="button"
        $variation="primary"
        $size="small"
        onClick={() => setIsModalOpen(true)}
      >
        Create Badge
      </Button>

      {isModalOpen && (
        <Modal $width="50rem" onClose={() => setIsModalOpen(false)}>
          <BadgeForm
            onSubmit={() => {
              setIsModalOpen(false);
            }}
          />
        </Modal>
      )}
    </StyledBadgeBuilder>
  );
}

export default BadgeBuilder;
