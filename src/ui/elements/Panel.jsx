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
    text-shadow: 2px 2px 1px var(--panel-box-color);
    transition: all 0.4s;
  }

  &:hover h2 {
    color: var(--panel-heading-highlight);
    text-shadow: 1px 2px 1px var(--panel-shadow-highlight);
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
  bottom: 0.5rem;
  background-color: ${({ $isOpen }) =>
    $isOpen ? `var(--color-blue-200)` : `var(--color-red-200)`};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ $isOpen }) =>
      $isOpen ? `var(--color-blue-100)` : `var(--color-red-100)`};
  }

  @media (max-width: 798px) {
    align-self: flex-start;
    justify-self: flex-end;
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

const StyledBold = styled.span`
  font-weight: 500;
  color: var(--color-red-200);
`;

const StyledParagraph = styled.p`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
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
      <StyledContent>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            span: ({ node, ...props }) => <StyledBold {...props} />,
            p: ({ node, ...props }) => <StyledParagraph {...props} />,
          }}
        >
          {isOpen ? children : ""}
        </ReactMarkdown>
      </StyledContent>
    </StyledPanel>
  );
}

export default Panel;
