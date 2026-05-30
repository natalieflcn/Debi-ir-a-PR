import styled from "styled-components";
import Image from "../../../../shared/components/ui/Image";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import {
  IoIosInformationCircleOutline,
  IoIosInformationCircle,
} from "react-icons/io";
import { useState } from "react";
import Modal from "../../../../shared/components/ui/Modal";

const StyledProfileHeader = styled.div`
  display: flex;

  gap: var(--gap-xl);
`;

const InfoButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  color: inherit;
`;

const ProfileHeader = function ({ userAvatar, userName, userTitle }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <InfoButton
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsModalOpen(true)}
          >
            {isHovered ? (
              <IoIosInformationCircle size={23} />
            ) : (
              <IoIosInformationCircleOutline size={23} />
            )}
          </InfoButton>
        </Row>
      </Row>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <p>Info about Explorer titles and stuff</p>
        </Modal>
      )}
    </StyledProfileHeader>
  );
};

export default ProfileHeader;
