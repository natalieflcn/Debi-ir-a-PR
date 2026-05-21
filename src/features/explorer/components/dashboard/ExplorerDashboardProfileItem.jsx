import styled from "styled-components";
import ExplorerDashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Image from "../../../../shared/components/ui/Image";
import Button from "../../../../shared/components/ui/Button";

const StyledExplorerDashboardProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  align-items: center;
  text-align: center;
`;

function ExplorerDashboardProfileItem() {
  return (
    <ExplorerDashboardItem $align="center">
      <StyledExplorerDashboardProfileItem>
        <Heading as="h4" $color="var(--color-blue-300)">
          First Explorer
        </Heading>
        <Image
          src="src/assets/images/content/TEMP.png"
          $borderRadius="var(--border-radius-round)"
          $width="10rem"
          $imageShadow="var(--box-shadow-sm)"
        />
        <Heading as="h6">Natalie Falcon</Heading>
        <Button $variation="secondary" $size="small">
          View Profile
        </Button>
      </StyledExplorerDashboardProfileItem>
    </ExplorerDashboardItem>
  );
}

export default ExplorerDashboardProfileItem;
