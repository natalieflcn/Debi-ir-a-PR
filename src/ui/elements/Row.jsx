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
const Row = styled.div`
  display: flex;
  gap: ${({ $gap }) => $gap};
  ${({ $direction }) => variants[$direction || "vertical"]};
`;

export default Row;
