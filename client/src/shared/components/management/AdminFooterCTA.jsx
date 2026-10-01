import Button from "../ui/Button";
import RouterLink from "../routing/RouterLink";
import Row from "../layout/Row";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../ui/Modal";
import Heading from "../typography/Heading";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../features/auth/contexts/AuthContext";
import { deleteExplorationLocation } from "../../../services/explorations";

const StyledRow = styled(Row)`
  @media (max-width: 700px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;
function AdminFooterCTA({ exploration }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { locationId } = useParams();
  const { role } = useAuth();

  function handleDeleteLocation() {
    setIsModalOpen(false);
    // deleteExplorationLocation({
    //   explorationId: exploration.slug,
    //   locationId: locationId,
    // });
    console.log(exploration.slug, locationId);
    navigate(`/${role}/explorations/${exploration.slug}`);
  }

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
          onClick={() => setIsModalOpen(true)}
        >
          Delete this Location
        </Button>
      </StyledRow>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Row $align="center">
            <Heading as="h6">
              Are you sure you want to delete this location from{" "}
              {exploration.name}?
            </Heading>
            <p>This action is irreversible.</p>
            <Row $direction="horizontal" $gap="var(--gap-lg)">
              <Button
                $size="small"
                $variation="secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                $size="small"
                $variation="primary"
                onClick={handleDeleteLocation}
              >
                Delete Location
              </Button>
            </Row>
          </Row>
        </Modal>
      )}
    </>
  );
}

export default AdminFooterCTA;
