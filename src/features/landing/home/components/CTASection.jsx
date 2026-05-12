import styled from "styled-components";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Bold from "../../../../shared/components/typography/Bold";

const StyledCTASection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
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
        <Row $direction="horizontal" $gap="var(--gap-md)" $align="left">
          <Button $size="small" $variation="darkBlue">
            Become an Explorer
          </Button>
          <Button $size="small" $variation="yellow">
            Learn More
          </Button>
          <Button $size="small" $variation="primary">
            Login
          </Button>
        </Row>
      </StyledCTASection>
    </Card>
  );
}

export default CTASection;
