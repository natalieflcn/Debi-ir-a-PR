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
  onClose,
  options, // {enteredAddress, recommendedAddress}
}) {
  return (
    <Modal onClose={onClose}>
      <Row $align="center" $gap="var(--gap-lg)">
        <Heading as="h5" $color="var(--color-red-300)">
          Confirm the Location Address
        </Heading>
        <Row $gap="var(--gap-xs)" $align="center">
          <SmallText>Please review the recommended changes.</SmallText>
          <SmallText>
            These changes may help accurately display your location on a map.
          </SmallText>
        </Row>

        <Row $gap="var(--gap-md)">
          <Row $gap="var(--gap-xs)" $align="center">
            <Bold $color="var(--color-red-300)">You entered:</Bold>
            <p>{options.enteredAddress}</p>
          </Row>

          <Row $gap="var(--gap-xs)" $align="center">
            <Bold $color="var(--color-red-200)">We recommend:</Bold>
            <p>{options.recommendedAddress}</p>
          </Row>
        </Row>

        <Row $gap="var(--gap-md)" $direction="horizontal">
          <Button
            $size="medium"
            $variation="secondary"
            onClick={() => {
              onConfirmAddress("recommended");
            }}
          >
            Accept the New Address
          </Button>
          <Button
            $size="medium"
            $variation="primary"
            onClick={() => {
              onConfirmAddress("entered");
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
