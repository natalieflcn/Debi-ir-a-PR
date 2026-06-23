import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Row from "../layout/Row";
import styled from "styled-components";
import {
  ExplorationLocationTag,
  ExplorationLocationTags,
} from "../explorations/explorationLocationCard.styles";
import { IoIosCheckbox } from "react-icons/io";
import Heading from "../typography/Heading";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Bold from "../typography/Bold";

const TagCategories = [
  { id: "restaurant", name: "Restaurant" },
  { id: "bar", name: "Bar" },
  { id: "club", name: "Club" },
  { id: "activity", name: "Activity" },
  { id: "landmark", name: "Landmark" },
  { id: "landscape", name: "Landscape" },
  { id: "beach", name: "Beach" },
  { id: "other", name: "Other" },
];

const StyledRow = styled(Row)`
  flex: 1 1 0;
`;

const StyledIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  justify-content: center;
`;

function LocationTagBuilder({ existingTags = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState(existingTags);

  function toggleTag(tagId) {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId],
    );
  }
  return (
    <>
      <StyledRow>
        <Button
          $size="small"
          $variation="primary"
          onClick={() => setIsModalOpen(true)}
        >
          Select Tags
        </Button>

        <ExplorationLocationTags>
          {selectedTags.map((tagId) => {
            const tag = TagCategories.find((c) => c.id === tagId);

            if (!tag) return null;

            return (
              <ExplorationLocationTag key={tagId}>
                {tag?.name}
              </ExplorationLocationTag>
            );
          })}
        </ExplorationLocationTags>
      </StyledRow>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Row $gap="var(--gap-md)">
            {TagCategories.map((category) => (
              <Row
                $direction="horizontal"
                $gap="var(--gap-md)"
                $align="flex-start"
              >
                <StyledIcon onClick={() => toggleTag(category.id)}>
                  {selectedTags.includes(category.id) ? (
                    <IoIosCheckbox size={25} />
                  ) : (
                    <MdCheckBoxOutlineBlank size={25} />
                  )}
                </StyledIcon>
                <Heading as="h6"> {category.name}</Heading>
              </Row>
            ))}
          </Row>
        </Modal>
      )}
    </>
  );
}

export default LocationTagBuilder;
