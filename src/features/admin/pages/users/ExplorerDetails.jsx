import styled from "styled-components";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import ProfileBadgeCollection from "../../../explorer/components/profile/ProfileBadgeCollection";
import Row from "../../../../shared/components/layout/Row";
import Button from "../../../../shared/components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";

const StyledExplorerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function ExplorerDetails() {
  return (
    <Row $gap="var(--gap-xl)">
      <Button $size="medium" $variation="darkRed">
        <FaArrowLeft size={12} /> Back to All Users
      </Button>
      <StyledExplorerDetails>
        <ProfileHeader userName="Natalie Falcon" userTitle="Some cool stuff" />
        <ProfileInformation
          email="Natalie.dflcn@gmail.com"
          passwordLength={8}
          dateJoined="Jan 30, 2026"
        />
        <ProfileBadgeCollection />
      </StyledExplorerDetails>
    </Row>
  );
}

export default ExplorerDetails;
