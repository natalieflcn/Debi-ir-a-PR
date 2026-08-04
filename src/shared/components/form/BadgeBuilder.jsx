import { useState } from "react";
import Row from "../layout/Row";
import Button from "../ui/Button";
import Heading from "../typography/Heading";
import Modal from "../ui/Modal";
import LocationForm from "./LocationForm";
import styled from "styled-components";
import BadgeForm from "./BadgeForm";
import Image from "../ui/Image";

const StyledBadgeBuilder = styled.div`
  justify-self: flex-start;
  flex: 1 1 0;
  gap: var(--gap-md);
`;

function BadgeBuilder({ value, onSelect }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledBadgeBuilder>
      <Row $direction="horizontal" $gap="var(--gap-md)" $align="start">
        <Button
          type="button"
          $variation={value ? "darkRed" : "primary"}
          $size="small"
          onClick={() => setIsModalOpen(true)}
        >
          {value ? value.name : "Create a Badge"}
        </Button>

        {value && (
          <Image
            src={value.image}
            $width="3.7rem"
            $height="3.7rem"
            $objectFit="cover"
          />
        )}

        {value && (
          <Button
            type="button"
            $variation="primary"
            $size="small"
            onClick={() => onSelect(null)}
          >
            Delete Badge
          </Button>
        )}
      </Row>
      {isModalOpen && (
        <Modal $width="50rem" onClose={() => setIsModalOpen(false)}>
          <BadgeForm
            onSubmit={(formData) => {
              onSelect(formData);
              setIsModalOpen(false);
            }}
            badge={value}
          />
        </Modal>
      )}
    </StyledBadgeBuilder>
  );
}

export default BadgeBuilder;
