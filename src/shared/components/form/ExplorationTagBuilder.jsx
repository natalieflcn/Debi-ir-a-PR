import { useEffect, useState } from "react";
import Button from "../ui/Button";

import styled from "styled-components";
import Modal from "../ui/Modal";
import Row from "../layout/Row";
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Heading from "../typography/Heading";
import {
  ExplorationLocationTags,
  ExplorationLocationTag,
} from "../../../features/explorations/components/explorationLocationCard.styles";
const TagCategories = [
  { id: "featured", name: "Featured" },
  { id: "city", name: "City" },
  { id: "artist", name: "Artist" },
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

export const ExplorationTag = styled.span`
  padding: 0.75rem 1rem;
  margin: 0.5rem;
  display: inline;
  font-weight: var(--font-weight-boldest);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-red-300);
  color: var(--color-light-0);
  font-size: var(--font-size-xs);
`;

function ExplorationTagBuilder({ exploration, tags, onChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedTags, setSelectedTags] = useState(existingSelectedTags);

  const derivedLocationTags = [
    ...new Set(
      exploration?.locations?.flatMap((location) => location.tags ?? []) ?? [],
    ),
  ];

  function toggleTag(tagId) {
    onChange((prev) =>
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
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          Select Tags
        </Button>

        <ExplorationLocationTags>
          {tags.map((tagId) => {
            const tag = TagCategories.find((c) => c.id === tagId);

            if (!tag) return null;

            return <ExplorationTag key={tagId}>{tag?.name}</ExplorationTag>;
          })}

          {derivedLocationTags.map((tag) => {
            return (
              <ExplorationLocationTag key={tag}>
                {tag.charAt(0).toUpperCase()}
                {tag.slice(1)}
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
                key={category.id}
              >
                <StyledIcon onClick={() => toggleTag(category.id)}>
                  {tags.includes(category.id) ? (
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

export default ExplorationTagBuilder;
