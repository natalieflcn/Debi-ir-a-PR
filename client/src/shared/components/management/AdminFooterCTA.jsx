import Button from "../ui/Button";
import RouterLink from "../routing/RouterLink";
import Row from "../layout/Row";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../modal/Modal";
import Heading from "../typography/Heading";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../features/auth/contexts/AuthContext";
import Bold from "../typography/Bold";
import { deleteExplorationLocation } from "../../../services/explorations";
import SpinnerMini from "../ui/SpinnerMini";
import DeleteConfirmationModal from "../modal/DeleteConfirmationModal";

const StyledRow = styled(Row)`
  @media (max-width: 700px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

const Paragraph = styled.p`
  text-align: center;
`;

function AdminFooterCTA({ exploration }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { locationId } = useParams();
  const { role } = useAuth();

  const handleConfirmDelete = async function () {
    await deleteExplorationLocation({
      explorationId: exploration.slug,
      locationId: locationId,
    });
  };

  const handleDeleteSuccess = async function () {
    navigate(`/${role}/explorations/${exploration.slug}`);
  };

  const handleDeleteOptions = {
    itemName: `this location from "${exploration.name}"`,
    redirect: exploration.name,
    data: "location data",
  };

  return (
    <>
      <StyledRow $direction="horizontal" $gap="var(--gap-lg)">
        <RouterLink to="edit">
          <Button $variation="darkRed" $size="medium">
            Edit this Location
          </Button>
        </RouterLink>

        <Button
          $variation="primary"
          $size="medium"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Delete this Location
        </Button>
      </StyledRow>

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

export default AdminFooterCTA;
