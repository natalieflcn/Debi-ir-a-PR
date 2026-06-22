import { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import Dropdown from "./Dropdown";

const StyledSortDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

function SortDropdown({ categories, onSort, initState }) {
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
      onSelect={(category) => onSort(category.id)}
      initState={initState}
    ></Dropdown>
  );
}

export default SortDropdown;
