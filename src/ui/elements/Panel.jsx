import styled, { css } from "styled-components";
import Heading from "./Heading";
import { BiMinus, BiPlus } from "react-icons/bi";
import Row from "./Row";
import Button from "./Button";
import { useState } from "react";

const StyledPanel = styled.div`
  box-sizing: border-box;
  width: 99%;
  padding: 2rem;
  border-radius: var(--border-radius-md);
  background-color: var(--panel-bg-color);
  color: var(--panel-color);
  box-shadow: 2px 2px 1px var(--panel-box-color);
  transition: all 0.3s;

  &:hover {
    background-color: var(--panel-bg-highlight);
    box-shadow: 2px 2px 1px var(--panel-shadow-highlight);
  }

  h2 {
    color: var(--panel-heading-color);
    text-shadow: 1px 2px 2px var(--panel-box-color);
    transition: all 0.4s;
  }

  &:hover h2 {
    color: var(--panel-heading-highlight);
    text-shadow: 1px 2px 1px var(--panel-shadow-highlight);
  }

  @media (max-width: 798px) {
    width: 97%;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: ${({ $isOpen }) => ($isOpen ? `1rem` : `0rem`)};
  text-transform: uppercase;
`;

const StyledButton = styled(Button)`
  position: relative;
  bottom: 0.5rem;
  background-color: ${({ $isOpen }) =>
    $isOpen ? `var(--color-blue-200)` : `var(--color-red-200)`};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ $isOpen }) =>
      $isOpen ? `var(--color-blue-100)` : `var(--color-red-100)`};
  }
`;

const TogglePanel = css`
  position: relative;
  bottom: 0.35rem;
  right: 0.35rem;
  width: 1.75rem;
  height: 1.75rem;
  color: var(--color-light-0);
  opacity: 90%;
`;

const OpenPanel = styled(BiPlus)`
  ${TogglePanel}
`;

const ClosePanel = styled(BiMinus)`
  ${TogglePanel}
`;

function Panel({ heading, onClick, isOpen, children }) {
  return (
    <StyledPanel>
      <Row direction="horizontal">
        <StyledHeading as="h2" $isOpen={isOpen}>
          {heading}
        </StyledHeading>
        <StyledButton onClick={onClick} $isOpen={isOpen}>
          {isOpen ? <ClosePanel /> : <OpenPanel />}
        </StyledButton>
      </Row>
      {isOpen ? children : ""}
    </StyledPanel>
  );
}

export default Panel;
