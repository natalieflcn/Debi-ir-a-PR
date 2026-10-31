import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Image from "../../../../shared/components/ui/Image";
import Button from "../../../../shared/components/ui/Button";
import styled from "styled-components";
import ProgressBar from "../../../../shared/components/ui/ProgressBar";
import Bold from "../../../../shared/components/typography/Bold";
import ExplorationCarousel from "../../../../shared/components/carousel/ExplorationCarousel";

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

const ExplorationItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  text-align: center;
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
        <ExplorationItemWrapper>
          <Heading as="h4" $color="var(--color-dark-100)">
            {title}
          </Heading>
          <ExplorationCarousel
            explorationData={explorationData}
            userProgress={userProgress}
          />
        </ExplorationItemWrapper>
      </DashboardItem>
    </>
  );
}

export default ExplorerDashboardExplorationsItem;
