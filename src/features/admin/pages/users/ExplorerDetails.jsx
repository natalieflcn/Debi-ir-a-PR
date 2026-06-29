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

const StyledExplorerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function ExplorerDetails() {
  const explorerId = useParams().explorerId;
  const usersData = useLoaderData();

  const explorer = usersData.find(
    (user) => String(user.id) === String(explorerId),
  );

  console.log(usersData, explorer);
  return (
    <Row $gap="var(--gap-xl)">
      <RouterLink to="/admin/users">
        <Button $size="medium" $variation="darkRed">
          <FaArrowLeft size={12} /> Back to All Users
        </Button>
      </RouterLink>
      <StyledExplorerDetails>
        <ProfileHeader userName={explorer.name} userTitle={explorer.title} />
        <ProfileInformation
          userEmail={explorer.email}
          password="hello"
          dateJoined={explorer.dateJoined}
        />
        <ProfileBadgeCollection />
      </StyledExplorerDetails>
    </Row>
  );
}

export default ExplorerDetails;
