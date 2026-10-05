import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../../auth/contexts/AuthContext";
import {
  createExploration,
  deleteExploration,
  updateExploration,
} from "../../../services/explorations";
import Input from "../../../shared/components/form/Input";
import Button from "../../../shared/components/ui/Button";
import AppForm from "../../../shared/components/form/AppForm";
import TextArea from "../../../shared/components/form/TextArea";
import ImageUploader from "../../../shared/components/ui/ImageUploader";
import FormField from "../../../shared/components/form/FormField";
import LocationBuilder from "../../../shared/components/form/LocationBuilder";
import CurrentLocations from "../../../shared/components/form/CurrentLocations";
import Row from "../../../shared/components/layout/Row";
import styled from "styled-components";
import RouterLink from "../../../shared/components/routing/RouterLink";
import { FaArrowLeft } from "react-icons/fa";
import ExplorationTagBuilder from "../../../shared/components/form/ExplorationTagBuilder";
import Bold from "../../../shared/components/typography/Bold";
import FeaturedFormToggle from "../../../shared/components/form/FeaturedFormToggle";
import BadgeBuilder from "../../../shared/components/form/BadgeBuilder";
import SpinnerMini from "../../../shared/components/ui/SpinnerMini";
import Modal from "../../../shared/components/modal/Modal";
import Heading from "../../../shared/components/typography/Heading";
import DeleteConfirmationModal from "../../../shared/components/modal/DeleteConfirmationModal";

const StyledRow = styled(Row)`
  flex: 1 1 0;

  @media (max-width: 690px) {
    text-align: center;
  }
`;

const StyledParagraph = styled.p`
  color: var(--color-dark-200);
`;

const StyledTextAreaRow = styled(Row)`
  flex: 1 1 0;
  height: 10rem;

  @media (max-width: 690px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  text-align: center;
`;

function CreateExplorationCard({ exploration }) {
  const isEditing = Boolean(exploration);

  const {
    register,
    control,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: exploration?.name ?? "",
      headerImage: exploration?.headerImage ?? [],
      tagline: exploration?.tagline ?? "",
      description: exploration?.description ?? "",
      images: exploration?.images ?? [],
      locations: exploration?.locations ?? [],
      badge: exploration?.badge ?? null,
      tags: exploration?.tags ?? [],
      featured: exploration?.featured ?? false,
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

  // function handleAddLocation(formData) {
  //   setFormErrors((prev) => ({ ...prev, locations: "" }));
  //   setLocations((prev) => [
  //     ...prev,
  //     { ...formData, tempId: `loc_${crypto.randomUUID()}` },
  //   ]);
  // }

  // function handleDeleteLocation(tempId) {
  //   console.log(tempId);
  //   setFormErrors((prev) => ({ ...prev, locations: "" }));
  //   setLocations((prev) =>
  //     prev.filter((loc) => (loc._id ?? loc.tempId) !== tempId),
  //   );
  // }

  // function handleEditLocation(tempId, formData) {
  //   setFormErrors((prev) => ({ ...prev, locations: "" }));
  //   setLocations((prev) =>
  //     prev.map((loc) =>
  //       (loc._id ?? loc.tempId) === tempId ? { ...loc, ...formData } : loc,
  //     ),
  //   );
  // }

  // function handleSetBadge(value) {
  //   setFormErrors((prev) => ({ ...prev, badge: "" }));
  //   setBadge(value);
  // }
  // function handleSetHeaderImage(value) {
  //   setFormErrors((prev) => ({ ...prev, headerImage: "" }));
  //   setHeaderImage(value);
  // }

  // function handleSetImages(value) {
  //   setFormErrors((prev) => ({ ...prev, images: "" }));
  //   setImages(value);
  // }

  // function handleSetTags(value) {
  //   setFormErrors((prev) => ({ ...prev, tags: "" }));
  //   setTags(value);
  // }

  const handleFormSubmit = async function (formData) {
    const submissionData = {
      ...formData,
      ...(isEditing && { _id: exploration._id }),
    };

    try {
      const { data } = isEditing
        ? await updateExploration(submissionData)
        : await createExploration(submissionData);

      navigate(`/${user.role}/explorations/${data.data.slug}`);
    } catch (err) {
      let errorMessage = err.message;

      if (err.message.startsWith("E11000 duplicate key error"))
        errorMessage =
          "An exploration already exists with this name. Please create an exploration with a different name.";
    }
  };

  const handleConfirmDelete = async function () {
    await deleteExploration(exploration._id);
  };

  const handleDeleteSuccess = async function () {
    navigate(`/${user.role}/explorations`);
  };

  const handleDeleteOptions = {
    itemName: exploration?.name,
    redirect: "the explorations page",
    data: "exploration and related data",
  };

  return (
    <>
      <Row $gap="var(--gap-lg)">
        {exploration ? (
          <RouterLink to={`/${user.role}/explorations/${exploration.slug}`}>
            <Button $size="small" $variation="darkRed">
              <FaArrowLeft size={12} /> Back to{" "}
              {exploration?.name ?? "Exploration"}
            </Button>
          </RouterLink>
        ) : (
          <RouterLink to={`/${user.role}/explorations`}>
            <Button $size="small" $variation="darkRed">
              <FaArrowLeft size={12} /> Back to Explorations
            </Button>
          </RouterLink>
        )}

        <AppForm
          formTitle={isEditing ? "EDIT EXPLORATION" : "CREATE AN EXPLORATION"}
          onSubmit={handleSubmit(handleFormSubmit, (errors) =>
            console.log("FORM VALIDATION ERRORS:", errors),
          )}
        >
          <Row $gap="var(--gap-lg)">
            <FormField label="Name">
              <StyledRow $gap="var(--gap-xs)">
                <Input
                  id="name"
                  placeholder="The title of the exploration"
                  {...register("name", {
                    required: "An exploration name is required.",
                    minLength: {
                      value: 5,
                      message:
                        "An exploration name must have more than 5 characters.",
                    },
                    maxLength: {
                      value: 40,
                      message:
                        "An exploration name must have less than 40 characters.",
                    },
                  })}
                />

                {errors?.name?.message && <Bold>{errors?.name?.message}</Bold>}
              </StyledRow>
            </FormField>

            <FormField label="Header Image">
              <StyledRow $gap="var(--gap-xs)">
                <Controller
                  name="headerImage"
                  control={control}
                  rules={{
                    validate: {
                      // required: (locations) =>
                      //   locations.length > 0 ||
                      //   "Please provide at least one location.",
                      // maxLength: (locations) =>
                      //   locations.length === 1 ||
                      //   "An exploration can only have one header image.",
                    },
                  }}
                  render={({ field }) => (
                    <ImageUploader
                      name="headerImage"
                      value={field.value}
                      multiple={false}
                      maxImages={1}
                      onChange={field.onChange}
                    />
                  )}
                />

                {errors?.headerImage?.message && (
                  <Bold>{errors?.headerImage?.message}</Bold>
                )}
              </StyledRow>
            </FormField>

            <FormField label="Tagline">
              <StyledRow $gap="var(--gap-xs)">
                <Input
                  id="tagline"
                  placeholder="The short description displayed on the Explorations page"
                  {...register("tagline", {
                    required: "Please provide a tagline.",
                    minLength: {
                      value: 15,
                      message:
                        "An exploration tagline must have more than 15 characters.",
                      maxLength: {
                        value: 175,
                        message:
                          "An exploration tagline must have less than 175 characters.",
                      },
                    },
                  })}
                />

                {errors?.tagline?.message && (
                  <Bold>{errors?.tagline?.message}</Bold>
                )}
              </StyledRow>
            </FormField>

            <FormField label="Description">
              <StyledTextAreaRow $gap="var(--gap-xs)">
                <TextArea
                  id="description"
                  placeholder="The long description shown on the Exploration page"
                  {...register("description", {
                    required: "Please provide a description.",
                    minLength: {
                      value: 50,
                      message:
                        "An exploration description must have more than 50 characters.",
                      maxLength: {
                        value: 1000,
                        message:
                          "An exploration description must have less than 1000 characters.",
                      },
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
                  rules={{
                    validate: {
                      // required: (locations) =>
                      //   locations.length > 0 ||
                      //   "Please provide at least one location.",
                    },
                  }}
                  render={({ field }) => (
                    <ImageUploader
                      name="images"
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

            <FormField label="Locations">
              <StyledRow $gap="var(--gap-md)">
                <Controller
                  name="locations"
                  control={control}
                  rules={{
                    validate: {
                      required: (locations) =>
                        locations.length > 0 ||
                        "Please provide at least one location.",
                      maxLocations: (locations) =>
                        locations.length <= 10 ||
                        "An exploration can have at most 10 locations.",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <LocationBuilder
                        exploration={exploration || getValues("name")}
                        locations={field.value}
                        onAdd={(location) =>
                          field.onChange([...field.value, location])
                        }
                      />

                      <CurrentLocations
                        locations={field.value}
                        onEdit={(updatedLocation) => {
                          field.onChange(
                            field.value.map((location) =>
                              location._id === updatedLocation._id
                                ? updatedLocation
                                : location,
                            ),
                          );
                        }}
                        onDelete={(locationId) => {
                          field.onChange(
                            field.value.filter(
                              (location) => location._id !== locationId,
                            ),
                          );
                        }}
                        exploration={exploration || null}
                      />
                    </>
                  )}
                />
                {errors?.locations?.message && (
                  <Bold>{errors?.locations?.message}</Bold>
                )}
              </StyledRow>
            </FormField>

            <FormField label="Badge">
              <StyledRow $gap="var(--gap-xs)">
                <Controller
                  name="badge"
                  control={control}
                  rules={{ required: "Please create a badge." }}
                  render={({ field }) => (
                    <BadgeBuilder
                      value={field.value}
                      onSelect={field.onChange}
                    />
                  )}
                />

                {errors?.badge?.message && (
                  <Bold>{errors?.badge?.message}</Bold>
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
                      minLength: (tags) =>
                        tags.length >= 1 ||
                        "Please select at least one exploration tag.",
                    },
                  }}
                  render={({ field }) => (
                    <ExplorationTagBuilder
                      exploration={exploration || null}
                      tags={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors?.tags?.message && <Bold>{errors?.tags?.message}</Bold>}
              </StyledRow>
            </FormField>

            <FormField label="Featured">
              <StyledRow $align="start">
                <Controller
                  name="featured"
                  control={control}
                  render={({ field }) => (
                    <FeaturedFormToggle
                      featured={field.value}
                      onFeatured={field.onChange}
                    />
                  )}
                />
              </StyledRow>
            </FormField>

            <Row $direction="horizontal" $gap="var(--gap-md)">
              <Button $variation="darkRed" $size="medium" type="submit">
                {!isSubmitting &&
                  (isEditing ? "Save Changes" : "Create Exploration")}
                {isSubmitting && "Saving Exploration..."}
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
                  Delete Exploration
                </Button>
              )}
            </Row>
            {errors && (
              <Bold>Please review your form submission and try again.</Bold>
            )}
          </Row>
        </AppForm>
      </Row>

      {isModalOpen && (
        <DeleteConfirmationModal
          onClose={() => setIsModalOpen(false)}
          onConfirmDelete={handleConfirmDelete}
          onSuccess={handleDeleteSuccess}
          options={handleDeleteOptions}
        />
      )}
    </>
  );
}

export default CreateExplorationCard;
