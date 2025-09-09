import styled, { css } from "styled-components";
import Heading from "./Heading";
import { BiMinus, BiPlus } from "react-icons/bi";
import Row from "./Row";
import Button from "./Button";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const StyledPanel = styled.div`
  box-sizing: border-box;
  width: 99%;
  max-width: 51rem;
  padding: 2rem;
  border-radius: var(--border-radius-md);
  background-color: ${({ $colors }) => $colors["--panel-bg-color"]};
  color: ${({ $colors }) => $colors["--panel-color"]};
  box-shadow: 2px 2px 1px ${({ $colors }) => $colors["--panel-box-shadow"]};
  transition: background-color, color, box-shadow 0.3s;

  &:hover {
    background-color: ${({ $colors }) => $colors["--panel-bg-highlight"]};
    box-shadow: 2px 2px 1px
      ${({ $colors }) => $colors["--panel-shadow-highlight"]};
  }

  h2 {
    color: ${({ $colors }) => $colors["--panel-heading-color"]};
    text-shadow: 2px 2px 1px
      ${({ $colors }) => $colors["--panel-heading-highlight"]};
    transition: all 0.4s;
  }

  &:hover h2 {
    color: ${({ $colors }) => $colors["--panel-heading-highlight"]};
    text-shadow: 1px 2px 1px
      ${({ $colors }) => $colors["--panel-shadow-highlight"]};
  }

  @media (max-width: 798px) {
    padding: 1.5rem;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: ${({ $isOpen }) => ($isOpen ? `1rem` : `0rem`)};
  text-transform: uppercase;
`;

const StyledButton = styled(Button)`
  position: relative;
  background-color: ${({ $isOpen, $colors }) =>
    $isOpen ? $colors["--btn-open"] : $colors["--btn-close"]};
  transition: background-color 0.3s;
  align-self: flex-start;

  &:hover {
    background-color: ${({ $isOpen, $colors }) =>
      $isOpen ? $colors["--btn-open-hover"] : $colors["--btn-close-hover"]};
  }

  @media (max-width: 798px) {
    justify-self: flex-end;
    bottom: 0;
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

const StyledContent = styled.div`
  max-width: inherit;
  line-height: 1.5rem;
`;

function Panel({ heading, onClick, isOpen, components, colors, children }) {
  return (
    <StyledPanel $colors={colors}>
      <Row direction="horizontal">
        <StyledHeading as="h2" $isOpen={isOpen}>
          {heading}
        </StyledHeading>
        <StyledButton onClick={onClick} $isOpen={isOpen} $colors={colors}>
          {isOpen ? <ClosePanel /> : <OpenPanel />}
        </StyledButton>
      </Row>
      <StyledContent>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
          {isOpen ? children : ""}
        </ReactMarkdown>
      </StyledContent>
    </StyledPanel>
  );
}

export default Panel;
