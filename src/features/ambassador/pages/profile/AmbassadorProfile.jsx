import styled from "styled-components";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import { useLoaderData } from "react-router-dom";

const StyledAmbassadorProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function AmbassadorProfile() {
  const profileData = useLoaderData();

  return (
    <StyledAmbassadorProfile>
      <ProfileHeader
        userName={profileData.name}
        userTitle={profileData.title}
      />
      <ProfileInformation
        userEmail={profileData.email}
        userPassword={profileData.password}
        dateJoined={profileData.datedJoined}
      />
    </StyledAmbassadorProfile>
  );
}

export default AmbassadorProfile;
