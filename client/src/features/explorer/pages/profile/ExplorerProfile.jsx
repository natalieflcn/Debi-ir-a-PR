import styled from "styled-components";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileBadgeCollection from "../../../explorer/components/profile/ProfileBadgeCollection";

import { useAuth } from "../../../auth/contexts/AuthContext";
import { useLoaderData } from "react-router-dom";

const StyledExplorerProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function getBadgeCollection(badges, userHistory) {
  const completedExplorations = userHistory
    .filter((explorationProgress) => explorationProgress.status === "completed")
    ?.map((explorationProgress) => explorationProgress.exploration);

  if (!completedExplorations) return [];

  const earnedBadges = badges
    .filter((exploration) => completedExplorations.includes(exploration._id))
    .map((exploration) => {
      return { ...exploration.badge, exploration: exploration._id };
    });

  return earnedBadges;
}

function ExplorerProfile() {
  // const { user, userHistory } = useLoaderData();
  const { user, userHistory, badges } = useLoaderData();

  const badgeCollection = getBadgeCollection(badges, userHistory);

  return (
    <StyledExplorerProfile>
      <ProfileHeader
        // userName={profileData.name}
        // userTitle={profileData.title}
        title={user.title}
        user={user}
      />
      <ProfileInformation user={user} />
      <ProfileBadgeCollection earnedBadges={badgeCollection} badges={badges} />
    </StyledExplorerProfile>
  );
}

export default ExplorerProfile;
