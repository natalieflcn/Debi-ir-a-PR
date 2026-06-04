import { IoMdGrid } from "react-icons/io";
import { IoListOutline } from "react-icons/io5";
import Row from "../layout/Row";
import Button from "./Button";
import styled from "styled-components";
import { useState } from "react";

const StyledButton = styled(Button)`
  width: 3.5rem;
  height: 3.5rem;
  padding-bottom: 0.1rem;

  background-color: ${({ $active }) =>
    $active ? "var(--color-yellow-0)" : "var(--color-light-100)"};
  color: ${({ $active }) =>
    $active ? "var(--color-brown-300)" : "var(--color-brown-200)"};
  box-shadow: ${({ $active }) =>
    $active
      ? "var(--box-shadow-inset-md) var(--color-brown-400)"
      : "var(--box-shadow-offset-md) var(--color-dark-200)"};
`;

function AdminViewMode({ viewMode, onViewModeChange }) {
  return (
    <Row $direction="horizontal" $gap="var(--gap-lg)">
      <StyledButton
        $size="square"
        $variation="light"
        onClick={() => onViewModeChange("grid")}
        $active={viewMode === "grid"}
      >
        <IoMdGrid size={25} />
      </StyledButton>

      <StyledButton
        $size="square"
        $variation="light"
        onClick={() => onViewModeChange("list")}
        $active={viewMode === "list"}
      >
        <IoListOutline size={25} />
      </StyledButton>
    </Row>
  );
}

export default AdminViewMode;
