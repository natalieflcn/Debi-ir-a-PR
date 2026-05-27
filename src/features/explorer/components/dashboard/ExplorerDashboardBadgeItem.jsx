import styled from "styled-components";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import ExplorerDashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Bold from "../../../../shared/components/typography/Bold";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import Image from "../../../../shared/components/ui/Image";

const StyledExplorerDashboardBadgeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

function ExplorerDashboardBadgeItem() {
  return (
    <DashboardItem $variation="center" $height="18rem">
      <StyledExplorerDashboardBadgeItem>
        <Row $gap="var(--gap-lg)">
          <Heading as="h4" $color="var(--color-dark-100)">
            Most Recent Badge
          </Heading>
          <Row $gap="var(--gap-md)" $align="center">
            <Image src="/src/assets/images/content/TEMP.png" $width="5rem" />
            <Heading as="h6">Toa Alta Badge</Heading>
          </Row>

          <Bold $color="var(--color-dark-200)">
            3 out of 46 badges collected
          </Bold>

          <Button $variation="primary" $size="small">
            View Badge Collection
          </Button>
        </Row>
      </StyledExplorerDashboardBadgeItem>
    </DashboardItem>
  );
}

export default ExplorerDashboardBadgeItem;
