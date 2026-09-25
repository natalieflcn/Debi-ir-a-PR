import styled from "styled-components";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import { useLoaderData } from "react-router-dom";
import { formatDate } from "../../../../shared/utils/helpers";
import { useAuth } from "../../../auth/contexts/AuthContext";

const StyledAmbassadorProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function AmbassadorProfile() {
  // const { profileData } = useLoaderData();
  const { user } = useAuth();

  return (
    <StyledAmbassadorProfile>
      <ProfileHeader user={user} />
      <ProfileInformation user={user} />
    </StyledAmbassadorProfile>
  );
}

export default AmbassadorProfile;
