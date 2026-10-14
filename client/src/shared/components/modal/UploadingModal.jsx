import { useState } from "react";
import Modal from "./Modal";
import Row from "../layout/Row";
import Bold from "../typography/Bold";
import SmallText from "../typography/SmallText";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";

function UploadingModal({ isUploading, isSubmitting, errors, onClose }) {
  function handleClose() {
    if (!errors?.root?.serverError?.message) return;

    onClose();
  }
  return (
    <Modal onClose={handleClose}>
      <Row $align="center" $gap="var(--gap-md)">
        {isUploading && !errors?.root?.serverError?.message && (
          <>
            <Bold>Uploading Images...</Bold>

            <SmallText>
              Please do not leave this page or your data will be lost.
            </SmallText>
            <SpinnerMini />
          </>
        )}

        {!isUploading &&
          isSubmitting &&
          !errors?.root?.serverError?.message && (
            <>
              <Bold>Saving...</Bold>

              <SmallText>
                Please do not leave this page or your data will be lost.
              </SmallText>
              <SpinnerMini />
            </>
          )}

        {!isSubmitting && !errors?.root?.serverError?.message && (
          <>
            <Bold>Save Complete!</Bold>
            <SmallText>Redirecting you...</SmallText>
          </>
        )}

        {!isSubmitting && errors?.root?.serverError?.message && (
          <>
            <Bold>There was an error.</Bold>
            <SmallText>{errors?.root?.serverError?.message}</SmallText>
          </>
        )}
      </Row>
    </Modal>
  );
}

export default UploadingModal;
