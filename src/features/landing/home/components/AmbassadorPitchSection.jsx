import styled from "styled-components";
import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Line from "../../../../shared/components/layout/Line";

import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import ambassadorPitchData from "../data/ambassadorPitchData";
import RouterLink from "../../../../shared/components/routing/RouterLink";

const StyledAmbassadorPitchSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
  color: var(--color-dark-200);
`;

const StyledCards = styled(Row)`
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledButtons = styled(Row)`
  @media (max-width: 900px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

function AmbassadorPitchSection() {
  return (
    <Card
      $cardShadow="outsetLG"
      $cardColor="url(src/assets/images/ui/CreamOverlay.png)"
    >
      <StyledAmbassadorPitchSection>
        <Row $gap="var(--gap-sm)">
          <Heading as="h6" $color="var(--color-red-300)">
            FOR PUERTO RICANS
          </Heading>

          <Row $gap="var(--gap-sm)">
            <Heading
              as="h2"
              $color="var(--color-red-200)"
              $shadowColor="var(--color-red-400)"
            >
              YOU KNOW PUERTO RICO BEST.
            </Heading>
            <Heading
              as="h2"
              $color="var(--color-red-200)"
              $shadowColor="var(--color-red-400)"
            >
              HeLP OTHeRS EXPeRIENCE iT.
            </Heading>
          </Row>
        </Row>
        <Row $gap="var(--gap-sm)">
          <p>
            The best explorations are built by people who actually love the
            island.
          </p>
          <p>
            As an Ambassador, you can create explorations around your favorite
            spots — the restaurant your family has eaten at for generations, the
            beach only locals know about, the bar where everyone goes after
            work.
          </p>
        </Row>
        <Row $direction="horizontal" $gap="var(--gap-lg)">
          <StyledCards>
            {ambassadorPitchData.map((section) => (
              <Card
                key={section.id}
                $cardColor="var(--color-light-0)"
                $cardShadow="outsetSM"
              >
                <Row>
                  <Heading
                    as="h2"
                    $color="var(--color-red-200)"
                    $shadowColor="var(--color-red-400)"
                  >
                    {section.id}
                  </Heading>

                  <Heading as="h6" $color="var(--color-red-400)">
                    {section.heading}
                  </Heading>
                  {section.description}
                </Row>
              </Card>
            ))}
          </StyledCards>
        </Row>
        <Heading as="h6" $color="var(--color-red-300)">
          Share the island you grew up on.
        </Heading>
        <StyledButtons
          $direction="horizontal"
          $gap="var(--gap-md)"
          $align="left"
        >
          <RouterLink to="/signup/ambassador">
            <Button $size="small" $variation="primary">
              Become an Ambassador
            </Button>
          </RouterLink>

          <RouterLink to="/login">
            <Button $size="small" $variation="darkRed">
              Login as an Ambassador
            </Button>
          </RouterLink>
        </StyledButtons>
      </StyledAmbassadorPitchSection>
    </Card>
  );
}

export default AmbassadorPitchSection;
