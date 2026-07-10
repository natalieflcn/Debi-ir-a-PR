import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Image from "../../../../shared/components/ui/Image";
import Button from "../../../../shared/components/ui/Button";
import styled from "styled-components";

const ExplorationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // always 2 columns
  gap: var(--gap-lg);
  width: 100%;
`;

function ExplorerDashboardExplorationsItem({
  explorationData,
  userProgress,
  title,
}) {
  return (
    <>
      <DashboardItem>
        <Heading as="h4" $color="var(--color-dark-100)">
          {title}
        </Heading>
        <ExplorationGrid>
          {explorationData.map((exploration) => (
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
                <Image src="/src/assets/images/content/TEMP.png" $width="40%" />
                <Row $gap="var(--gap-2xl)">
                  <Row>
                    <Heading as="h5">{exploration.name}</Heading>
                    <p>{exploration.description}</p>
                  </Row>
                  <Row>
                    <Heading as="h6">
                      {userProgress.find(
                        (explorationProgress) =>
                          explorationProgress.explorationId === exploration.id,
                      )?.userProgress ?? 0}
                      % complete
                    </Heading>
                    <Button $variation="primary" $size="small">
                      Continue Exploring
                    </Button>
                  </Row>
                </Row>
              </Row>
            </Card>
          ))}
        </ExplorationGrid>
      </DashboardItem>
    </>
  );
}

export default ExplorerDashboardExplorationsItem;
