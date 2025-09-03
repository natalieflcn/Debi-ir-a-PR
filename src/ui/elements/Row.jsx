import styled, { css } from "styled-components";

const variants = {
  horizontal: css`
    justify-content: space-between;
    align-items: center;
  `,
  vertical: css`
    flex-direction: column;
    gap: 1.5rem;
  `,
};
const Row = styled.div`
  display: flex;
  ${({ direction }) => variants[direction || "vertical"]}
`;

export default Row;
