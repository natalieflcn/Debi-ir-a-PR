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
import { useForm, Controller } from "react-hook-form";

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

    isSubmitted,
    formState: { errors, isSubmitting },
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

  console.log("CREATE LOCATION CARD");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

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

  const handleFormSubmit = async function (formData) {
    clearErrors("root.serverError");

    try {
      //   const submissionData = {
      //     name: formData.name,
      //     headerImage: formData.headerImage,
      //     description: formData.description,
      //     images: formData.images,
      //     tags: formData.tags,
      //     address: {
      //       city: formData.city,
      //       street: formData.street,
      //       zipcode: formData.zipcode,
      //     },
      //   };
      //   const x = geocodeLocationAddress({explorationId: exploration.slug, loc})

      await validateLocationAddressData({
        street: formData.street,
        city: formData.city,
        zipcode: formData.zipcode,
      });

      if (onSubmit) {
        onSubmit(formData);
        if (onSubmitSuccess) onSubmitSuccess();
      } else {
        await defaultSubmit(formData);
      }
    } catch (err) {
      let errorMessage = err.message;

      console.log(err);
      setError("root.serverError", {
        type: "server",
        message: errorMessage,
      });
    }
  };

  const validateLocationAddressData = async function ({
    street,
    city,
    zipcode,
  }) {
    await validateLocationAddress({ street, city, zipcode });
    // await geocodeLocationAddress({
    //   street: getValues("street"),
    //   city: getValues("city"),
    //   zipcode: getValues("zipcode"),
    // });
  };

  const handleLocationSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    handleSubmit(handleFormSubmit)(event);
  };

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
                  register: "A location description is required.",
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
                  setIsModalOpen(true);
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

      {isModalOpen && (
        <DeleteConfirmationModal
          onClose={() => setIsModalOpen(false)}
          onConfirmDelete={onConfirmDelete || handleDefaultConfirmDelete}
          onSuccess={onDeleteSuccess || handleDefaultDeleteSuccess}
          options={handleDeleteOptions}
        />
      )}
    </>
  );
}

export default CreateLocationCard;
