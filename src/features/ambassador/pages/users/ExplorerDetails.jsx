import styled from "styled-components";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileBadgeCollection from "../../../explorer/components/profile/ProfileBadgeCollection";
import Row from "../../../../shared/components/layout/Row";
import Button from "../../../../shared/components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { useParams } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
import badges from "../../../../../data/badges";

const StyledExplorerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function ExplorerDetails() {
  const userId = useParams().userId;
  const { user, userHistory2 } = useLoaderData(userId);

  console.log(user, userHistory2);
  return (
    <Row $gap="var(--gap-xl)">
      <RouterLink to="/ambassador/users">
        <Button $size="medium" $variation="darkRed">
          <FaArrowLeft size={12} /> Back to All Explorers
        </Button>
      </RouterLink>
      <StyledExplorerDetails>
        <ProfileHeader userName={user.name} userTitle={user.title} />
        <ProfileInformation
          userEmail={user.email}
          password="hello"
          dateJoined={user.dateJoined}
        />
        <ProfileBadgeCollection userHistory={userHistory2} />
      </StyledExplorerDetails>
    </Row>
  );
}

export default ExplorerDetails;
