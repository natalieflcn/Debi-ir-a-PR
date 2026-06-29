import styled from "styled-components";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileBadgeCollection from "../../../explorer/components/profile/ProfileBadgeCollection";

import { useLoaderData } from "react-router-dom";

const StyledExplorerProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function ExplorerProfile() {
  const profileData = useLoaderData();
  console.log(profileData);

  return (
    <StyledExplorerProfile>
      <ProfileHeader
        userName={profileData.name}
        userTitle={profileData.title}
      />
      <ProfileInformation
        userEmail={profileData.email}
        userPassword={profileData.password}
        dateJoined={profileData.dateJoined}
      />
      <ProfileBadgeCollection />
    </StyledExplorerProfile>
  );
}

export default ExplorerProfile;
