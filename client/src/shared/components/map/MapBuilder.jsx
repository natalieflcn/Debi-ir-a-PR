import { useState } from "react";

import styled from "styled-components";

import Image from "../ui/Image";
import Row from "../layout/Row";
import Button from "../ui/Button";
import Modal from "../modal/Modal";
import SmallText from "../typography/SmallText";
import Bold from "../typography/Bold";
import { useMutation } from "@tanstack/react-query";
import { validateLocation } from "../../../services/explorations";

const StyledMapBuilder = styled.div`
  align-self: flex-start;
  flex: 1 1 0;
  gap: var(--gap-md);

  @media (max-width: 690px) {
    align-self: center;
  }
`;

const StyledRow = styled(Row)`
  flex-direction: column;

  @media (max-width: 690px) {
    align-items: center;
  }
`;

function MapBuilder({
  address,
  isAddressReady,
  onValidateAddressFields,
  value,
  onChange,
}) {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate, isPending, error } = useMutation({
    mutationFn: validateLocation,
    onSuccess: ({ data }) => {
      const validated = data.data;

      console.log("MAP BUILDER ON SUCCESS FUNCTION");
      console.log(validated);
      if (validated.coordinates)
        onChange({
          formattedAddress: validated.formattedAddress,
          coordinates: validated?.coordinates,
          placeId: validated?.placeId,
        });
      // if validated, show pin
      // else put pin on zipcode, let drag manually
    },
  });

  const handleGenerate = async () => {
    const ok = await onValidateAddressFields();
    // shows field errors if invalid
    if (!ok) return;
    mutate(address);
  };

  return (
    <StyledMapBuilder>
      <StyledRow $direction="horizontal" $gap="var(--gap-md)" $align="start">
        <Button
          type="button"
          $variation={
            !isAddressReady ? "disabled" : value ? "darkRed" : "primary"
          }
          $size="small"
          onClick={handleGenerate}
          disabled={!isAddressReady || isPending}
        >
          {isPending
            ? "Locating..."
            : `Generate ${value ? "New" : ""} Map Marker`}
        </Button>

        {!isAddressReady && (
          <Bold $color="var(--color-dark-200)">
            Please enter a street, city, and zipcode to generate a map marker.
          </Bold>
        )}

        {error && <Bold>{error.message}</Bold>}
      </StyledRow>
    </StyledMapBuilder>
  );
}

export default MapBuilder;
