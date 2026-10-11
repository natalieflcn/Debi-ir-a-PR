import styled from "styled-components";
import Image from "../ui/Image";
import Row from "../layout/Row";
import Heading from "../typography/Heading";
import {
  IoIosInformationCircleOutline,
  IoIosInformationCircle,
} from "react-icons/io";
import { useRef, useState } from "react";
import Modal from "../modal/Modal";
import Button from "../ui/Button";
import { useSubmit } from "react-router-dom";
import CondensedTable from "../ui/CondensedTable";
import { useAuth } from "../../../features/auth/contexts/AuthContext";
import { updateMe, updateUserInformation } from "../../../services/users";
import Input from "../form/Input";
import Bold from "../typography/Bold";
import { capitalize } from "../../utils/helpers";
import { resolveImages } from "../../../services/uploads";
import SpinnerMini from "../ui/SpinnerMini";

const StyledProfileHeader = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 25% 1fr;
  gap: var(--gap-xl);

  @media (max-width: 800px) {
    grid-template-columns: 35% 1fr;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column-reverse;
  }
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

const StyledImage = styled(Image)`
  @media (max-width: 800px) {
    width: 10rem;
  }
`;
const explorerTitlesTable = {
  columns: [
    { id: "title", heading: "Explorer Title" },
    { id: "milestones", heading: "Milestones" },
  ],
  rows: [
    { title: "Baby Turista", milestones: "0-1 Explorations" },
    { title: "Island Wanderer", milestones: "1-3 Explorations" },
    { title: "Tropical Cruiser", milestones: "3-5 Explorations" },
    { title: "Fluttering Mariposa", milestones: "5-10 Explorations" },
    { title: "Coqui Crawler", milestones: "10-15 Explorations" },
    { title: "Brutal Bouncer", milestones: "15-20 Explorations" },
    { title: "Barrio Member", milestones: "20-25 Explorations" },
    { title: "Taino Trailblazer", milestones: "25-30 Explorations" },
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

const ImageContainer = styled.div`
  width: 18rem;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: var(--border-radius-md);
`;

const ProfileHeader = function ({ user, title }) {
  // const { user, role } = useAuth();
  // const { user } = profileLoader();
  // console.log(user);
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState(user.name);
  const [errors, setErrors] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatarPreviewSrc, setAvatarPreviewSrc] = useState(
    user?.avatar?.url ?? "/src/assets/images/content/TEMP.png",
  );
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const { user: myUser, updateUser } = useAuth();
  const isMyProfile = myUser._id === user._id;

  // Handle Name Functions
  const handleSetName = function (value) {
    setErrors((prev) => ({ ...prev, name: "" }));
    setName(value);
  };

  const handleNameSubmit = async function (e) {
    e.preventDefault();

    if (!name.trim()) errors.name = "Please enter your name.";

    const { data } = isMyProfile
      ? await updateMe({ name: name })
      : await updateUserInformation(user._id, { name: name });

    if (isMyProfile) updateUser(data.data);

    setIsEditingName(false);
  };

  const handleNameCancel = function () {
    setName(user.name);
    setIsEditingName(false);
    setErrors((prev) => ({ ...prev, name: "" }));
  };

  // Handle Avatar Functions
  const fileInputRef = useRef(null);

  async function handleAvatarChange(e) {
    const file = e.target.files[0];
    e.target.value = "";
    if (!file) return;

    if (!file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        avatar: "Please choose an image under 5 MB.",
      }));
      return;
    }

    // Grabbing the current avatar URL in case new image upload fails
    const previousAvatarSrc = avatarPreviewSrc;

    // Preparing to upload new avatar image
    const previewUrl = URL.createObjectURL(file);

    setIsUploadingAvatar(true);
    setErrors((prev) => ({ ...prev, avatar: "" }));

    // TODO adjust to accomodate for admins/ambassadors changing users avatars
    try {
      const [avatar] = await resolveImages([file], "user"); // { url, publicId }

      const { data } = isMyProfile
        ? await updateMe({ avatar })
        : await updateUserInformation(user._id, { avatar });

      if (isMyProfile) updateUser(data.data); // keep auth context in sync

      setAvatarPreviewSrc(avatar.url); // update state
    } catch (err) {
      setAvatarPreviewSrc(previousAvatarSrc); // roll back the preview
      setErrors((prev) => ({ ...prev, avatar: err.message }));
    } finally {
      URL.revokeObjectURL(previewUrl);
      setIsUploadingAvatar(false);
    }
  }

  return (
    <StyledProfileHeader>
      <Row $gap="var(--gap-md)">
        <ImageContainer>
          {isUploadingAvatar ? (
            <SpinnerMini />
          ) : (
            <Image src={avatarPreviewSrc} $width="100%" $height="auto" />
          )}
        </ImageContainer>

        <HiddenInput
          ref={fileInputRef}
          type="file"
          accept="image/*"
          name="avatar"
          onChange={handleAvatarChange}
        />

        <Row $gap="var(--gap-xs)">
          <Button
            $variation={isUploadingAvatar ? "darkYellow" : "yellow"}
            $size="small"
            onClick={() => fileInputRef.current.click()}
            disabled={isUploadingAvatar}
          >
            {isUploadingAvatar ? "Uploading..." : "Change Avatar"}
          </Button>
          {errors?.avatar && (
            <Bold $color="var(--color-light-0)">{errors?.avatar}</Bold>
          )}
        </Row>
      </Row>

      <Row $gap="var(--gap-sm)">
        {isEditingName ? (
          <Row $gap="var(--gap-md)" $direction="horizontal">
            <Input
              name="name"
              value={name}
              onChange={(e) => handleSetName(e.target.value)}
            />
            {errors?.name && <Bold>{errors?.name}</Bold>}

            <Row $direction="horizontal" $gap="var(--gap-md)">
              <Button
                type="submit"
                $variation="secondary"
                $size="small"
                onClick={handleNameSubmit}
              >
                Save
              </Button>
              <Button
                type="button"
                $variation="primary"
                $size="small"
                onClick={handleNameCancel}
              >
                Cancel
              </Button>
            </Row>
          </Row>
        ) : (
          <Row $gap="var(--gap-lg)" $direction="horizontal" $align="start">
            <Heading as="h2">{name.toUpperCase()}</Heading>
            <Button
              $size="extraSmall"
              $variation="yellow"
              onClick={() => setIsEditingName(true)}
            >
              Edit Name
            </Button>
          </Row>
        )}

        <Row $direction="horizontal" $align="flex-start" $gap="var(--gap-sm)">
          <Heading as="h5" $color="var(--color-light-0)">
            {title ?? user.title}
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
          {InfoButtonTexts[user.role]}
        </Modal>
      )}
    </StyledProfileHeader>
  );
};

export default ProfileHeader;
