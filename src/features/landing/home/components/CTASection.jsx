import styled from "styled-components";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import RouterLink from "../../../../shared/components/ui/RouterLink";

const StyledCTASection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
`;

const StyledButtonGroup = styled(Row)`
  @media (max-width: 700px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

function CTASection() {
  return (
    <Card $cardColor="url(src/assets/images/ui/Sand.png)">
      <StyledCTASection>
        <Heading
          as="h2"
          $color="var(--color-blue-200)"
          $shadowColor="var(--color-blue-400)"
        >
          StART eXPLORING PuERTO RiCO NoW
        </Heading>
        <Heading as="h6" $color="var(--color-brown-300)">
          Stop planning. Start discovering.
        </Heading>
        <StyledButtonGroup
          $direction="horizontal"
          $gap="var(--gap-md)"
          $align="left"
        >
          <RouterLink to="/signup/explorer">
            <Button $size="small" $variation="secondary">
              Become an Explorer
            </Button>
          </RouterLink>

          <RouterLink to="/how-it-works">
            <Button $size="small" $variation="yellow">
              Learn More
            </Button>
          </RouterLink>

          <RouterLink to="/login">
            <Button $size="small" $variation="primary">
              Login
            </Button>
          </RouterLink>
        </StyledButtonGroup>
      </StyledCTASection>
    </Card>
  );
}

export default CTASection;
