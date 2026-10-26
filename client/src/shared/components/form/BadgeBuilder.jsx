import { useState } from "react";
import Row from "../layout/Row";
import Button from "../ui/Button";
import Heading from "../typography/Heading";
import Modal from "../modal/Modal";
import styled from "styled-components";
import BadgeForm from "./BadgeForm";
import Image from "../ui/Image";
import { useMemo } from "react";
import { useEffect } from "react";

const StyledBadgeBuilder = styled.div`
  align-self: flex-start;
  flex: 1 1 0;
  gap: var(--gap-md);

  @media (max-width: 690px) {
    align-self: center;
  }
`;

const StyledRow = styled(Row)`
  flex-direction: column;

  @media (max-width: 690px) {
    align-items: center;
  }
`;

function BadgeBuilder({ value, onSelect }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const img = Array.isArray(value?.image) ? value.image[0] : value?.image;

  const previewUrl = useMemo(() => {
    if (!img) return null;
    if (img instanceof File) return URL.createObjectURL(img);
    return typeof img === "string" ? img : img.url;
  }, [img]);

  useEffect(() => {
    return () => {
      if (previewUrl?.startsWith("blob:")) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);
  console.log(value);
  return (
    <StyledBadgeBuilder>
      <StyledRow $direction="horizontal" $gap="var(--gap-md)" $align="start">
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
            src={previewUrl}
            $width="6rem"
            $height="6rem"
            $objectFit="cover"
          />
        )}

        {value && (
          <Button
            type="button"
            $variation="primary"
            $size="extraSmall"
            onClick={() => onSelect(null)}
          >
            Delete
          </Button>
        )}
      </StyledRow>
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
