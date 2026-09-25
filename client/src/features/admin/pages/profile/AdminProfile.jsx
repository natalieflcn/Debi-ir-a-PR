import styled from "styled-components";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import { useLoaderData } from "react-router-dom";
import { formatDate } from "../../../../shared/utils/helpers";
import { useAuth } from "../../../auth/contexts/AuthContext";

const StyledAdminProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function AdminProfile() {
  console.log("running admin profile");
  const { user } = useAuth();
  console.log(user);

  return (
    <StyledAdminProfile>
      <ProfileHeader user={user} />
      <ProfileInformation
        // userEmail={user.email}
        // userPassword={user.password}
        // dateJoined={formatDate(user.createdAt)}
        user={user}
      />
    </StyledAdminProfile>
  );
}

export default AdminProfile;
