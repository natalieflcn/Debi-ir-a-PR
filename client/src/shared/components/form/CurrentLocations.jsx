import styled from "styled-components";
import Row from "../layout/Row";
import Heading from "../typography/Heading";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
// import LocationForm from "./LocationForm";
import Bold from "../typography/Bold";
import CreateLocationCard from "../../../features/locations/components/CreateLocationCard";
import DeleteConfirmationModal from "../modal/DeleteConfirmationModal";

const StyledRow = styled(Row)`
  flex: 1 1 0;

  @media (max-width: 600px) {
    gap: var(--gap-md);
  }
`;

const LocationRow = styled(Row)`
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LocationNameRow = styled(Row)`
  overflow-wrap: anywhere;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: var(--gap-xs);
    h5,
    h6 {
      font-size: var(--font-size-xs);
    }
  }
`;
function CurrentLocations({ locations, exploration, onEdit, onDelete }) {
  const [editingLocation, setEditingLocation] = useState(null);
  const [deletingLocation, setDeletingLocation] = useState(null);

  const hasLocations = locations.length > 0;

  console.log("current locations: EDITINGLOCATION, DELETINGLOCATION");
  console.log(editingLocation, deletingLocation);
  function getLocationId(location) {
    return location?._id ?? location.tempId;
  }

  const handleDeleteOptions = {
    itemName: `this location from "${exploration?.name ?? "this exploration"}"`,
    redirect: exploration?.name || "this exploration",
    data: "location data",
  };

  return (
    <>
      {!hasLocations && (
        <Bold $color="var(--color-red-300)">No locations added yet.</Bold>
      )}
      {hasLocations && (
        <Row $gap="var(--gap-lg)">
          {locations.map((location, i) => (
            <LocationRow
              key={i}
              $gap="var(--gap-sm)"
              $direction="horizontal"
              $align="flex-start"
            >
              <LocationNameRow $direction="horizontal" $gap="var(--gap-sm)">
                <Heading as="h5" $color="var(--color-red-300)">
                  {i + 1}
                </Heading>
                <Heading as="h6" $color="var(--color-red-400)">
                  {location.name}
                </Heading>
              </LocationNameRow>
              <StyledRow
                $align="flex-end"
                $direction="horizontal"
                $gap="var(--gap-lg)"
              >
                <Button
                  type="button"
                  $variation="secondary"
                  $size="extraSmall"
                  onClick={(e) => {
                    e.preventDefault();
                    setEditingLocation(location);
                  }}
                >
                  Edit
                </Button>

                <Button
                  type="button"
                  $variation="primary"
                  $size="extraSmall"
                  onClick={(e) => {
                    e.preventDefault();
                    setDeletingLocation(getLocationId(location));
                  }}
                >
                  Delete
                </Button>
              </StyledRow>
            </LocationRow>
          ))}
        </Row>
      )}

      {editingLocation && (
        <Modal $width="60%" onClose={() => setEditingLocation(null)}>
          <CreateLocationCard
            exploration={exploration}
            location={editingLocation}
            onSubmit={(formData) => {
              onEdit(getLocationId(editingLocation), formData);
              setEditingLocation(null);
            }}
            onConfirmDelete={() => {
              onDelete(getLocationId(editingLocation));
            }}
            onDeleteSuccess={() => {
              setEditingLocation(null);
            }}
          />
        </Modal>
      )}
      {
        deletingLocation && (
          <DeleteConfirmationModal
            onClose={() => setDeletingLocation(null)}
            onConfirmDelete={() => onDelete(deletingLocation)}
            onSuccess={() => setDeletingLocation(null)}
            options={handleDeleteOptions}
          />
        )

        /* 
      {deletingLocation && (
        <Modal onClose={() => setDeletingLocation(null)}>
          <Row $align="center">
            <Heading as="h6">
              Are you sure you want to delete this location from{" "}
              {exploration?.name ?? "this exploration"}?
            </Heading>
            <p>This action is irreversible.</p>
            <Row $direction="horizontal" $gap="var(--gap-lg)">
              <Button
                $size="small"
                $variation="secondary"
                onClick={() => setDeletingLocation(null)}
              >
                Cancel
              </Button>
              <Button
                $size="small"
                $variation="primary"
                onClick={() => {
                  onDelete(deletingLocation.id);
                  setDeletingLocation(null);
                }}
              >
                Delete Location
              </Button>
            </Row>
          </Row>
        </Modal> */
      }
      {/* )} */}
    </>
  );
}

export default CurrentLocations;
