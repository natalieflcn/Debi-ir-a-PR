import styled, { css } from "styled-components";
import { BiX } from "react-icons/bi";
import { createPortal } from "react-dom";
import { useRef } from "react";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-light-0);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  min-width: 30rem;
  color: var(--color-dark-200);
  max-height: 80vh;
  overflow-y: auto;
  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
    `}
  max-width: 60%;

  @media (max-width: 600px) {
    min-width: 10rem;
    text-align: center;
  }
`;

const ModalButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  color: inherit;
  align-self: flex-end;
`;

function Modal({ $width, children, onClose }) {
  const pressStartedOnOverlay = useRef(false);

  return createPortal(
    <ModalOverlay
      onMouseDown={(e) => {
        pressStartedOnOverlay.current = e.target === e.currentTarget;
      }}
      onClick={(e) => {
        if (pressStartedOnOverlay.current && e.target === e.currentTarget) {
          onClose();
        }
        pressStartedOnOverlay.current = false;
      }}
    >
      <ModalContent
        $width={$width}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalButton>
          <BiX onClick={onClose} fill="var(--color-dark-100)" size={30} />
        </ModalButton>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.body,
  );
}

export default Modal;
