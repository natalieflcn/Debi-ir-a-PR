import styled, { css } from "styled-components";

const sizes = {
  small: css`
    padding: 0.5rem;
    height: 2rem;
    width: 2rem;
    border-radius: ${({ $borderRadius }) =>
      $borderRadius || "var(--border-radius-sm)"};
    --shadow-offset: var(--box-shadow-offset-sm);
  `,
  medium: css`
    justify-content: center;
    flex-grow: 1;
    padding: 0.8rem 1rem;
    font-weight: 700;
    border-radius: ${({ $borderRadius }) =>
      $borderRadius || "var(--border-radius-md)"};
    --shadow-offset: var(--box-shadow-offset-md);
  `,
  large: css`
    justify-content: center;
    flex-grow: 1;
    padding: 1.5rem 2rem;
    font-weight: 900;
    border-radius: ${({ $borderRadius }) =>
      $borderRadius || "var(--border-radius-lg)"};
    --shadow-offset: var(--box-shadow-offset-lg);
  `,
};

const variations = {
  primary: css`
    color: var(--color-light-0);
    background-color: var(--color-red-200);
    box-shadow: var(--box-shadow-offset-md) var(--color-red-400);

    &:hover {
      background-color: var(--color-red-100);
      box-shadow: var(--box-shadow-offset-md) var(--color-red-300);
    }
  `,
  secondary: css`
    color: var(--color-light-0);
    background: var(--color-blue-200);
    box-shadow: var(--box-shadow-offset-md) var(--color-blue-300);

    &:hover {
      background-color: var(--color-blue-100);
      box-shadow: var(--box-shadow-offset-md) var(--color-blue-300);
    }
  `,
  treeBark: css`
    color: var(--color-light-0);
    background: var(--color-brown-300);
    box-shadow: var(--box-shadow-offset-md) var(--color-brown-100);

    &:hover {
      color: var(--color-light-0);
      background-color: var(--color-brown-100);
      box-shadow: var(--box-shadow-inset-md) var(--color-brown-400);
    }
  `,
  treeBarkInverted: css`
    color: var(--color-light-0);
    background-color: var(--color-brown-100);
    box-shadow: var(--box-shadow-inset-md) var(--color-brown-400);

    &:hover {
      color: var(--color-light-0);
      background: var(--color-brown-300);
      box-shadow: var(--box-shadow-inset-md) var(--color-brown-400);
    }
  `,
  treeLeaf: css`
    color: var(--color-light-0);
    background-color: var(--color-green-300);
    box-shadow: var(--box-shadow-offset-md) var(--color-green-400);

    &:hover {
      color: var(--color-light-0);
      background: var(--color-green-200);
      box-shadow: var(--box-shadow-offset-sm) var(--color-green-300);
    }
  `,
};

const Button = styled.button`
  text-transform: uppercase;
  transition: all 0.3s;

  svg {
    fill: currentColor;
    color: inherit;
  }

  ${({ $size }) => sizes[$size]}
  ${({ $variation }) => variations[$variation]}
`;

export default Button;
