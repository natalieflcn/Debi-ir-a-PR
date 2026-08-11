import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Image from "../../../../shared/components/ui/Image";
import Button from "../../../../shared/components/ui/Button";
import styled from "styled-components";
import ProgressBar from "../../../../shared/components/ui/ProgressBar";
import Bold from "../../../../shared/components/typography/Bold";

const ExplorationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // always 2 columns
  gap: var(--gap-lg);
  width: 100%;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const StyledRow = styled(Row)`
  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

const StyledGapRow = styled(Row)``;
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
              <StyledRow
                $direction="horizontal"
                $align="flex-start"
                $gap="var(--gap-lg)"
              >
                <Image src="/src/assets/images/content/TEMP.png" $width="40%" />
                <Row $gap="var(--gap-lg)">
                  <Row>
                    <Heading as="h5">{exploration.name}</Heading>
                    <p>{exploration.description}</p>
                  </Row>
                  <Row $gap="var(--gap-sm)">
                    <Bold $color="var(--color-dark-200)">
                      {userProgress.find(
                        (explorationProgress) =>
                          explorationProgress.explorationId === exploration.id,
                      )?.userProgress ?? 0}
                      % complete
                    </Bold>
                    <ProgressBar label={false} />
                    <Button $variation="primary" $size="small">
                      Continue Exploring
                    </Button>
                  </Row>
                </Row>
              </StyledRow>
            </Card>
          ))}
        </ExplorationGrid>
      </DashboardItem>
    </>
  );
}

export default ExplorerDashboardExplorationsItem;
