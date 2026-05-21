import styled from "styled-components";
import ExplorerDashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Image from "../../../../shared/components/ui/Image";
import Button from "../../../../shared/components/ui/Button";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";

const StyledExplorerDashboardProfileItem = styled.div``;

function ExplorerDashboardProfileItem() {
  return (
    <StyledExplorerDashboardProfileItem>
      <DashboardItem $variation="center">
        <Heading as="h4" $color="var(--color-dark-100)">
          First Explorer
        </Heading>
        <Image
          src="src/assets/images/content/TEMP.png"
          $borderRadius="var(--border-radius-round)"
          $width="9rem"
          $imageShadow="var(--box-shadow-sm)"
        />
        <Heading as="h6">Natalie Falcon</Heading>
        <Button $variation="secondary" $size="small">
          View Profile
        </Button>
      </DashboardItem>
    </StyledExplorerDashboardProfileItem>
  );
}

export default ExplorerDashboardProfileItem;
