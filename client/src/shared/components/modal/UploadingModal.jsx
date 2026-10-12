import { useState } from "react";
import Modal from "./Modal";
import Row from "../layout/Row";
import Bold from "../typography/Bold";
import SmallText from "../typography/SmallText";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";

function UploadingModal({ isUploading, isSubmitting }) {
  console.log("running uploadingmodal");
  return (
    <Modal>
      <Row $align="center" $gap="var(--gap-md)">
        {isUploading && (
          <>
            <Bold>Uploading Images...</Bold>

            <SmallText>
              Please do not leave this page or your data will be lost.
            </SmallText>
            <SpinnerMini />
          </>
        )}

        {!isUploading && isSubmitting && (
          <>
            <Bold>Saving...</Bold>

            <SmallText>
              Please do not leave this page or your data will be lost.
            </SmallText>
            <SpinnerMini />
          </>
        )}

        {!isSubmitting && (
          <>
            <Bold>Save Complete!</Bold>
            <SmallText>Redirecting you...</SmallText>
          </>
        )}
      </Row>
    </Modal>
  );
}

export default UploadingModal;
