import { useState } from "react";
import Modal from "./Modal";
import Row from "../layout/Row";
import Bold from "../typography/Bold";
import SmallText from "../typography/SmallText";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";
import Heading from "../typography/Heading";

function AddressConfirmationModal({
  onConfirmAddress,
  onDenyAddress,
  onClose,
  options, // {enteredAddress, recommendedAddress}
}) {
  return (
    <Modal onClose={onClose}>
      <Row $align="center" $gap="var(--gap-md)">
        <Heading as="h4">Confirm the Location Address</Heading>
        <SmallText>
          Please review the recommended changes. These changes may help
          accurately display your location on a map.
        </SmallText>

        <Bold>You entered: {options.enteredAddress}</Bold>
        <Bold>We recommend: {options.recommendedAddress}</Bold>

        <Row $gap="var(--gap-md)">
          <Button
            $size="small"
            $variation="secondary"
            onClick={() => {
              onConfirmAddress();
              onClose();
            }}
          >
            Accept the New Address
          </Button>
          <Button
            $size="small"
            $variation="primary"
            onClick={() => {
              onDenyAddress();
              onClose();
            }}
          >
            Keep the Original Address
          </Button>
        </Row>

        {/* {status === "deleting" && (
          <Row>
            <SpinnerMini />
          </Row>
        )}

        {status === "error" && (
          <>
            <Bold>There was an error deleting {options.itemName}.</Bold>
            <SmallText>{errorMessage}</SmallText>
          </>
        )}

        {status === "success" && (
          <>
            <Bold>Successfully deleted.</Bold>
            <SmallText>Redirecting you to {options.redirect}...</SmallText>
            <SpinnerMini />
          </>
        )} */}
      </Row>
    </Modal>
  );
}

export default AddressConfirmationModal;
