import { useState } from "react";
import Modal from "./Modal";
import Row from "../layout/Row";
import Bold from "../typography/Bold";
import SmallText from "../typography/SmallText";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";

function DeleteConfirmationModal({
  itemName,
  onConfirmDelete,
  onClose,
  onSuccess,
}) {
  const [status, setStatus] = useState("deleting"); //  deleting || error || success
  const [errorMessage, setErrorMessage] = useState("");

  async function handleConfirmDelete() {
    try {
      await onConfirmDelete();
      setStatus("success");

      setTimeout(() => {
        onSuccess();
      }, 1500);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  }

  async function handleModalClose() {
    onClose();
    setStatus("deleting");
    setErrorMessage("");
  }

  return (
    <Modal onClose={handleModalClose}>
      <Row $align="center" $gap="var(--gap-sm)">
        {status === "deleting" && (
          <>
            <Bold>Are you sure you want to delete {itemName}?</Bold>
            <SmallText>
              This action is irreversible and all data will be lost.
            </SmallText>
            <Row $direction="horizontal" $gap="var(--gap-md)">
              <Button
                $size="small"
                $variation="secondary"
                onClick={handleModalClose}
              >
                Cancel
              </Button>
              <Button
                $size="small"
                $variation="primary"
                onClick={handleConfirmDelete}
              >
                Delete {itemName}
              </Button>
            </Row>
          </>
        )}

        {status === "error" && (
          <>
            <Bold>There was an error deleting {itemName}.</Bold>
            <SmallText>{errorMessage}</SmallText>
          </>
        )}

        {status === "success" && (
          <>
            <Bold>Successfully deleted.</Bold>
            <SmallText>Redirecting you...</SmallText>
            <SpinnerMini />
          </>
        )}
      </Row>
    </Modal>
  );
}

export default DeleteConfirmationModal;
