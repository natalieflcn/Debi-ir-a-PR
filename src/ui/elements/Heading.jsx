import styled, { css } from "styled-components";

const variants = {
  h1: css`
    font-family: DtMF;
    font-size: 3rem;
    line-height: 2rem;

    @media (max-width: 798px) {
      font-size: 2.25rem;
    }
  `,

  h2: css`
    font-family: DtMF;
    font-size: 2rem;
    line-height: 2rem;

    @media (max-width: 798px) {
      font-size: 1.7rem;
    }
  `,

  h3: css`
    font-family: DtMF;
    font-size: 1.9rem;
    line-height: 2rem;

    @media (max-width: 798px) {
      font-size: 1%.7;
    }
  `,

  h4: css`
    font-family: Museo, sans-serif;
    font-weight: 900;
    font-size: 2rem;

    @media (max-width: 798px) {
      font-size: 3rem;
    }
  `,

  h5: css`
    font-family: Museo, sans-serif;
    font-weight: 700;
    font-size: 1.7rem;

    @media (max-width: 798px) {
      font-size: 1.7rem;
    }
  `,

  h6: css`
    font-family: Museo, sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
  `,
};

const Heading = styled.h1`
  ${({ as }) => variants[as]}
  ${({ $css }) => $css && css($css)}
`;

export default Heading;
