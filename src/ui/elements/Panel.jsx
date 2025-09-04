import styled from "styled-components";
import Heading from "./Heading";
import { BiPlus } from "react-icons/bi";
import Row from "./Row";
import Button from "./Button";

const StyledPanel = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 2rem;
  border-radius: var(--border-radius-md);
  background-color: var(--panel-bg-color);
  color: var(--panel-color);
  box-shadow: 2px 2px 1px var(--color-red-100);
  transition: all 0.25s;

  &:hover {
    background-color: var(--panel-bg-highlight);
    box-shadow: 2px 2px 1px var(--panel-shadow);
  }

  h2 {
    color: var(--panel-heading-color);
    text-shadow: 1px 2px 1px var(--color-red-100);
  }

  &:hover h2 {
    color: var(--panel-heading-highlight);
    text-shadow: 1px 2px 1px var(--panel-shadow-highlight);
  }
`;

const StyledButton = styled(Button)`
  position: relative;
  bottom: 0.5rem;
  background-color: var(--color-red-200);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-red-100);
  }
`;

const TogglePanel = styled(BiPlus)`
  position: relative;
  bottom: 0.35rem;
  right: 0.35rem;
  width: 1.75rem;
  height: 1.75rem;
  color: var(--color-light-0);
  opacity: 90%;
`;

function Panel({ heading, headingType }) {
  return (
    <StyledPanel heading={headingType}>
      <Row direction="horizontal">
        <Heading as="h2">{heading.toUpperCase()}</Heading>
        <StyledButton>
          <TogglePanel />
        </StyledButton>
      </Row>
      this is a panel
    </StyledPanel>
  );
}

export default Panel;
