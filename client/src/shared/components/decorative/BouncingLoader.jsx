import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% { 
    transform: translateY(0); 
  }
  40% { 
    transform: translateY(-8px); 
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  align-self: flex-end;

  @media (max-width: 500px) {
    display: none;
  }
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: var(--color-dark-100);
  border-radius: 50%;
  animation: ${bounce} 1.2s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

export default function BouncingLoader() {
  return (
    <LoaderContainer>
      <Dot />
      <Dot />
      <Dot />
    </LoaderContainer>
  );
}
