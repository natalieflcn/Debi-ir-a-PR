import styled from "styled-components";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileBadgeCollection from "../../../explorer/components/profile/ProfileBadgeCollection";

const StyledExplorerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function ExplorerDetails() {
  return (
    <StyledExplorerDetails>
      <ProfileHeader userName="Natalie Falcon" userTitle="Some cool stuff" />
      <ProfileInformation
        email="Natalie.dflcn@gmail.com"
        passwordLength={8}
        dateJoined="Jan 30, 2026"
      />
      <ProfileBadgeCollection />
    </StyledExplorerDetails>
  );
}

export default ExplorerDetails;
