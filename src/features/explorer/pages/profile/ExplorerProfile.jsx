import styled from "styled-components";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileBadgeCollection from "../../../explorer/components/profile/ProfileBadgeCollection";
import { AmbassadorExplorersTable } from "../../../admin/pages/users/ManageUsers";
import { useParams } from "react-router-dom";

const StyledExplorerProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function ExplorerProfile() {
  return (
    <StyledExplorerProfile>
      <ProfileHeader userName="Natalie Falcon" userTitle="Some cool stuff" />
      <ProfileInformation
        userEmail="natalie.fldl@gmail.com"
        userPassword="mypassword"
        dateJoined="June 29, 2026"
      />
      <ProfileBadgeCollection />
    </StyledExplorerProfile>
  );
}

export default ExplorerProfile;
