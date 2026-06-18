import { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import Dropdown from "./Dropdown";

const StyledSortDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

function SortDropdown({ categories }) {
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
