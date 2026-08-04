import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import Image from "../../../../shared/components/ui/Image";

function ExplorerExplorationCardFooterCTA({ hasStarted, exploration }) {
  return (
    <Card $cardColor="var(--color-light-100)">
      {!hasStarted && (
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
      )}

      {hasStarted && (
        <Row $direction="vertical" $align="center" $gap="var(--gap-md)">
          Complete this exploration to earn:
          <Row $direction="horizontal" $gap="var(--gap-lg)">
            <Image $width="5rem" src={exploration.badge.image} />
            <Heading as="h5" $color="var(--color-red-300)">
              {exploration.badge.name}
            </Heading>
          </Row>
        </Row>
      )}
    </Card>
  );
}

export default ExplorerExplorationCardFooterCTA;
