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
import Modal from "../../../../shared/components/modal/Modal";
import SmallText from "../../../../shared/components/typography/SmallText";
import diapr from "../../../../assets/images/brand/diapr.svg";
import { optimize } from "../../../../shared/utils/helpers";

const StyledExplorerDashboardBadgeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const StyledRow = styled(Row)`
  text-align: center;
`;
function ExplorerDashboardBadgeItem({
  userHistory = [],
  totalBadges,
  earnedBadges,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calc

  // const recentBadge = userHistory.badgeCollection.sort(
  //   (a, b) => a.earnedAt > b.earnedAt,
  // )[0];

  // Calculating Last Earned Badge
  const lastCompletedExploration = userHistory
    .filter(
      (explorationProgress) => explorationProgress?.status === "completed",
    )
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0];

  const recentBadge = earnedBadges.find(
    (badge) => lastCompletedExploration.exploration === badge.exploration,
  );

  // const recentBadgeName = badges?.find(
  //   (badge) => badge.id === recentBadge.badgeId,
  // )?.name;

  return (
    <DashboardItem $variation="center">
      <StyledExplorerDashboardBadgeItem>
        <Row $gap="var(--gap-lg)">
          <Heading as="h4" $color="var(--color-dark-100)">
            Most Recent Badge
          </Heading>

          <Row $gap="var(--gap-md)" $align="center">
            {recentBadge ? (
              <>
                <Image
                  src={optimize(recentBadge?.image[0].url)}
                  $width="5rem"
                />
                <Heading as="h6">{recentBadge?.name}</Heading>
              </>
            ) : (
              <>
                <Image src={diapr} $width="5rem" />
                <SmallText>
                  Start exploring to earn your first badge...
                </SmallText>
              </>
            )}
          </Row>

          <Bold $color="var(--color-dark-200)">
            {earnedBadges.length || 0} out of {totalBadges} badges collected
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
        <Modal onClose={() => setIsModalOpen(false)} $width="50%">
          <StyledRow $gap="var(--gap-lg)">
            <Heading as="h3" $color="var(--color-blue-200)">
              YOUR BADGE COLLECTION
            </Heading>
            <Row
              $direction="horizontal"
              $gap="var(--gap-xl)"
              $wrap="wrap"
              $align="center"
            >
              {earnedBadges.map((badge) => (
                <Image
                  src={optimize(badge?.image[0]?.url)}
                  $width="5rem"
                  key={badge.exploration}
                  title={badge?.description}
                />
              ))}
            </Row>
          </StyledRow>
        </Modal>
      )}
    </DashboardItem>
  );
}

export default ExplorerDashboardBadgeItem;
