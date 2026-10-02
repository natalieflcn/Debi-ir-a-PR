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

function ExplorerProfile() {
  // const { user, userHistory } = useLoaderData();
  const { user } = useLoaderData();
  return (
    <StyledExplorerProfile>
      <ProfileHeader
        // userName={profileData.name}
        // userTitle={profileData.title}
        title={user.title}
        user={user}
      />
      <ProfileInformation user={user} />
      {/* <ProfileBadgeCollection userHistory={userHistory} /> */}
    </StyledExplorerProfile>
  );
}

export default ExplorerProfile;
