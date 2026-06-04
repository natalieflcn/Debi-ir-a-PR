import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledFilterDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const FilterButtonSpan = styled.span`
  color: var(--color-brown-400);
`;

const FilterDropdownMenuCard = styled.ul`
  position: absolute;
  top: 85%;
  left: 0;
  margin: 4px 0 0 0;
  background-color: var(--color-light-0);
  border-radius: 1px 0px var(--border-radius-md) var(--border-radius-md);
  border-right: 2px solid var(--color-red-300);
  list-style: none;
  border-top: 2px solid var(--color-red-300);
  list-style: none;
  box-shadow: 0px 4px 6px var(--color-dark-200);
  z-index: 10;
  width: 100%;
`;

const FilterDropdownMenuItem = styled.button`
  width: 100%;
  padding: 1rem;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ active }) =>
    active ? "var(--color-red-200)" : "var(--color-red-400)"};
  font-weight: var(--font-weight-bold);
  transition: background-color ease-in 0.1s;
  font-family: Museo;
  text-transform: uppercase;

  &:hover {
    background-color: var(--color-light-200);
  }
`;

function FilterDropdown({ categories }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  //   const filteredItems = data.filter((item) => {
  //     if (selectedCategory === "All") return true;

  //     return item.category === selectedCategory;
  //   });

  console.log(selectedCategory);

  return (
    <StyledFilterDropdown>
      <Button $size="small" $variation="primary" onClick={toggleDropdown}>
        Filter: <FilterButtonSpan>{selectedCategory}</FilterButtonSpan>
      </Button>

      {isOpen && (
        <FilterDropdownMenuCard>
          {categories.map((category) => (
            <li>
              <FilterDropdownMenuItem
                key={category.id}
                onClick={() => handleSelectCategory(category.name)}
                active={category.name === selectedCategory}
              >
                {category.name}
              </FilterDropdownMenuItem>
            </li>
          ))}
        </FilterDropdownMenuCard>
      )}
    </StyledFilterDropdown>
  );
}

export default FilterDropdown;
