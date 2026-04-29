import styled from "styled-components";

export const StyledEndActSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 798px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 50%;
    }
  }
`;

export const StyledActSectionCTA = styled.figure`
  display: flex;
  gap: 1rem;

  @media (max-width: 798px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
