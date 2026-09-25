import styled from "styled-components";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileBadgeCollection from "../../../explorer/components/profile/ProfileBadgeCollection";

import { useLoaderData } from "react-router-dom";
import { formatDate } from "../../../../shared/utils/helpers";
import { useAuth } from "../../../auth/contexts/AuthContext";

const StyledExplorerProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function ExplorerProfile() {
  // const { user, userHistory } = useLoaderData();
  const { user } = useAuth();
  return (
    <StyledExplorerProfile>
      <ProfileHeader
        // userName={profileData.name}
        // userTitle={profileData.title}
        user={user}
      />
      <ProfileInformation
        userEmail={user.email}
        userPassword={user.password}
        dateJoined={formatDate(user.createdAt)}
      />
      {/* <ProfileBadgeCollection userHistory={userHistory} /> */}
    </StyledExplorerProfile>
  );
}

export default ExplorerProfile;
