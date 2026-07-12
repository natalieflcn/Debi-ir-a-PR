import { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import useClickOutside from "../../hooks/useClickOutside";

export const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const ButtonSpan = styled.span`
  color: ${({ $dropdownVariation }) =>
    `var(--color-${$dropdownVariation}-300)`};
`;

export const DropdownMenuCard = styled.ul`
  position: absolute;
  top: 85%;
  left: 0;
  margin: 4px 0 0 0;
  max-height: 16rem;
  overflow-y: auto;
  background-color: var(--color-light-0);
  border-radius: 1px 0px var(--border-radius-md) var(--border-radius-md);
  border-right: ${({ $dropdownVariation }) =>
    `2px solid var(--color-${$dropdownVariation}-300)`};
  list-style: none;
  border-top: ${({ $dropdownVariation }) =>
    `2px solid var(--color-${$dropdownVariation}-300)`};

  list-style: none;
  box-shadow: 0px 4px 6px var(--color-dark-200);
  z-index: 10;
  width: 100%;
`;

export const DropdownMenuItem = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: var(--color-light-0);
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ $active, $dropdownVariation }) =>
    $active
      ? `var(--color-${$dropdownVariation}-200)`
      : `var(--color-dark-200)`};
  font-weight: var(--font-weight-bold);
  transition: background-color ease-in 0.1s;
  font-family: Museo;
  text-transform: uppercase;

  &:hover {
    background-color: var(--color-light-200);
  }
`;

function Dropdown({
  categories,
  dropdownName,
  $dropdownVariation,
  $width,
  className,
  initState = "All",
  onSelect,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(initState);
  const dropdownRef = useClickOutside(() => setIsOpen(false));

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category.name);
    setIsOpen(false);
    onSelect?.(category);
  };

  //   const filteredItems = data.filter((item) => {
  //     if (selectedCategory === "All") return true;

  //     return item.category === selectedCategory;
  //   });

  return (
    <StyledDropdown
      className={className}
      $width={$width}
      ref={dropdownRef}
      {...props}
    >
      <Button
        $size="small"
        $variation={$dropdownVariation === "red" ? "primary" : "secondary"}
        onClick={toggleDropdown}
      >
        {dropdownName}:{" "}
        <ButtonSpan $dropdownVariation={$dropdownVariation}>
          {selectedCategory}
        </ButtonSpan>
      </Button>

      {isOpen && (
        <DropdownMenuCard $dropdownVariation={$dropdownVariation}>
          {categories.map((category) => (
            <li key={category.id}>
              <DropdownMenuItem
                onClick={() => handleSelectCategory(category)}
                $active={category.name === selectedCategory}
                $dropdownVariation={$dropdownVariation}
              >
                {category.name}
              </DropdownMenuItem>
            </li>
          ))}
        </DropdownMenuCard>
      )}
    </StyledDropdown>
  );
}

export default Dropdown;
