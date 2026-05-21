import styled from "styled-components";

export const StyledLayout = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 1rem 2rem 2rem;
  z-index: 1;
  max-width: 1200px;
  min-width: 0;

  @media (max-width: 800px) {
    padding: 0.5rem;
    width: 100%;
    /* margin: 0 auto; */
  }
`;
