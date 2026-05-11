import styled from "styled-components";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import Row from "../../../../shared/components/layout/Row";

const StyledHeroSectionBackground = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);

  background-image: url("src/assets/images/ui/PRBeachOverlay.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  min-height: 90vh;
`;

const StyledHeroSectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 5rem;
`;

function HeroSection() {
  return (
    <StyledHeroSectionBackground>
      <StyledHeroSectionContent>
        <Heading as="h2">Your next Puerto Rico adventure starts here.</Heading>
        <Heading as="h2">Skip the resort.</Heading>
        <Heading as="h2">Meet the island.</Heading>
        <p>
          We'll bring you to the spots Puerto Ricans actually love — the
          restaurants, landmarks, beaches, and hidden corners that most visitors
          never find.
        </p>
        <p>The beaches are just the beginning.</p>
        <Row $direction="horizontal" $align="left">
          <Button>Become an Explorer</Button>
          <Button>How It Works</Button>
        </Row>
        <Row $direction="horizontal" $align="left">
          <p>Already exploring?</p>
          <p>Login</p>
        </Row>
      </StyledHeroSectionContent>
    </StyledHeroSectionBackground>
  );
}

export default HeroSection;
