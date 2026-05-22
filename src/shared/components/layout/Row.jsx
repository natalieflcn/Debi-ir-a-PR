import styled, { css } from "styled-components";

const variants = {
  horizontal: css`
    justify-content: ${({ $align }) => $align || "space-between"};

    gap: ${({ $gap }) => $gap || 0};
  `,
  vertical: css`
    flex-direction: column;
    gap: ${({ $gap }) => $gap || `1rem`};
    align-items: ${({ $align }) => $align || "space-between"};
  `,
};

const Row = styled.div`
  display: flex;
  gap: ${({ $gap }) => $gap};
  padding: ${({ $padding }) => $padding || 0};
  ${({ $direction }) => variants[$direction || "vertical"]};
  flex-wrap: ${({ $wrap }) => $wrap || "no-wrap"};
`;

export default Row;
