import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Image from "../../../../shared/components/ui/Image";
import Button from "../../../../shared/components/ui/Button";

function ExplorerDashboardExplorationsItem({ explorationData }) {
  return (
    <>
      <DashboardItem>
        <Heading as="h4" $color="var(--color-dark-100)">
          Current Explorations
        </Heading>
        <Row $direction="horizontal" $gap="var(--gap-lg)">
          {explorationData.slice(0, 2).map((exploration) => (
            <Card
              $cardColor="var(--color-light-200)"
              $shadowColor="var(--color-brown-200)"
              $cardShadow="insetMD"
              key={exploration.id}
            >
              <Row
                $direction="horizontal"
                $align="flex-start"
                $gap="var(--gap-lg)"
              >
                <Image src="src/assets/images/content/TEMP.png" $width="40%" />
                <Row $gap="var(--gap-2xl)">
                  <Row>
                    <Heading as="h5">{exploration.name}</Heading>
                    <p>{exploration.description}</p>
                  </Row>
                  <Row>
                    <Heading as="h6">{exploration.progress}% complete</Heading>
                    <Button $variation="primary" $size="small">
                      Continue Exploring
                    </Button>
                  </Row>
                </Row>
              </Row>
            </Card>
          ))}
        </Row>
      </DashboardItem>
    </>
  );
}

export default ExplorerDashboardExplorationsItem;
