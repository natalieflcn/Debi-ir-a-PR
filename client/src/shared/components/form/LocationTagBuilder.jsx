import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Row from "../layout/Row";
import styled from "styled-components";
import {
  ExplorationLocationTag,
  TagCollection,
} from "../../../features/locations/components/explorationLocationCard.styles";
import { IoIosCheckbox } from "react-icons/io";
import Heading from "../typography/Heading";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Bold from "../typography/Bold";

const TagCategories = [
  { id: "art", name: "Art" },
  { id: "attraction", name: "Attraction" },
  { id: "bakery", name: "Bakery" },
  { id: "bachata", name: "Bachata" },
  { id: "bar", name: "Bar" },
  { id: "beach", name: "Beach" },
  { id: "billiards", name: "Billiards" },
  { id: "boutique", name: "Boutique" },
  { id: "cafe", name: "Cafe" },
  { id: "castle", name: "Castle" },
  { id: "cave", name: "Cave" },
  { id: "church", name: "Church" },
  { id: "club", name: "Club" },
  { id: "concert", name: "Concert" },
  { id: "dancing", name: "Dancing" },
  { id: "excursion", name: "Excursion" },
  { id: "food-truck", name: "Food Truck" },
  { id: "forest", name: "Forest" },
  { id: "gallery", name: "Gallery" },
  { id: "hiking", name: "Hiking" },
  { id: "historical-site", name: "Historical Site" },
  { id: "landmark", name: "Landmark" },
  { id: "landscape", name: "Landscape" },
  { id: "market", name: "Market" },
  { id: "monument", name: "Monument" },
  { id: "mountain", name: "Mountain" },
  { id: "museum", name: "Museum" },
  { id: "park", name: "Park" },
  { id: "plaza", name: "Plaza" },
  { id: "reggaeton", name: "Reggaeton" },
  { id: "restaurant", name: "Restaurant" },
  { id: "river", name: "River" },
  { id: "salsa", name: "Salsa" },
  { id: "shopping", name: "Shopping" },
  { id: "sports", name: "Sports" },
  { id: "trail", name: "Trail" },
  { id: "waterfall", name: "Waterfall" },
  { id: "theater", name: "Theater" },
];

const StyledRow = styled(Row)`
  flex: 1 1 0;
`;

const StyledIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  justify-content: center;
`;

function LocationTagBuilder({ value, onChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedTags, setSelectedTags] = useState(value);

  function toggleTag(tagId) {
    const updated = value.includes(tagId)
      ? value.filter((id) => id !== tagId)
      : [...value, tagId];
    onChange(updated);
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

        <TagCollection>
          {value.map((tagId) => {
            const tag = TagCategories.find((c, i) => c.id === tagId);

            if (!tag) return null;

            return (
              <ExplorationLocationTag key={tagId}>
                {tag?.name}
              </ExplorationLocationTag>
            );
          })}

          {value.length === 0 && (
            <Bold $color="var(--color-red-300)">No tags selected yet.</Bold>
          )}
        </TagCollection>
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
                  {value.includes(category.id) ? (
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
