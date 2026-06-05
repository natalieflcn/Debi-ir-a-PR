import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import Image from "../../../../shared/components/ui/Image";

function ExplorerExplorationCardFooterCTA({ hasStarted, exploration }) {
  return (
    !hasStarted && (
      <Card $cardColor="var(--color-light-100)">
        <Row $direction="horizontal" $align="space-evenly">
          <Row $direction="horizontal" $gap="var(--gap-lg)">
            <Image
              src="/src/assets/images/content/TEMP.png"
              $borderRadius="round"
              $width="4rem"
            />
            <Heading as="h6">What are you waiting for?</Heading>
          </Row>
          <Button $variation="primary" $size="small">
            Start Exploring Now
          </Button>
        </Row>
      </Card>
    )
  );
}

export default ExplorerExplorationCardFooterCTA;
