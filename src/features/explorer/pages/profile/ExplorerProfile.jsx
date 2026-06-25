import styled from "styled-components";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileBadgeCollection from "../../../explorer/components/profile/ProfileBadgeCollection";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

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
        userEmail="Natalie.dflcn@gmail.com"
        userPassword="mypassword"
        dateJoined="Jan 30, 2026"
      />
      <ProfileBadgeCollection />
    </StyledExplorerProfile>
  );
}

export default ExplorerProfile;
