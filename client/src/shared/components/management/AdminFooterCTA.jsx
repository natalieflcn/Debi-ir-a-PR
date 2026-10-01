import Button from "../ui/Button";
import RouterLink from "../routing/RouterLink";
import Row from "../layout/Row";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../ui/Modal";
import Heading from "../typography/Heading";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../features/auth/contexts/AuthContext";
import Bold from "../typography/Bold";
import { deleteExplorationLocation } from "../../../services/explorations";
import SpinnerMini from "../ui/SpinnerMini";

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
  const [isDeleting, setIsDeleting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleDeleteLocation() {
    try {
      await deleteExplorationLocation({
        explorationId: exploration.slug,
        locationId: locationId,
      });
      setIsDeleting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsDeleting(false);
        setIsError(false);
        setErrorMessage("");
        setIsSuccess(false);

        navigate(`/${role}/explorations/${exploration.slug}`);
      }, 1500);
    } catch (err) {
      setIsDeleting(false);
      setIsError(true);
      setErrorMessage(err.message);
    }
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
          onClick={() => {
            setIsModalOpen(true);
            setIsDeleting(true);
          }}
        >
          Delete this Location
        </Button>
      </StyledRow>

      {isModalOpen && (
        <Modal
          onClose={() => {
            setIsModalOpen(false);
            setIsDeleting(false);
            setIsError(false);
            setErrorMessage("");
            setIsSuccess(false);
          }}
        >
          <Row $align="center">
            {isDeleting && (
              <>
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
              </>
            )}

            {isError && (
              <Row $align="center">
                <Bold>There was an error deleting this location.</Bold>
                <Paragraph>{errorMessage}</Paragraph>
              </Row>
            )}

            {isSuccess && (
              <Row $align="center">
                <Bold>You successfully deleted this location.</Bold>
                <Paragraph>Redirecting you to {exploration.name}...</Paragraph>
                <SpinnerMini />
              </Row>
            )}
          </Row>
        </Modal>
      )}
    </>
  );
}

export default AdminFooterCTA;
