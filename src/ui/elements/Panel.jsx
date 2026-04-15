import styled, { css } from "styled-components";
import Heading from "./Heading";
import { BiMinus, BiPlus } from "react-icons/bi";
import Row from "./Row";
import Button from "./Button";
import { forwardRef, useEffect, useRef } from "react";

const StyledPanel = styled.div`
  box-sizing: border-box;
  width: 99%;
  max-width: 51rem;
  padding: 2rem;
  scroll-margin-top: 9.4rem;
  border-radius: var(--border-radius-lg);
  /* background-color: ${({ $colors }) => $colors["--panel-bg-color"]}; */
  color: ${({ $colors }) => $colors["--panel-text-color"]};
  box-shadow: 2px 3px 1px ${({ $colors }) => $colors["--panel-box-shadow"]};
  background-repeat: ${({ $isOpen }) => $isOpen && `round`};
  background-image: url("public/images/CreamOverlay.png");
  transition:
    background-color,
    color,
    box-shadow 0.3s;

  &:hover {
    /* background-color: ${({ $colors }) => $colors["--panel-bg-highlight"]}; */
    box-shadow: 2px 2px 1px
      ${({ $colors }) => $colors["--panel-heading-hover-shadow"]};
  }

  &:hover h2 {
    color: ${({ $colors }) => $colors["--panel-heading-hover-color"]};
    text-shadow: ${({ $colors }) =>
      `2px 2px 1px ${$colors["--panel-heading-hover-shadow"]}`};
  }

  @media (max-width: 798px) {
    width: 99%;
    padding: 1.5rem;
  }
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  color: ${({ $colors }) => $colors["--panel-heading-color"]};
  text-shadow: 2px 1px 1px ${({ $colors }) => $colors["--panel-heading-shadow"]};
  transition: all 0.4s;
  margin-bottom: ${({ $isOpen }) => $isOpen && `1rem`};
`;

const StyledButton = styled(Button)`
  position: relative;
  align-self: flex-start;

  @media (max-width: 798px) {
    justify-self: flex-end;
    bottom: 0;
  }
`;

const TogglePanel = css`
  position: relative;
  bottom: 0.35rem;
  right: 0.35rem;
  width: 1.7rem;
  height: 1.7rem;
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
  /* margin-top: 1rem; */
  max-width: inherit;
  line-height: 1.5rem;

  /* max-height: ${({ $isOpen }) => ($isOpen ? "100%" : "0px")}; */
  overflow: hidden;
  /* transition:
    max-height ${({ $isOpen }) => ($isOpen ? "0.1s ease-out" : "0.3s ease")},
    opacity ${({ $isOpen }) => ($isOpen ? "0.3s ease-out" : "0.4s ease")}; */

  max-height: 0;
  transition:
    max-height 0.4s ease-out,
    opacity 0.3s ease-out;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  line-height: 1.5rem;
`;

const Panel = forwardRef(function Panel(
  { heading, onClick, isOpen, colors, children },
  ref,
) {
  const contentRef = useRef();

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      contentRef.current.style.maxHeight =
        contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <StyledPanel ref={ref} $colors={colors}>
      <Row $direction="horizontal">
        <StyledHeading as="h2" $isOpen={isOpen} $colors={colors}>
          {heading}
        </StyledHeading>
        <StyledButton
          onClick={onClick}
          $isOpen={isOpen}
          $size="small"
          $variation={isOpen ? "secondary" : "primary"}
        >
          {isOpen ? <ClosePanel /> : <OpenPanel />}
        </StyledButton>
      </Row>
      <StyledContent $isOpen={isOpen} ref={contentRef}>
        {children}
      </StyledContent>
    </StyledPanel>
  );
});

export default Panel;
