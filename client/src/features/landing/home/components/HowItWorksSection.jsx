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
  flex: 1 1 0;
  min-width: 0;

  @media (max-width: 700px) {
    flex: none;
    width: 100%;
  }
`;

const StyledCardsRow = styled(Row)`
  align-items: flex-start;

  @media (max-width: 428px) {
    flex-direction: column;
    /* width: 80%; */
    align-self: center;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    gap: var(--gap-lg);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: var(--border-radius-md);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: var(--box-shadow-inset-lg);
  }
`;

const StyledCard = styled(Card)`
  justify-content: center;

  @media (max-width: 830px) {
    /* flex-direction: column; */
    height: 12rem;
    align-self: center;
  }

  @media (max-width: 700px) {
    /* flex-direction: column; */
    height: 6rem;
  }

  @media (max-width: 450px) {
    /* flex-direction: column; */
    height: 9rem;
  }
`;

const MeetPuertoRicoCard = function ({ image, spotData }) {
  return (
    <StyledMeetPuertoRicoCard>
      <Row>
        <ImageContainer>
          <Image src={image} $width="100%" $height="16rem" $objectFit="cover" />
        </ImageContainer>

        <StyledCard
          $cardColor="var(--color-light-0)"
          $cardShadow="outsetSM"
          $height="8.5rem"
        >
          <p>{spotData}</p>
        </StyledCard>
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
