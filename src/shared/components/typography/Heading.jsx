import styled, { css } from "styled-components";

const variants = {
  h2: css`
    font-family: DtMF;
    font-size: var(--font-size-2xl);
    line-height: var(--line-height-xl);
    letter-spacing: var(--letter-spacing-dtmf-normal);

    ${({ $shadowColor }) =>
      $shadowColor &&
      css`
        text-shadow: var(--text-shadow-offset-md) ${$shadowColor};
      `}

    @media (max-width: 800px) {
      font-size: var(--font-size-xl);
    }
  `,

  h3: css`
    font-family: DtMF;
    font-size: var(--font-size-xl);
    line-height: var(--line-height-lg);

    @media (max-width: 800px) {
      font-size: var(--font-size-l);
    }
  `,

  h4: css`
    font-family: DtMF;
    font-size: var(--font-size-lg);
    line-height: var(--line-height-lg);
    text-transform: uppercase;

    @media (max-width: 800) {
      font-size: var(--font-size-m);
    }
  `,

  h5: css`
    font-family: Museo, sans-serif;
    font-weight: var(--font-weight-boldest);
    font-size: var(--font-size-lg);
    letter-spacing: var(--letter-spacing-museo-tight);
    text-transform: uppercase;
    line-height: var(--line-height-lg);

    @media (max-width: 800) {
      font-size: var(--font-size-m);
    }
  `,

  h6: css`
    font-family: Museo, sans-serif;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-md);
    line-height: var(--line-height-md);

    @media (max-width: 800) {
      font-size: var(--font-size-s);
    }
  `,
};

const Heading = styled.h1`
  ${({ as }) => variants[as]}
  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}
  ${({ $shadowColor }) =>
    $shadowColor &&
    css`
      text-shadow: var(--text-shadow-offset-md) ${$shadowColor};
    `}
`;

export default Heading;
