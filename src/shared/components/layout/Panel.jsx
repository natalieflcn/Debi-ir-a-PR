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

const Panel = forwardRef(function Panel(
  { heading, onClick, isOpen, theme, children },
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
    <StyledPanel ref={ref} $theme={theme}>
      <Row $direction="horizontal">
        <StyledHeading as="h2" $isOpen={isOpen} $theme={theme}>
          {heading}
        </StyledHeading>
        <StyledButton
          onClick={onClick}
          $isOpen={isOpen}
          $size="small"
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
