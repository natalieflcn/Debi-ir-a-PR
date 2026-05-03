import styled, { css } from "styled-components";

const variants = {
  insetSM: css`
    box-shadow: var(--box-shadow-inset-sm)
      ${({ $shadowColor }) => $shadowColor || "var(--color-yellow-400)"};
  `,
  insetMD: css`
    box-shadow: var(--box-shadow-inset-md)
      ${({ $shadowColor }) => $shadowColor || "var(--color-yellow-400)"};
  `,
  insetLG: css`
    box-shadow: var(--box-shadow-inset-lg)
      ${({ $shadowColor }) => $shadowColor || "var(--color-yellow-400)"};
  `,
  outsetSM: css`
    box-shadow: var(--box-shadow-sm)
      ${({ $shadowColor }) => $shadowColor || "var(--color-yellow-400)"};
  `,
  outsetMD: css`
    box-shadow: var(--box-shadow-md)
      ${({ $shadowColor }) => $shadowColor || "var(--color-yellow-400)"};
  `,
  outsetLG: css`
    box-shadow: var(--box-shadow-lg)
      ${({ $shadowColor }) => $shadowColor || "var(--color-yellow-400)"};
  `,
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: var(--border-radius-md);

  gap: ${({ $gap }) => $gap};
  background: ${({ $cardColor }) => $cardColor};
  ${({ $cardShadow }) => variants[$cardShadow] || variants["insetSM"]};
`;

export default Card;
