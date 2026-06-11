import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import Image from "../../../../shared/components/ui/Image";

function AdminDashboardProfileItem() {
  return (
    <DashboardItem $variation="center" $height="18rem">
      <Row $gap="var(--gap-lg)">
        <Row $align="center">
          <Heading as="h4" $color="var(--color-red-300)">
            Admin
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
          <Button $variation="primary" $size="small">
            View Profile
          </Button>
        </Row>
      </Row>
    </DashboardItem>
  );
}

export default AdminDashboardProfileItem;
