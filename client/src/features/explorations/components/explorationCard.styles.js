import styled from "styled-components";
import Row from "../../../shared/components/layout/Row";
import Card from "../../../shared/components/layout/Card";
import Heading from "../../../shared/components/typography/Heading";
import Image from "../../../shared/components/ui/Image";

export const StyledExplorationCard = styled(Card)`
  align-items: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;
  position: relative;
  background-color: var(--color-light-0);
  color: var(--color-dark-200);
`;

export const ExplorationCardHeaderImage = styled.div`
  background-image: ${({ $image }) => `url(${$image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  position: relative;
  height: 25rem;
  width: 100%;

  @media (max-width: 800px) {
    height: 27rem;
  }

  @media (max-width: 500px) {
    height: 30rem;
  }
`;

export const ExplorationCardHeading = styled(Heading)`
  /* justify-self: center; */
  line-height: var(--line-height-2xl);
  text-align: center;
`;

export const ExplorationCardHeaderDetails = styled(Row)`
  position: absolute;
  justify-self: center;
  bottom: 20%;
  width: 60%;
  background-color: rgba(241, 198, 202, 0.8);

  padding: 1.25rem 1.75rem;
  border-radius: var(--border-radius-lg);

  @media (max-width: 1000px) {
    padding: 1rem 1.5rem;
    width: 80%;
    bottom: 10%;
  }

  @media (max-width: 800px) {
    width: 90%;
    bottom: 12%;
  }

  @media (max-width: 500px) {
    bottom: 5%;
  }
`;
export const ExplorationCardBody = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: var(--gap-3xl);

  @media (max-width: 800px) {
    padding: 1.5rem;
  }
`;

export const ExplorationCardAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  width: 28%;
  align-self: flex-start;

  @media (max-width: 1200px) {
    width: 100%;
    min-width: 0;
  }
`;

export const ExplorationDetailsRow = styled(Row)`
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const ExplorationCardLocations = styled(Row)`
  align-self: flex-start;
  width: 100%;

  @media (max-width: 700px) {
    gap: var(--gap-2xl);
  }
`;

export const LocationHeading = styled(Heading)`
  width: 2rem;
  text-align: center;
`;

export const ExplorationImagesRow = styled(Row)`
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;

    img {
      width: 90%;
    }
  }
`;

export const StyledHeaderDetailsRow = styled(Row)`
  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--gap-md);
  }
`;
