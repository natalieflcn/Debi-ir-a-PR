import styled from "styled-components";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import { useLoaderData } from "react-router-dom";

const StyledAdminProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function AdminProfile() {
  const profileData = useLoaderData();

  return (
    <StyledAdminProfile>
      <ProfileHeader
        userName={profileData.name}
        userTitle={profileData.title}
      />
      <ProfileInformation
        userEmail={profileData.email}
        userPassword={profileData.password}
        dateJoined={profileData.dateJoined}
      />
    </StyledAdminProfile>
  );
}

export default AdminProfile;
