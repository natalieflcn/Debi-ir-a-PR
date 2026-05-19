import Heading from "../../../../shared/components/typography/Heading";
import Card from "../../../../shared/components/layout/Card";
import Image from "../../../../shared/components/ui/Image";
import Row from "../../../../shared/components/layout/Row";
import styled from "styled-components";
import meetPuertoRicoData from "../data/meetPuertoRicoData";

const StyledHowItWorksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
`;

const StyledMeetPuertoRicoCard = styled.div`
  color: var(--color-dark-200);
`;

const StyledCardsRow = styled(Row)`
  @media (max-width: 900px) {
    flex-direction: column;
    width: 80%;
    align-self: center;
  }
`;

const MeetPuertoRicoCard = function ({ image, spotData }) {
  return (
    <StyledMeetPuertoRicoCard>
      <Row>
        <Image src={image} />
        <Card $cardColor="var(--color-light-0)" $cardShadow="outsetSM">
          {spotData}
        </Card>
      </Row>
    </StyledMeetPuertoRicoCard>
  );
};

function HowItWorksSection() {
  return (
    <StyledHowItWorksSection>
      <Row>
        <Heading as="h2">EXPLoRE THe REaL PuERTO RiCO</Heading>

        <p>We've curated so many ways for you to meet Puerto Rico.</p>
      </Row>

      <StyledCardsRow $direction="horizontal" $gap="var(--gap-xl)">
        {meetPuertoRicoData.slice(0, 3).map((spot) => (
          <MeetPuertoRicoCard
            key={spot.id}
            image={spot.image}
            spotData={spot.description}
          />
        ))}
      </StyledCardsRow>

      <StyledCardsRow $direction="horizontal" $gap="var(--gap-xl)">
        {meetPuertoRicoData.slice(3).map((spot) => (
          <MeetPuertoRicoCard
            key={spot.id}
            image={spot.image}
            spotData={spot.description}
          />
        ))}
      </StyledCardsRow>

      <p>
        Every exploration is a curated journey through a corner of the island —
        built by people who know it best.
      </p>
    </StyledHowItWorksSection>
  );
}

export default HowItWorksSection;
