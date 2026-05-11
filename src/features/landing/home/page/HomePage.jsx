import styled from "styled-components";
import AmbassadorPitchSection from "../components/AmbassadorPitchSection";
import CTASection from "../components/CTASection";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TrackYourJourneySection from "../components/TrackYourJourneySection";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-2xl);
  font-weight: var(--font-weight-medium);
`;

function HomePage() {
  return (
    <StyledHomePage>
      <HeroSection />
      <HowItWorksSection />
      <TrackYourJourneySection />
      <CTASection />
      <AmbassadorPitchSection />
    </StyledHomePage>
  );
}

export default HomePage;
