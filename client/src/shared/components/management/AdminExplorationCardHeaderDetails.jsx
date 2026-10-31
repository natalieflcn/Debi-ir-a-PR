import { IoPersonCircleSharp } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import Row from "../layout/Row";
import Bold from "../typography/Bold";
import Button from "../ui/Button";
import RouterLink from "../routing/RouterLink";
import { formatDate } from "../../utils/helpers";
import styled from "styled-components";
import { deleteExploration } from "../../../services/explorations";
import { useState } from "react";
import Modal from "../modal/Modal";
import SmallText from "../typography/SmallText";
import Heading from "../typography/Heading";
import SpinnerMini from "../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../features/auth/contexts/AuthContext";
import DeleteConfirmationModal from "../modal/DeleteConfirmationModal";

const StyledRow = styled(Row)`
  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--gap-md);
  }
`;

const ButtonsRow = styled(Row)`
  @media (max-width: 700px) {
    flex-direction: column;
    flex: 1;

    button {
      width: 100%;
    }
  }
`;
function AdminExplorationCardHeaderDetails({
  exploration,
  lastUpdated,
  author = "Unknown",
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { role } = useAuth();
  const navigate = useNavigate();

  const handleConfirmDelete = async function () {
    await deleteExploration(exploration._id);
  };

  const handleDeleteSuccess = async function () {
    navigate(`/${role}/explorations`);
  };

  const handleDeleteOptions = {
    itemName: exploration.name,
    redirect: "the explorations page",
    data: "exploration and related data",
  };

  return (
    <>
      <StyledRow $direction="horizontal" $align="center" $gap="var(--gap-xl)">
        <Row $direction="horizontal" $gap="var(--gap-sm)">
          <IoPersonCircleSharp size={20} color="var(--color-red-300) " />
          <Bold $color="var(--color-dark-200)">Created By {author}</Bold>
        </Row>

        <Row $direction="horizontal" $gap="var(--gap-sm)">
          <FaPencilAlt color="var(--color-red-300)" />
          <Bold $color="var(--color-dark-200)">
            Last Updated {formatDate(lastUpdated)}
          </Bold>
        </Row>
      </StyledRow>
      <ButtonsRow $direction="horizontal" $gap="var(--gap-md)">
        <RouterLink to={`edit`}>
          <Button $variation="darkRed" $size="medium">
            Edit Exploration
          </Button>
        </RouterLink>
        <Button
          $variation="primary"
          $size="medium"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Delete Exploration
        </Button>
      </ButtonsRow>

      {isModalOpen && (
        <DeleteConfirmationModal
          onClose={() => setIsModalOpen(false)}
          onConfirmDelete={handleConfirmDelete}
          onSuccess={handleDeleteSuccess}
          options={handleDeleteOptions}
        />
      )}
    </>
  );
}

export default AdminExplorationCardHeaderDetails;
