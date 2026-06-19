import styled from "styled-components";
import Image from "../ui/Image";
import Row from "../layout/Row";
import Heading from "../typography/Heading";
import {
  IoIosInformationCircleOutline,
  IoIosInformationCircle,
} from "react-icons/io";
import { useRef, useState } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { useSubmit } from "react-router-dom";

const StyledProfileHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 25% 1fr;
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

const HiddenInput = styled.input`
  display: none;
`;

const ProfileHeader = function ({ userAvatar, userName, userTitle }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(
    userAvatar ?? "/src/assets/images/content/TEMP.png",
  );
  const fileInputRef = useRef(null);
  const submit = useSubmit();

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (avatarPreview.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }

    const previewURL = URL.createObjectURL(file);
    setAvatarPreview(previewURL);

    const formData = new FormData();

    formData.append("avatar", file);

    submit(formData, {
      method: "patch",
      action: "/profile/avatar",
      encType: "multipart/form-data",
    });
  }

  return (
    <StyledProfileHeader>
      <Row>
        <Image src={avatarPreview} $width="100%" $height="auto" />

        <HiddenInput
          ref={fileInputRef}
          type="file"
          accept="image/*"
          name="avatar"
          onChange={handleAvatarChange}
        />

        <Button
          $variation="yellow"
          $size="small"
          onClick={() => fileInputRef.current.click()}
        >
          Change Avatar
        </Button>
      </Row>

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
