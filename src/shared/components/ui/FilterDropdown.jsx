import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Dropdown from "./Dropdown";

function FilterDropdown({ categories, initState }) {
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
      dropdownName="Filter"
      $dropdownVariation="red"
      initState={initState}
    ></Dropdown>
  );
}

export default FilterDropdown;
