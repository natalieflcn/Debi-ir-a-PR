import {
  ClosePanel,
  OpenPanel,
  StyledButton,
  StyledContent,
  StyledContentInner,
  StyledHeading,
  StyledPanel,
} from "./panel.styles";
import { forwardRef, useEffect, useRef } from "react";
import Row from "./Row";

function playPanelButtonAudio(buttonAudio) {
  if (!buttonAudio) return;
  new Audio(buttonAudio).play();
}

const Panel = forwardRef(function Panel(
  { heading, onClick, isOpen, theme, children, index },
  ref,
) {
  const contentRef = useRef();
  const headingRef = useRef();

  // Adds height to the panels based on their content and plays audio gimmick when panel opens
  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      contentRef.current.style.maxHeight =
        contentRef.current.scrollHeight + "px";

      if (theme.buttonAudio) playPanelButtonAudio(theme.buttonAudio);
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen, theme.buttonAudio]);

  // Scrolls to the top of the panel when content unwinds
  useEffect(() => {
    if (!isOpen || !headingRef.current) return;

    // small delay lets the previous panel close first if one was open
    const timeout = setTimeout(() => {
      headingRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 400);

    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <StyledPanel ref={ref} $index={index} $theme={theme}>
      <Row $direction="horizontal">
        <StyledHeading as="h2" $isOpen={isOpen} $theme={theme} ref={headingRef}>
          {heading}
        </StyledHeading>
        <StyledButton
          onClick={onClick}
          $isOpen={isOpen}
          $size="square"
          $variation={
            isOpen
              ? theme.panelActiveButtonVariation
              : theme.panelButtonVariation
          }
        >
          {isOpen ? <ClosePanel /> : <OpenPanel />}
        </StyledButton>
      </Row>
      <StyledContent $isOpen={isOpen} ref={contentRef}>
        <StyledContentInner>{children}</StyledContentInner>
      </StyledContent>
    </StyledPanel>
  );
});

export default Panel;
