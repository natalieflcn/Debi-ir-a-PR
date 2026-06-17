import styled from "styled-components";
import ProfileInformation from "../../../../shared/components/profile/ProfileInformation";
import ProfileHeader from "../../../../shared/components/profile/ProfileHeader";
import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Row from "../../../../shared/components/layout/Row";
import { IoIosCheckboxOutline } from "react-icons/io";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../../../../shared/components/ui/Button";
import RouterLink from "../../../../shared/components/ui/RouterLink";

const StyledExplorerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

const StyledCard = styled(Card)`
  justify-items: center;
`;

const StyledIcon = styled.div`
  display: inline-block;
  cursor: pointer;
`;

function AmbassadorDetails() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Row $gap="var(--gap-xl)">
      <RouterLink to="/admin/users">
        <Button $size="medium" $variation="darkRed">
          <FaArrowLeft size={12} /> Back to All Users
        </Button>
      </RouterLink>
      <StyledExplorerDetails>
        <ProfileHeader userName="Natalie Falcon" userTitle="Some cool stuff" />

        <StyledCard $cardColor="var(--color-light-100)">
          <Row $direction="horizontal" $gap="var(--gap-sm)" $align="flex-start">
            <StyledIcon onClick={() => setIsAdmin((prev) => !prev)}>
              {isAdmin ? (
                <MdCheckBoxOutlineBlank size={25} fill="var(--color-dark-100" />
              ) : (
                <IoIosCheckbox size={25} fill="var(--color-dark-100" />
              )}
            </StyledIcon>
            <Heading as="h5" $color="var(--color-dark-100)">
              Promote to Admin?
            </Heading>
          </Row>
        </StyledCard>

        <ProfileInformation
          email="Natalie.dflcn@gmail.com"
          passwordLength={8}
          dateJoined="Jan 30, 2026"
        />
      </StyledExplorerDetails>
    </Row>
  );
}

export default AmbassadorDetails;
