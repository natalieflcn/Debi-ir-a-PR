import { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import Dropdown from "./Dropdown";

function FilterDropdown({ categories, initState, onFilter }) {
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
