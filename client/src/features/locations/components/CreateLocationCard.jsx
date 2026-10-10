import styled from "styled-components";
import { useState } from "react";
import { useAuth } from "../../auth/contexts/AuthContext";
import { verifyPRZipcode } from "../../../shared/utils/helpers";
import AppForm from "../../../shared/components/form/AppForm";
import Row from "../../../shared/components/layout/Row";
import CityDropdown from "../../../shared/components/dropdown/CityDropdown";
import Heading from "../../../shared/components/typography/Heading";
import Button from "../../../shared/components/ui/Button";
import ImageUploader from "../../../shared/components/ui/ImageUploader";
import Input from "../../../shared/components/form/Input";
import TextArea from "../../../shared/components/form/TextArea";
import FormField from "../../../shared/components/form/FormField";
import Bold from "../../../shared/components/typography/Bold";
import LocationTagBuilder from "../../../shared/components/form/LocationTagBuilder";
import {
  deleteExplorationLocation,
  updateExplorationLocation,
  validateLocationAddress,
} from "../../../services/explorations";
import { useNavigate } from "react-router-dom";
import DeleteConfirmationModal from "../../../shared/components/modal/DeleteConfirmationModal";
import { useForm, Controller, useWatch } from "react-hook-form";
import AddressConfirmationModal from "../../../shared/components/modal/AddressConfirmationModal";
import MapBuilder from "../../../shared/components/map/MapBuilder";
import LocationMap from "../../../shared/components/map/LocationMap";

const StyledHeading = styled(Heading)`
  flex: 1 1 0;
`;

const StyledRow = styled(Row)`
  flex: 1 1 0;
`;

const StyledTextAreaRow = styled(Row)`
  flex: 1 1 0;
  height: 10rem;
`;

function CreateLocationCard({
  exploration,
  location,
  onSubmit,
  onSubmitSuccess,
  onConfirmDelete,
  onDeleteSuccess,
}) {
  const isEditing = Boolean(location);
  const {
    register,
    control,
    handleSubmit,
    setError,
    clearErrors,
    trigger,
    getValues,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    defaultValues: {
      name: location?.name ?? "",
      street: location?.address?.street ?? "",
      city: location?.address?.city ?? null,
      zipcode: location?.address?.zipcode ?? "",
      map: location?.map ?? null,
      headerImage: location?.headerImage ?? [],
      description: location?.description ?? "",
      images: location?.images ?? [],
      tags: location?.tags ?? [],
    },
  });
  //   const [pendingAddress, setPendingAddress] = useState(null);
  //   const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const [street, city, zipcode] = useWatch({
    control,
    name: ["street", "city", "zipcode"],
  });
  const isAddressReady =
    Boolean(street?.trim()) && Boolean(city) && verifyPRZipcode(zipcode);

  // HANDLING SUBMIT FUNCTIONS
  // Default Submit Function (if onSubmit, onSuccess functions not passed down via props)
  const defaultSubmit = async function (formData) {
    const { data } = await updateExplorationLocation(
      exploration.slug,
      location.slug,
      formData,
    );

    const updatedLocation = data.data;

    navigate(
      `/${user.role}/explorations/${exploration.slug}/locations/${updatedLocation.slug}`,
    );
  };

  // Handler functions to validate address, build payload, and save location
  const handleFormSubmit = async function (formData) {
    clearErrors("root.serverError");

    try {
      //   const { data } = await validateLocationAddress({
      //     street: formData.street,
      //     city: formData.city,
      //     zipcode: formData.zipcode,
      //   });

      //   const validated = await data.data;

      //   const needsReview = validated.found;

      //   // TODO might delete this later
      //   if (needsReview) {
      //     setPendingAddress({ formData, validated });
      //     setIsAddressModalOpen(true);
      // return; // stop here; the modal continues the flow
      //   }

      //   if (onSubmit) {
      //     onSubmit(formData);
      //     if (onSubmitSuccess) onSubmitSuccess();
      //   } else {
      //     await defaultSubmit(formData);
      //   }

      //   console.log("FORM SUBMIT PAYLOAD");
      console.log(formData);

      if (onSubmit) {
        await onSubmit(formData);
        onSubmitSuccess?.();
      } else {
        await defaultSubmit(formData);
      }
      //   await saveLocation(formData);
    } catch (err) {
      console.log(err);
      setError("root.serverError", {
        type: "server",
        message: err.message,
      });
    }
  };

  // Build payload with original data or reformatted data from Google Address Validation API
  const buildPayload = function (formData, validated, useRecommended = true) {
    const [recStreet, recCity, recZipcode] =
      validated.formattedAddress.split(", ");
    const trimmedRecZipcode = recZipcode.slice(3);

    console.log(recStreet, recCity, recZipcode);
    console.log(trimmedRecZipcode);
    return {
      ...formData,
      street: useRecommended && recStreet ? recStreet : formData.street,
      city: useRecommended && recCity ? recCity : formData.city,
      zipcode:
        useRecommended && recZipcode ? trimmedRecZipcode : formData.zipcode,
      coordinates: validated.coordinates,
      placeId: validated.placeId,
    };
  };

  // Submit location and save to database with reviewed address and corresponding coordinates
  const saveLocation = async (payload) => {
    if (onSubmit) {
      await onSubmit(payload);
      onSubmitSuccess?.();
    } else {
      await defaultSubmit(payload);
    }
  };

  // Wrapper function to submit location data without interfering with CreateExploration submission
  const handleLocationSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    handleSubmit(handleFormSubmit)(event);
  };

  // HANDLE CONFIRM LOCATION ADDRESS

  //   const handleConfirmAddress = async function (choice) {
  //     setIsAddressModalOpen(false);

  //     const useRecommended = choice === "recommended";
  //     console.log("CONFIRM ADDRESS PAYLOAD");

  //     const confirmed = buildPayload(
  //       pendingAddress.formData,
  //       pendingAddress.validated,
  //       useRecommended,
  //     );

  //     console.log(useRecommended, confirmed);
  //     try {
  //       await saveLocation(
  //         buildPayload(pendingAddress.formData, pendingAddress.validated, choice),
  //       );
  //     } catch (err) {
  //       setError("root.serverError", { type: "server", message: err.message });
  //     }
  //   };

  //   const handleAddressOptions = {
  //     enteredAddress: `${pendingAddress?.formData?.street}, ${pendingAddress?.formData?.city}, ${pendingAddress?.formData?.zipcode}, Puerto Rico `,
  //     recommendedAddress: pendingAddress?.validated?.formattedAddress,
  //   };

  // HANDLE DELETE LOCATION
  const handleDefaultConfirmDelete = async function () {
    await deleteExplorationLocation({
      explorationId: exploration.slug,
      locationId: location.slug,
    });
  };

  const handleDefaultDeleteSuccess = async function () {
    navigate(`/${user.role}/explorations/${exploration.slug}`);
  };

  const handleDeleteOptions = {
    itemName: `this location from "${exploration?.name ?? "this exploration"}"`,
    redirect: exploration?.name || "this exploration",
    data: "location data",
  };

  return (
    <>
      <AppForm
        formTitle={isEditing ? "EDIT LOCATION" : "CREATE A LOCATION"}
        onSubmit={handleLocationSubmit}
      >
        <Row $gap="var(--gap-lg)">
          {isEditing && exploration?.name && (
            <FormField label="Exploration">
              <StyledHeading as="h6" $color="var(--color-red-300)">
                {exploration?.name ?? exploration}
              </StyledHeading>
            </FormField>
          )}

          <FormField label="Name">
            <StyledRow $gap="var(--gap-xs)">
              <Input
                id="name"
                name="name"
                placeholder="The name of the location"
                {...register("name", {
                  required: "A location name is required.",
                  minLength: {
                    value: 5,
                    message:
                      "A location name must have more than 5 characters.",
                  },
                  maxLength: {
                    value: 40,
                    message:
                      "A location name must have less than 40 characters.",
                  },
                })}
              />
              {errors?.name?.message && <Bold>{errors?.name?.message}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="Street">
            <StyledRow $gap="var(--gap-xs)">
              <Input
                name="street"
                id="street"
                placeholder="The street address of the location"
                {...register("street", {
                  required: "A location street address is required.",
                })}
              />
              {errors?.street?.message && <Bold>{errors?.street.message}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="City">
            <StyledRow $gap="var(--gap-xs)">
              <Controller
                name="city"
                control={control}
                rules={{
                  validate: {
                    required: (city) => (city ? true : "A city is required."),
                  },
                }}
                render={({ field }) => (
                  <CityDropdown
                    name="city"
                    value={field.value}
                    onSelect={field.onChange}
                  />
                )}
              />

              {errors?.city?.message && <Bold>{errors?.city?.message}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="Zipcode">
            <StyledRow $gap="var(--gap-xs)">
              <Input
                name="zipcode"
                id="zipcode"
                placeholder="The zipcode of the location"
                type="text"
                maxLength={10}
                {...register("zipcode", {
                  required: "A location zipcode is required.",
                  validate: {
                    validZipcode: (zipcode) =>
                      verifyPRZipcode(zipcode) ||
                      "Please enter a valid Puerto Rican zipcode.",
                  },
                })}
              />
              {errors?.zipcode?.message && (
                <Bold>{errors?.zipcode?.message}</Bold>
              )}
            </StyledRow>
          </FormField>

          <FormField label="Map">
            <StyledRow $gap="var(--gap-xs)">
              <Controller
                name="map"
                control={control}
                rules={{
                  validate: {
                    required: (map) =>
                      map ? true : "Please generate a map marker.",
                  },
                }}
                render={({ field }) => (
                  <Row $gap="var(--gap-md)">
                    <MapBuilder
                      address={{
                        street: getValues("street"),
                        city: getValues("city"),
                        zipcode: getValues("zipcode"),
                      }}
                      isAddressReady={isAddressReady}
                      onValidateAddressFields={() =>
                        trigger(["street", "city", "zipcode"])
                      }
                      value={field.value}
                      onChange={field.onChange}
                    />
                    <LocationMap />
                  </Row>
                )}
              />
            </StyledRow>
          </FormField>

          <FormField label="Header Image">
            <StyledRow $gap="var(--gap-xs)">
              <Controller
                name="headerImage"
                control={control}
                rules={{}}
                render={({ field }) => (
                  <ImageUploader
                    name="headerImage"
                    multiple={false}
                    maxImages={1}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />

              {errors?.headerImage?.message && (
                <Bold>{errors?.headerImage?.message}</Bold>
              )}
            </StyledRow>
          </FormField>

          <FormField label="Description">
            <StyledTextAreaRow $gap="var(--gap-xs)">
              <TextArea
                name="description"
                id="description"
                placeholder="The description displayed beside the location"
                {...register("description", {
                  required: "A location description is required.",
                  minLength: {
                    value: 50,
                    message:
                      "A location description must have more than 50 characters.",
                  },
                  maxLength: {
                    value: 1000,
                    message:
                      "A location description must have less than 1000 characters.",
                  },
                })}
              />
              {errors?.description?.message && (
                <Bold>{errors?.description?.message}</Bold>
              )}
            </StyledTextAreaRow>
          </FormField>

          <FormField label="Images">
            <StyledRow $gap="var(--gap-xs)">
              <Controller
                name="images"
                control={control}
                rules={{}}
                render={({ field }) => (
                  <ImageUploader
                    name="images"
                    multiple={true}
                    maxImages={3}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />

              {errors?.images?.message && (
                <Bold>{errors?.images?.message}</Bold>
              )}
            </StyledRow>
          </FormField>

          <FormField label="Tags">
            <StyledRow $gap="var(--gap-xs)">
              <Controller
                name="tags"
                control={control}
                rules={{
                  validate: {
                    required: (tags) =>
                      tags.length > 0 || "Please select at least one tag.",
                  },
                }}
                render={({ field }) => (
                  <LocationTagBuilder
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />

              {errors?.tags?.message && <Bold>{errors?.tags?.message}</Bold>}
            </StyledRow>
          </FormField>

          <Row $direction="horizontal" $gap="var(--gap-md)">
            <Button $variation="darkRed" $size="medium" type="submit">
              {!isSubmitting && "Save Changes"}
              {isSubmitting && "Saving Changes..."}
            </Button>

            {isEditing && (
              <Button
                $variation="primary"
                $size="medium"
                type="button"
                onClick={() => {
                  setisDeleteModalOpen(true);
                }}
              >
                Delete Location
              </Button>
            )}
          </Row>
          {isSubmitted && Object.keys(errors).length > 0 && (
            <Bold>Please review your form submission and try again.</Bold>
          )}
        </Row>
      </AppForm>

      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          onClose={() => setisDeleteModalOpen(false)}
          onConfirmDelete={onConfirmDelete || handleDefaultConfirmDelete}
          onSuccess={onDeleteSuccess || handleDefaultDeleteSuccess}
          options={handleDeleteOptions}
        />
      )}

      {/* {isAddressModalOpen && (
        <AddressConfirmationModal
          onClose={() => {
            handleConfirmAddress("entered");
          }}
          onConfirmAddress={handleConfirmAddress}
          options={handleAddressOptions}
        />
      )} */}
    </>
  );
}

export default CreateLocationCard;
