import styled, { css } from "styled-components";

const variants = {
  h1: css`
    font-family: DtMF;
    font-size: 3rem;

    @media (max-width: 798px) {
      font-size: 2.25rem;
    }
  `,

  h2: css`
    font-family: DtMF;
    font-size: 2rem;

    @media (max-width: 798px) {
      font-size: 1.7rem;
    }
  `,

  h3: css`
    font-family: Museo, sans-serif;
    font-weight: 900;
    font-size: 3rem;

    @media (max-width: 798px) {
      font-size: 3rem;
    }
  `,

  h4: css`
    font-family: Museo, sans-serif;
    font-weight: 700;
    font-size: 2rem;

    @media (max-width: 798px) {
      font-size: 1rem;
    }
  `,

  h5: css`
    font-family: Museo, sans-serif;
    font-weight: 500;
    font-size: 3rem;

    @media (max-width: 798px) {
      font-size: 2rem;
    }
  `,
};

const Heading = styled.h1`
  ${({ as }) => variants[as]}
`;

export default Heading;
