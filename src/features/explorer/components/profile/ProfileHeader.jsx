import styled from "styled-components";
import Image from "../../../../shared/components/ui/Image";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import { IoIosInformationCircleOutline } from "react-icons/io";
const StyledProfileHeader = styled.div`
  display: flex;

  gap: var(--gap-xl);
`;

const ProfileHeader = function ({ userAvatar, userName, userTitle }) {
  return (
    <StyledProfileHeader>
      <Image src="/src/assets/images/content/TEMP.png" $width="25%" />
      <Row $gap="var(--gap-sm)">
        <Heading as="h2" $shadowColor="var(--color-blue-300)">
          {userName.toUpperCase()}
        </Heading>

        <Row $direction="horizontal" $align="flex-start" $gap="var(--gap-sm)">
          <Heading as="h5" $color="var(--color-light-0)">
            {userTitle}
          </Heading>
          <IoIosInformationCircleOutline size={23} />
        </Row>
      </Row>
    </StyledProfileHeader>
  );
};

export default ProfileHeader;
