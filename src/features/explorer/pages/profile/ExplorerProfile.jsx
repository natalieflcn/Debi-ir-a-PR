import styled from "styled-components";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileInformation from "../../components/profile/ProfileInformation";

const StyledExplorerProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
`;

function ExplorerProfile() {
  return (
    <StyledExplorerProfile>
      <ProfileHeader userName="Natalie Falcon" userTitle="Some cool stuff" />
      <ProfileInformation
        email="Natalie.dflcn@gmail.com"
        passwordLength={8}
        dateJoined="Jan 30, 2026"
      />
    </StyledExplorerProfile>
  );
}

export default ExplorerProfile;
