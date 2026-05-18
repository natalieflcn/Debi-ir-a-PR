import styled, { css } from "styled-components";
import Heading from "../typography/Heading";
import Button from "../ui/Button";
import { BiMinus, BiPlus } from "react-icons/bi";

export const StyledPanel = styled.div`
  box-sizing: border-box;
  width: 99%;
  max-width: 51rem;
  padding: 1.75rem;
  border-radius: var(--border-radius-lg);
  transition: all 0.3s ease-in;

  /* background: ${({ $theme }) => $theme.panelBackground};
  background-repeat: ${({ $isOpen }) => $isOpen && `round`}; 

   background-size: auto; 
  background-repeat: repeat;  */

  background: ${({ $theme }) => $theme.panelBackground};
  background-size: auto;
  background-repeat: repeat;
  /* background-position: center; */
  background-position: ${({ $index }) =>
    $index % 2 === 0 ? " bottom" : "top"};

  color: ${({ $theme }) => $theme.panelTextColor};
  box-shadow: var(--box-shadow-offset-lg)
    ${({ $theme }) => $theme.panelBoxShadow};

  &:hover {
    box-shadow: var(--box-shadow-offset-md)
      ${({ $theme }) => $theme.panelBoxHoverShadow};
  }

  &:hover h2 {
    color: ${({ $theme }) => $theme.panelHeadingHoverColor};
    text-shadow: ${({ $theme }) =>
      `var(--text-shadow-offset-md) ${$theme.panelHeadingHoverShadow}`};
  }
`;

export const StyledHeading = styled(Heading)`
  scroll-margin-top: 10.3rem;
  padding: 0 0.5rem 0 0.5rem;
  font-size: var(--font-size-xl);
  text-transform: uppercase;
  margin-bottom: ${({ $isOpen }) => $isOpen && `0.5rem`};
  color: ${({ $isOpen, $theme }) =>
    $isOpen ? $theme.panelHeadingHoverColor : $theme.panelHeadingColor};
  text-shadow: var(--text-shadow-offset-sm)
    ${({ $isOpen, $theme }) =>
      $isOpen ? $theme.panelHeadingHoverShadow : $theme.panelHeadingShadow};
  transition: all 0.4s;

  @media (max-width: 800px) {
    font-size: var(--font-size-lg);
  }
`;

export const StyledButton = styled(Button)`
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
  opacity: 90%;
  color: var(--color-light-0);
`;

export const OpenPanel = styled(BiPlus)`
  ${TogglePanel}
`;

export const ClosePanel = styled(BiMinus)`
  ${TogglePanel}
`;

export const StyledContent = styled.div`
  /* overflow: hidden; */
  max-width: inherit;
  max-height: 0;
  line-height: var(--line-height-md);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  overflow: hidden;
  transition:
    max-height 0.4s ease-out,
    opacity 0.3s ease-out;
`;

export const StyledContentInner = styled.div`
  padding: 0.5rem;
  overflow: visible;
`;
