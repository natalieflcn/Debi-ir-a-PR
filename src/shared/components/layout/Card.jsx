import styled, { css } from "styled-components";

const variants = {
  horizontal: css`
    justify-content: space-between;
    align-items: center;
    gap: ${({ $gap }) => $gap || 0};
  `,
  vertical: css`
    flex-direction: column;
    gap: ${({ $gap }) => $gap || `1rem`};
  `,
};

const Card = styled.div`
  display: flex;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 0px 5px inset var(--color-yellow-400);
  gap: ${({ $gap }) => $gap};
  ${({ $direction }) => variants[$direction || "vertical"]};
  ${({ $css }) => $css}
`;

export default Card;
