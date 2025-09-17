import styled from "styled-components";

const StyledBubble = styled.span`
  display: inline-block;
  position: absolute;
  width: 2px;
  height: 2px;
  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
  animation-delay: ${({ delay }) => delay};
  margin: 0 4px;
  border-radius: 50%;
  background: var(--color-light-0);
  box-shadow: 0 0 0 1px rgba(235, 222, 222, 0.4), 0 0 3px var(--color-light-0),
    0 0 5px var(--color-light-0);
  animation: glow 4s ease-in-out infinite;

  &:nth-child(even) {
    width: 1px;
    height: 1px;
    animation: glowEven 4s ease-in-out infinite;
  }
`;

function bubblePosition(seed) {
  return (Math.sin(seed) * 10250) % 1;
}

function Bubbles() {
  return (
    <>
      {Array.from({ length: 150 }).map((_, i) => {
        const left = bubblePosition(i) * 100;
        const top = bubblePosition(i + 50) * 100;
        const delay = Math.random() * 5;
        return (
          <StyledBubble
            key={i}
            $left={`${left}%`}
            $top={`${top}%`}
            $delay={`${delay}s`}
          />
        );
      })}

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
