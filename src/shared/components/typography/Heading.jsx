import styled, { css } from "styled-components";

const variants = {
  h2: css`
    font-family: DtMF;
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);

    ${({ $shadowColor }) =>
      $shadowColor &&
      css`
        text-shadow: var(--text-shadow-md) ${$shadowColor};
      `}

    @media (max-width: 798px) {
      font-size: 1.7rem;
    }
  `,

  h3: css`
    font-family: DtMF;
    font-size: var(--font-size-lg);
    line-height: var(--line-height-lg);

    @media (max-width: 798px) {
      font-size: 1.7rem;
    }
  `,

  h4: css`
    font-family: Museo, sans-serif;
    font-weight: var(--font-weight-boldest);
    font-size: var(--font-size-lg);
    letter-spacing: var(--letter-spacing-museo-tight);
    text-transform: uppercase;

    @media (max-width: 798px) {
      font-size: 3rem;
    }
  `,

  h5: css`
    font-family: Museo, sans-serif;
    font-weight: 700;
    font-size: var(--font-size-md);
    text-transform: uppercase;

    @media (max-width: 798px) {
      font-size: 1.7rem;
    }
  `,
};

const Heading = styled.h1`
  ${({ as }) => variants[as]}
  ${({ $shadowColor }) =>
    $shadowColor &&
    css`
      text-shadow: var(--text-shadow-md) ${$shadowColor};
    `}
`;

export default Heading;
