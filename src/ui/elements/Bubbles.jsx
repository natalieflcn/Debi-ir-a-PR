import styled from "styled-components";

const StyledBubble = styled.span`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0 4px;
  border-radius: 50%;
  background: var(--color-light-0);
  box-shadow: 0 0 0 10px rgba(235, 222, 222, 0.5), 0 0 50px var(--color-light-0),
    0 0 100px var(--color-light-0);
  animation: glow 4s ease-in-out infinite;

  &:nth-child(even) {
    animation: glowEven 4s ease-in-out infinite;
  }
`;

function Bubbles() {
  return (
    <>
      <StyledBubble style={{ "--i": 21 }}></StyledBubble>
      <StyledBubble></StyledBubble>
      <StyledBubble></StyledBubble>
      <StyledBubble></StyledBubble>
      <StyledBubble></StyledBubble>
      <StyledBubble></StyledBubble>
      <StyledBubble></StyledBubble>
      <StyledBubble></StyledBubble>
      <StyledBubble></StyledBubble>
      <StyledBubble></StyledBubble>
      <StyledBubble></StyledBubble>
      <StyledBubble></StyledBubble>
    </>
  );
}

export default Bubbles;
