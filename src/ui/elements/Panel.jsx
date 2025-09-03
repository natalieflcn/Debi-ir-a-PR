import styled, { css } from "styled-components";
import Heading from "./Heading";
import { BiPlus } from "react-icons/bi";
import Row from "./Row";
import Button from "./Button";

const StyledPanel = styled.div`
  ${({ heading }) =>
    heading === "h3" &&
    css`
      box-sizing: border-box;
      width: 100%;
      padding: 2rem;
      border-radius: var(--border-radius-md);
      background-color: var(--panel-bg-color);
      color: var(--panel-color);

      h2 {
        color: var(--panel-heading-color);
        text-shadow: 1px 2px 1px var(--color-red-100);
      }
    `}
`;

const StyledButton = styled(Button)`
  position: relative;
  bottom: 0.5rem;
  background-color: var(--color-red-200);
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
