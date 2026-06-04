import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Dropdown from "./Dropdown";

const StyledSortDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

function SortDropdown({ categories }) {
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



  return (
    <Dropdown
      categories={categories}
      dropdownName="Sort"
      $dropdownVariation="blue"
      $width="20rem"
    ></Dropdown>
  );
}

export default SortDropdown;
