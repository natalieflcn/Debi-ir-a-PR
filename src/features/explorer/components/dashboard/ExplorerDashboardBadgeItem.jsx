import styled from "styled-components";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import ExplorerDashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Bold from "../../../../shared/components/typography/Bold";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import Image from "../../../../shared/components/ui/Image";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { useState } from "react";
import Modal from "../../../../shared/components/ui/Modal";
import badges from "../../../../../data/badges";

const StyledExplorerDashboardBadgeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

function ExplorerDashboardBadgeItem({ userHistory }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const numBadges = badges.length;

  const recentBadge = userHistory.earnedBadges.sort(
    (a, b) => a.earnedAt > b.earnedAt,
  )[0];

  const recentBadgeName = badges.find(
    (badge) => badge.id === recentBadge.badgeId,
  ).name;

  return (
    <DashboardItem $variation="center" $height="18rem">
      <StyledExplorerDashboardBadgeItem>
        <Row $gap="var(--gap-lg)">
          <Heading as="h4" $color="var(--color-dark-100)">
            Most Recent Badge
          </Heading>
          <Row $gap="var(--gap-md)" $align="center">
            <Image src="/src/assets/images/content/TEMP.png" $width="5rem" />
            <Heading as="h6">{recentBadgeName} Badge</Heading>
          </Row>

          <Bold $color="var(--color-dark-200)">
            {userHistory.earnedBadges.length} out of {numBadges} badges
            collected
          </Bold>

          <Button
            $variation="primary"
            $size="small"
            onClick={() => setIsModalOpen(true)}
          >
            View Badge Collection
          </Button>
        </Row>
      </StyledExplorerDashboardBadgeItem>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>badges here</Modal>
      )}
    </DashboardItem>
  );
}

export default ExplorerDashboardBadgeItem;
