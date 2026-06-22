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
import CondensedTable from "../ui/CondensedTable";
import { useAuth } from "../../../features/auth/contexts/AuthContext";

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

const StyledInfoButtonText = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
`;

const explorerTitlesTable = {
  columns: [
    { id: "title", heading: "Explorer Title" },
    { id: "milestones", heading: "Milestones" },
  ],
  rows: [
    { title: "Baby Turista", milestones: "0-1 Explorations" },
    { title: "Island Wanderer", milestones: "1-3 Explorations" },
    { title: "Santurce Stroller", milestones: "3-5 Explorations" },
    { title: "San Juan Seeker", milestones: "5-10 Explorations" },
    { title: "Bayamón Bouncer", milestones: "10-15 Explorations" },
    { title: "Ponce Pilgrim", milestones: "15-20 Explorations" },
    { title: "Lechón Master", milestones: "20-25 Explorations" },
    { title: "Chinchorreo Chaser", milestones: "25-30 Explorations" },
    { title: "Isla Veteran", milestones: "30-35 Explorations" },
    { title: "Boricua at Heart", milestones: "35+ Explorations" },
  ],
};

const explorerTitleTableTheme = {
  boxShadow: "var(--box-shadow-offset-lg)",
  shadowColor: "var(--color-brown-400)",
  headerBackground: "var(--color-yellow-100)",
  headerColor: "var(--color-red-200)",
  headerBackgroundAlt: "var(--color-light-100)",
  headerColorAlt: "var(--color-blue-200)",
  cellBackground: "var(--color-light-200)",
  cellBackgroundAlt: "var(--color-light-0)",
  borderColor: "var(--color-yellow-300)",
};

const InfoButtonTexts = {
  explorer: (
    <StyledInfoButtonText>
      <Heading
        as="h3"
        $color="var(--color-blue-200)"
        $shadowColor="var(--color-blue-400)"
      >
        EXPLORER
      </Heading>
      <p>
        As an Explorer, you'll uncover hidden gems, support local businesses and
        the island, and earn badges as you go! Continue completing more
        explorations to upgrade your Explorer Title!
      </p>
      <CondensedTable
        columns={explorerTitlesTable.columns}
        rows={explorerTitlesTable.rows}
        $theme={explorerTitleTableTheme}
      />
    </StyledInfoButtonText>
  ),
  ambassador: (
    <StyledInfoButtonText>
      <Heading
        as="h3"
        $color="var(--color-red-200)"
        $shadowColor="var(--color-red-400)"
      >
        AMBASSADOR
      </Heading>
      <p>
        As an Ambassador, you shape how the world experiences the island –
        putting your favorite spots on the map for Explorers.
      </p>
    </StyledInfoButtonText>
  ),
  admin: (
    <StyledInfoButtonText>
      <Heading
        as="h3"
        $color="var(--color-yellow-200)"
        $shadowColor="var(--color-yellow-400)"
      >
        ADMIN
      </Heading>
      <p>
        As an Admin, you have the responsibility of managing Explorers and
        Admins. Though, you still have the priviledge of creating explorations
        around your favorite spots!
      </p>
    </StyledInfoButtonText>
  ),
};
const ProfileHeader = function ({ userAvatar, userName, userTitle }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(
    userAvatar ?? "/src/assets/images/content/TEMP.png",
  );
  const fileInputRef = useRef(null);
  const submit = useSubmit();
  const { role } = useAuth();

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
          {InfoButtonTexts[role]}
        </Modal>
      )}
    </StyledProfileHeader>
  );
};

export default ProfileHeader;
