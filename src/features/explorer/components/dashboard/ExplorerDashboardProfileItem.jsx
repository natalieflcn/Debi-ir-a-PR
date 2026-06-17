import styled from "styled-components";
import ExplorerDashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Image from "../../../../shared/components/ui/Image";
import Button from "../../../../shared/components/ui/Button";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import RouterLink from "../../../../shared/components/routing/RouterLink";

const StyledExplorerDashboardProfileItem = styled.div`
  /* max-width: 50%; */
`;

function ExplorerDashboardProfileItem() {
  return (
    <StyledExplorerDashboardProfileItem>
      <DashboardItem $variation="center" $height="18rem">
        <Row $gap="var(--gap-lg)">
          <Row $align="center">
            <Heading as="h4" $color="var(--color-dark-100)">
              First Explorer
            </Heading>
            <Image
              src="/src/assets/images/content/TEMP.png"
              $borderRadius="var(--border-radius-round)"
              $width="8rem"
              $imageShadow="var(--box-shadow-sm)"
            />
            <Heading as="h6">Natalie Falcon</Heading>
          </Row>
          <Row>
            <RouterLink to="/profile">
              <Button $variation="secondary" $size="small">
                View Profile
              </Button>
            </RouterLink>
          </Row>
        </Row>
      </DashboardItem>
    </StyledExplorerDashboardProfileItem>
  );
}

export default ExplorerDashboardProfileItem;
