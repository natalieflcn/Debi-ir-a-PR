import styled, { css } from "styled-components";

// small button
// medium button
// large button (full panel length)
// embed link prop into button
// pass in colors, margin, assign default

const sizes = {
  small: css`
    padding: 0.5rem;
    height: 2rem;
    width: 2rem;
    border-radius: var(--border-radius-sm);
    /* box-shadow: 1px 1px 2px black; */
  `,
  medium: css`
    font-weight: 700;
    font-size: 1rem;
    padding: 0.8rem 0;
    border-radius: var(--border-radius-md);
    /* box-shadow: var(--shadow-md); */
  `,
  large: css`
    flex-grow: 1;
    justify-content: center;
    /* font-size: 1.6rem; */
    padding: 1rem 2rem;
    font-weight: 700;
    border-radius: var(--border-radius-lg);
    /* box-shadow: var(--shadow-lg); */
  `,
};

const variations = {
  primary: css`
    color: var(--color-light-0);
    background-color: var(--color-red-200);
    box-shadow: 1px 1px 2px var(--color-red-400);

    &:hover {
      background-color: var(--color-red-100);
      box-shadow: 2px 2px 2px var(--color-red-300);
    }
  `,
  secondary: css`
    color: var(--color-light-0);
    background: var(--color-blue-200);
    box-shadow: 1px 1px 2px var(--color-blue-400);

    &:hover {
      background-color: var(--color-blue-100);
      box-shadow: 2px 2px 2px var(--color-blue-300);
    }
  `,
};

const Button = styled.button`
  text-transform: uppercase;
  transition: all 0.3s;

  ${({ size }) => sizes[size]}
  ${({ variation }) => variations[variation]}
  ${({ $css }) => css({ $css })}
`;

export default Button;
