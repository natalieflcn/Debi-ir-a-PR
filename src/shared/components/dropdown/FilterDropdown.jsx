import { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import Dropdown from "./Dropdown";

function FilterDropdown({ categories, initState, onFilter }) {
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
      onSelect={(category) => onFilter(category.id)}
    />
  );
}

export default FilterDropdown;
