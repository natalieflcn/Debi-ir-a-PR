import styled from "styled-components";
import Heading from "../../../../shared/components/typography/Heading";
import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Image from "../../../../shared/components/ui/Image";
import { forwardRef, useState } from "react";

import { FaLock } from "react-icons/fa6";
import Modal from "../../../../shared/components/modal/Modal";

const StyledProfileBadgeCollection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
`;

const BadgesRow = styled(Row)`
  gap: var(--gap-2xl);
  align-items: center;
  align-content: center;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    align-items: flex-start;
    gap: var(--gap-lg);
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    gap: var(--gap-md);
  }
`;

const BadgeItem = styled.span`
  width: 5rem;
  cursor: pointer;
  text-align: center;
`;

const BadgeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
`;

const TitleRow = styled(Row)`
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const ProfileBadgeCollection = function ({ earnedBadges, badges = [] }) {
  // console.log(userHistory);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBadgeDetails, setCurrentBadgeDetails] = useState(null);

  function onBadgeItemClick(badgeId, isEarned) {
    setIsModalOpen(true);

    const { name, description, image } = badges.find(
      (badge) => badge.id === badgeId,
    );

    setCurrentBadgeDetails({ name, description, image, isEarned });
  }

  return (
    <StyledProfileBadgeCollection>
      <TitleRow $direction="horizontal">
        <Heading as="h3" $shadowColor="var(--color-blue-300)">
          BADGE COLLECTION
        </Heading>
        <Heading as="h6">
          {earnedBadges.length} out of {badges.length} badges collected
        </Heading>
      </TitleRow>
      <Card $cardColor="var(--color-light-100)" $cardShadow="insetMd">
        {/* replace later with badge info */}
        <BadgesRow $direction="horizontal" $wrap="wrap">
          {badges.map((badge) => {
            const isEarned = earnedBadges.some(
              (earned) => earned.exploration === badge._id,
            );

            return (
              <BadgeItem
                key={badge.id}
                onClick={() => onBadgeItemClick(badge.id, isEarned)}
              >
                {isEarned ? (
                  <Image
                    src={badge?.badge?.image[0]?.url}
                    alt={badge.name}
                    $width="5rem"
                  />
                ) : (
                  <FaLock size={50} fill="var(--color-red-300)" />
                )}
              </BadgeItem>
            );
          })}
        </BadgesRow>
      </Card>

      {isModalOpen && (
        <Modal
          onClose={() => {
            setIsModalOpen(false);
            setCurrentBadgeDetails(null);
          }}
        >
          <BadgeDetails>
            <Heading as="h5" $color="var(--color-red-200)">
              {currentBadgeDetails.name}
            </Heading>

            {currentBadgeDetails.isEarned ? (
              <Image src={currentBadgeDetails.image} $width="5rem" />
            ) : (
              <FaLock size={50} fill="var(--color-dark-200)" />
            )}

            <p>{currentBadgeDetails.description}</p>
          </BadgeDetails>
        </Modal>
      )}
    </StyledProfileBadgeCollection>
  );
};

export default ProfileBadgeCollection;
