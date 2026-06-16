import Heading from "../../../../shared/components/typography/Heading";
import Bold from "../../../../shared/components/typography/Bold";
import Button from "../../../../shared/components/ui/Button";
import Row from "../../../../shared/components/layout/Row";
import {
  StyledHeroButtons,
  StyledHeroHeading,
  StyledHeroHeadingRow,
  StyledHeroLogin,
  StyledHeroPeriod,
  StyledHeroSectionBackground,
  StyledHeroSectionContent,
} from "./heroSection.styles";
import RouterLink from "../../../../shared/components/ui/RouterLink";

function HeroSection() {
  return (
    <StyledHeroSectionBackground>
      <StyledHeroSectionContent>
        <Row $gap="var(--gap-md)">
          <Heading as="h5">
            YOuR NeXT PUeRTO RiCO aDVENTURE STaRTS HERe.
          </Heading>
          <StyledHeroHeadingRow>
            <Row>
              <StyledHeroHeading
                as="h2"
                $color="var(--color-red-200)"
                $shadowColor="var(--color-red-400)"
              >
                SKiP THe RESoRT<StyledHeroPeriod>.</StyledHeroPeriod>
              </StyledHeroHeading>
            </Row>
            <Row>
              <StyledHeroHeading
                as="h2"
                $color="var(--color-blue-100)"
                $shadowColor="var(--color-blue-400)"
              >
                MeET THe iSLAND<StyledHeroPeriod>.</StyledHeroPeriod>
              </StyledHeroHeading>
            </Row>
          </StyledHeroHeadingRow>
        </Row>

        <Row $gap="var(--gap-sm)">
          <p>
            We'll bring you to the spots Puerto Ricans actually love — the
            restaurants, landmarks, beaches, and hidden gems that most visitors
            never find.
          </p>
          <Bold $color="var(--color-light-100)">
            The beaches are just the beginning.
          </Bold>
        </Row>

        <Row>
          <StyledHeroButtons
            $direction="horizontal"
            $align="left"
            $gap="var(--gap-md)"
          >
            <RouterLink to="/signup/explorer">
              <Button $variation="secondary" $size="small">
                Become an Explorer
              </Button>
            </RouterLink>

            <RouterLink to="/how-it-works">
              <Button $variation="primary" $size="small">
                How It Works
              </Button>
            </RouterLink>
          </StyledHeroButtons>
          <Row $direction="horizontal" $align="left" $gap="var(--gap-xs)">
            <Bold $color="var(--color-light-100)">Already exploring?</Bold>
            <RouterLink to="/login">
              <StyledHeroLogin>Login</StyledHeroLogin>
            </RouterLink>
          </Row>
        </Row>
      </StyledHeroSectionContent>
    </StyledHeroSectionBackground>
  );
}

export default HeroSection;
