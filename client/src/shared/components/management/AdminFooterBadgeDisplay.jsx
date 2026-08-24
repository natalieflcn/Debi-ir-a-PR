import styled from "styled-components";
import Card from "../layout/Card";
import Row from "../layout/Row";
import Heading from "../typography/Heading";
import Image from "../ui/Image";

const StyledCard = styled(Card)`
  text-align: center;
`;

const BadgeRow = styled(Row)`
  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`;

function AdminFooterBadgeDisplay({ badge }) {
  return (
    <StyledCard
      $cardColor="var(--color-light-100)"
      $align="center"
      $gap="var(--gap-md)"
    >
      Upon completion of this exploration, Explorers will earn:
      <BadgeRow $direction="horizontal" $gap="var(--gap-lg)">
        <Image $width="5rem" src={badge.image} />
        <Heading as="h5" $color="var(--color-red-300)">
          {badge.name}
        </Heading>
      </BadgeRow>
    </StyledCard>
  );
}

export default AdminFooterBadgeDisplay;
