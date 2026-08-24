import styled from "styled-components";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import Image from "../../../../shared/components/ui/Image";
import ProgressBar from "../../../../shared/components/ui/ProgressBar";

const StyledTrackYourJourneySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
`;

const StyledRow = styled(Row)`
  @media (max-width: 800px) {
    flex-direction: column;
    gap: var(--gap-lg);
  }
`;

const StyledProgressBarRow = styled(Row)`
  width: 75%;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const StyledProgressRow = styled(Row)`
  align-items: start;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: var(--gap-md);
  }
`;
function TrackYourJourneySection() {
  return (
    <StyledTrackYourJourneySection>
      <StyledRow $direction="horizontal">
        <Row>
          <Heading as="h2">TRacK YOuR JoURNEY</Heading>
          <Row $gap="var(--gap-xs)">
            <Heading as="h5">Every visit counts.</Heading>
            <Heading as="h5">Track every step.</Heading>
            <Heading as="h5">Earn the badges.</Heading>
          </Row>
          <p>
            Check in at each location, watch your progress, and earn a badge
            when you complete an exploration. Show off your collection on your
            profile and see how much of the island you've truly experienced.
          </p>
        </Row>
        <Row>
          <Image src="src/assets/images/content/TEMP.png"></Image>
        </Row>
      </StyledRow>
      <StyledProgressRow $direction="horizontal">
        <Heading as="h6">32 of 76 spots explored</Heading>
        <StyledProgressBarRow>
          <ProgressBar completed={Math.floor((32 / 76) * 100)} />
        </StyledProgressBarRow>
      </StyledProgressRow>
    </StyledTrackYourJourneySection>
  );
}

export default TrackYourJourneySection;
