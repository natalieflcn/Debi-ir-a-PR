import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import Image from "../../../../shared/components/ui/Image";
import RouterLink from "../../../../shared/components/routing/RouterLink";

function AmbassadorDashboardProfileItem({ profileData }) {
  return (
    <DashboardItem $variation="center" $height="18rem">
      <Row $gap="var(--gap-lg)">
        <Row $align="center">
          <Heading as="h4" $color="var(--color-red-300)">
            Ambassador
          </Heading>
          <Image
            src={profileData.avatar}
            $borderRadius="var(--border-radius-round)"
            $width="8rem"
            $height="8rem"
            $imageShadow="var(--box-shadow-sm)"
          />
          <Heading as="h6">{profileData.name}</Heading>
        </Row>
        <Row>
          <RouterLink to="/ambassador/profile">
            <Button $variation="primary" $size="small">
              View Profile
            </Button>
          </RouterLink>
        </Row>
      </Row>
    </DashboardItem>
  );
}

export default AmbassadorDashboardProfileItem;
