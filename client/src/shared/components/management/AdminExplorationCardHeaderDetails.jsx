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

function AdminExplorationCardHeaderDetails({
  exploration,
  lastUpdated,
  author = "Unknown",
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  const { role } = useAuth();
  const navigate = useNavigate();

  // async function handleDeleteExploration(explorationId) {
  //   try {
  //     await deleteExploration(explorationId);
  //     setIsDeleting(false);
  //     setIsSuccess(true);
  //     setTimeout(() => {
  //       navigate(`/${role}/explorations`);
  //     }, 1500);
  //   } catch (err) {
  //     setIsDeleting(false);
  //     setIsError(true);
  //     setErrorMessage(err.message);
  //   }
  // }

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
      <Row $direction="horizontal" $gap="var(--gap-md)">
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
            // setIsDeleting(true);
          }}
        >
          Delete Exploration
        </Button>
      </Row>

      {isModalOpen && (
        <DeleteConfirmationModal
          onClose={() => setIsModalOpen(false)}
          onConfirmDelete={handleConfirmDelete}
          onSuccess={handleDeleteSuccess}
          options={handleDeleteOptions}
        />
        // <Modal
        //   onClose={() => {
        //     setIsModalOpen(false);
        //     setIsDeleting(false);
        //     setIsError(false);
        //     setErrorMessage("");
        //   }}
        // >
        //   <Row $align="center">
        //     {isDeleting && (
        //       <>
        //         <Heading as="h6">
        //           Are you sure you want to delete {exploration.name}?
        //         </Heading>
        //         <SmallText>
        //           This is an irreversible action and all exploration and related
        //           data will be lost.
        //         </SmallText>
        //         <Row $direction="horizontal" $gap="var(--gap-lg)">
        //           <Button
        //             $size="small"
        //             $variation="secondary"
        //             onClick={() => setIsModalOpen(false)}
        //           >
        //             No, Return to exploration
        //           </Button>
        //           <Button
        //             $size="small"
        //             $variation="primary"
        //             onClick={() => handleDeleteExploration(exploration._id)}
        //           >
        //             Yes, Delete this exploration
        //           </Button>
        //         </Row>
        //       </>
        //     )}

        //     {isError && (
        //       <>
        //         <Bold>There was an error deleting this exploration.</Bold>
        //         <SmallText>{errorMessage}</SmallText>
        //         <SmallText>Please try again later.</SmallText>
        //       </>
        //     )}

        //     {isSuccess && (
        //       <>
        //         <Bold>This exploration has been successfully deleted!</Bold>
        //         <SmallText>
        //           Redirecting you back to the Explorations page...
        //         </SmallText>
        //         <SpinnerMini />
        //       </>
        //     )}
        //   </Row>
        // </Modal>
      )}
    </>
  );
}

export default AdminExplorationCardHeaderDetails;
