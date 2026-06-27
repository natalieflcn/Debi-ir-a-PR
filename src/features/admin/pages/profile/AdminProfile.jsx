import styled from "styled-components";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";

const StyledAdminProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function AdminProfile() {
  return (
    <StyledAdminProfile>
      <ProfileHeader userName="Natalie Falcon" userTitle="Admin" />
      <ProfileInformation
        userEmail="Natalie.dflcn@gmail.com"
        userPasswordLength="yuhyuhyuh"
        dateJoined="Jan 30, 2026"
      />
    </StyledAdminProfile>
  );
}

export default AdminProfile;
