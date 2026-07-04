import styled from "styled-components";
import Row from "../../../shared/components/layout/Row";
import Heading from "../../../shared/components/typography/Heading";
import Card from "../../../shared/components/layout/Card";

export const StyledExplorationLocation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExplorationLocationHeaderImage = styled.div`
  background-image: ${({ $image }) => `url(${$image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  position: relative;
  height: 25rem;
  width: 100%;
`;

export const ExplorationLocationHeading = styled(Heading)`
  line-height: var(--line-height-2xl);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-sm);
`;

export const ExplorationLocationHeaderDetails = styled(Row)`
  position: absolute;
  justify-self: center;
  bottom: 20%;
  width: 60%;
  background-color: rgba(241, 198, 202, 0.8);

  padding: 1.25rem 1.75rem;
  border-radius: var(--border-radius-lg);
`;

export const ExplorationLocationBody = styled.div`
  background-color: var(--color-light-0);
  color: var(--color-dark-200);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

export const ExplorationLocationAbout = styled.div`
  padding: 2rem;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-md);
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
`;

export const ExplorationLocationTags = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  box-shadow: var(--box-shadow-inset-md) var(--color-brown-300);
  border-radius: var(--border-radius-md);
  padding: 1.5rem;
  background-color: var(--color-light-100);
`;

export const ExplorationLocationTag = styled.span`
  padding: 0.75rem 1rem;
  margin: 0.5rem;
  display: inline;
  font-weight: var(--font-weight-boldest);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-red-200);
  color: var(--color-light-0);
  font-size: var(--font-size-xs);
`;

export const ExplorationLocationFooter = styled(Card)`
  /* margin: 2rem 1.5rem; */
`;
