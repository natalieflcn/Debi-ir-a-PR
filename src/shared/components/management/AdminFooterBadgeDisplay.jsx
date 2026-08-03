import Card from "../layout/Card";
import Row from "../layout/Row";
import Heading from "../typography/Heading";
import Image from "../ui/Image";

function AdminFooterBadgeDisplay({ badge }) {
  return (
    <Card
      $cardColor="var(--color-light-100)"
      $align="center"
      $gap="var(--gap-md)"
    >
      Upon completion of this exploration, Explorers will earn:
      <Row $direction="horizontal" $gap="var(--gap-lg)">
        <Image $width="5rem" src={badge.image} />
        <Heading as="h5" $color="var(--color-red-300)">
          {badge.name}
        </Heading>
      </Row>
    </Card>
  );
}

export default AdminFooterBadgeDisplay;
