import styled from "styled-components";
import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";

export const StyledExplorationCard = styled(Card)`
  align-items: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
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
`;
export const ExplorationCardBody = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: var(--gap-3xl);
`;

export const ExplorationCardAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  width: 28%;
  align-self: flex-start;
`;

export const ExplorationCardLocations = styled(Row)`
  align-self: flex-start;
`;

export const LocationHeading = styled(Heading)`
  width: 2rem;
  text-align: center;
`;
