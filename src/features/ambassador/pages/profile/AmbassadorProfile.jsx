import styled from "styled-components";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";

const StyledAmbassadorProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function AmbassadorProfile() {
  return (
    <StyledAmbassadorProfile>
      <ProfileHeader userName="Natalie Ambassador" userTitle="Ambassador" />
      <ProfileInformation
        userEmail="Natalie.dflcn@gmail.com"
        userPasswordLength="yuhyuhyuh"
        dateJoined="Jan 30, 2026"
      />
    </StyledAmbassadorProfile>
  );
}

export default AmbassadorProfile;
