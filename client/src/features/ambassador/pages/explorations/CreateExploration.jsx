import Input from "../../../../shared/components/form/Input";
import Button from "../../../../shared/components/ui/Button";

import AppForm from "../../../../shared/components/form/AppForm";
import FormField from "../../../../shared/components/form/FormField";
import TextArea from "../../../../shared/components/form/TextArea";
import ImageUploader from "../../../../shared/components/form/ImageUploader";
import { useState } from "react";
import LocationBuilder from "../../../../shared/components/form/LocationBuilder";
import CurrentLocations from "../../../../shared/components/form/CurrentLocations";

import fakeExplorationData from "../../../explorer/pages/explorations/fakeExplorationData";
import Row from "../../../../shared/components/layout/Row";
import styled from "styled-components";
import CityDropdown from "../../../../shared/components/dropdown/CityDropdown";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { FaArrowLeft } from "react-icons/fa";
import ExplorationTagBuilder from "../../../../shared/components/form/ExplorationTagBuilder";
import Bold from "../../../../shared/components/typography/Bold";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import FeaturedFormToggle from "../../../../shared/components/form/FeaturedFormToggle";
import BadgeBuilder from "../../../../shared/components/form/BadgeBuilder";
import { useAuth } from "../../../auth/contexts/AuthContext";
import {
  createExploration,
  updateExploration,
} from "../../../../services/explorations";

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

function CreateExploration() {
  const { exploration } = useLoaderData() || "";
  const isEditing = Boolean(exploration);

  const [name, setName] = useState(isEditing ? exploration.name : "");
  const [headerImage, setHeaderImage] = useState(
    isEditing ? exploration.headerImage : [],
  );
  // const [startingCity, setStartingCity] = useState(
  //   isEditing ? exploration.startingCity : null,
  // );
  const [tagline, setTagline] = useState(isEditing ? exploration.tagline : "");
  const [description, setDescription] = useState(
    isEditing ? exploration.description : "",
  );
  const [images, setImages] = useState(isEditing ? exploration.images : []);
  const [locations, setLocations] = useState(
    isEditing ? exploration.locations : [],
  );
  const [badge, setBadge] = useState(isEditing ? exploration.badge : null);
  const [tags, setTags] = useState(isEditing ? exploration.tags : []);
  const [featured, setFeatured] = useState(
    isEditing ? exploration.featured : false,
  );
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  function handleAddLocation(formData) {
    setFormErrors((prev) => ({ ...prev, locations: "" }));
    setLocations((prev) => [
      ...prev,
      { ...formData, id: `loc_${crypto.randomUUID()}` },
    ]);
  }

  function handleDeleteLocation(id) {
    setFormErrors((prev) => ({ ...prev, locations: "" }));
    setLocations((prev) => prev.filter((l) => l.id !== id));
  }

  function handleEditLocation(id, formData) {
    setFormErrors((prev) => ({ ...prev, locations: "" }));
    setLocations((prev) =>
      prev.map((l) => (l.id === id ? { ...l, ...formData } : l)),
    );
  }

  function handleSetBadge(value) {
    setFormErrors((prev) => ({ ...prev, badge: "" }));
    setBadge(value);
  }
  function handleSetHeaderImage(value) {
    setFormErrors((prev) => ({ ...prev, headerImage: "" }));
    setHeaderImage(value);
  }

  function handleSetImages(value) {
    setFormErrors((prev) => ({ ...prev, images: "" }));
    setImages(value);
  }

  function handleSetTags(value) {
    setFormErrors((prev) => ({ ...prev, tags: "" }));
    setTags(value);
  }

  const handleSubmit = async function (e) {
    e.preventDefault();

    const errors = {};

    if (!name.trim()) errors.name = "An exploration name is required.";
    else if (name.trim().length < 5)
      errors.name = "An exploration name must have more than 5 characters.";
    else if (name.trim().length > 40)
      errors.name = "An exploration name must have less than 40 characters.";

    // if (headerImage.length < 1)
    //   errors.headerImage = "Please select a header image.";
    if (!tagline.trim()) errors.tagline = "Please provide a tagline.";
    else if (tagline.trim().length < 15)
      errors.tagline =
        "An exploration tagline must have more than 15 characters.";
    else if (tagline.trim().length > 175)
      errors.tagline =
        "An exploration tagline must have less than 175 characters.";

    if (!description.trim())
      errors.description = "Please provide a description.";
    else if (description.trim().length < 50)
      errors.description =
        "An exploration description must have more than 50 characters.";
    else if (description.trim().length > 1000)
      errors.description =
        "An exploration description must have less than 1000 characters.";

    // if (images.length < 1) errors.images = "Please provide at least one image.";

    if (locations.length < 1)
      errors.locations = "Please provide at least one location.";
    else if (locations.length > 10)
      errors.locations = "An exploration can have at most 10 locations.";

    if (!badge) errors.badge = "Please create a badge.";

    if (tags.length < 1)
      errors.tags = "Please select at least one exploration tag.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log(formErrors);
    const formData = {
      name,
      // startingCity,
      // cities: locations.map...
      headerImage,
      tagline,
      description,
      images,
      cities: locations.map((loc) => loc.city),
      locations,
      badge,
      tags,
      featured,
      createdBy: user._id,
    };

    if (isEditing) {
      formData._id = exploration._id;
      formData.updatedBy = user._id;
    } else {
      formData.createdBy = user._id;
    }

    console.log(formData);

    setIsSubmitting(true);
    try {
      const { data } = isEditing
        ? await updateExploration(formData)
        : await createExploration(formData);

      navigate(`/ambassador/explorations/${data.data.slug}`);
    } catch (err) {
      let errorMessage = err.message;

      if (err.message.startsWith("E11000 duplicate key error"))
        errorMessage =
          "An exploration already exists with this name. Please create an exploration with a different name.";

      setFormErrors((prev) => ({
        ...prev,
        submit: errorMessage,
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Row $gap="var(--gap-lg)">
      {exploration ? (
        <RouterLink to={`/ambassador/explorations/${exploration.slug}`}>
          <Button $size="small" $variation="darkRed">
            <FaArrowLeft size={12} /> Back to{" "}
            {exploration?.name ?? "Exploration"}
          </Button>
        </RouterLink>
      ) : (
        <RouterLink to="/ambassador/explorations">
          <Button $size="small" $variation="darkRed">
            <FaArrowLeft size={12} /> Back to Explorations
          </Button>
        </RouterLink>
      )}

      <AppForm
        formTitle={isEditing ? "EDIT EXPLORATION" : "CREATE AN EXPLORATION"}
        // action={isEditing ? `/explorations/${exploration.id}` : "/explorations"}
        // method={isEditing ? "patch" : "post"}
        onSubmit={handleSubmit}
      >
        <Row $gap="var(--gap-lg)">
          <FormField label="Name">
            <StyledRow $gap="var(--gap-xs)">
              <Input
                name="name"
                placeholder="The title of the exploration"
                value={name}
                onChange={(e) => {
                  setFormErrors((prev) => ({ ...prev, name: "" }));
                  setName(e.target.value);
                }}
              />
              {formErrors.name && <Bold>{formErrors.name}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="Header Image">
            <StyledRow $gap="var(--gap-xs)">
              <ImageUploader
                name="headerImage"
                multiple={false}
                maxImages={1}
                value={headerImage}
                onChange={handleSetHeaderImage}
              />
              {formErrors.headerImage && <Bold>{formErrors.headerImage}</Bold>}
            </StyledRow>
          </FormField>

          {/* <FormField label="Starting City">
            <StyledRow $gap="var(--gap-xs)">
              <CityDropdown
                name="city"
                value={startingCity}
                onSelect={setStartingCity}
              />
              {formErrors.startingCity && (
                <Bold>{formErrors.startingCity}</Bold>
              )}
            </StyledRow>
          </FormField> */}

          <FormField label="Tagline">
            <StyledRow $gap="var(--gap-xs)">
              <Input
                name="tagline"
                placeholder="The short description displayed on the Explorations page"
                value={tagline}
                onChange={(e) => {
                  setFormErrors((prev) => ({ ...prev, tagline: "" }));
                  setTagline(e.target.value);
                }}
              />
              {formErrors.tagline && <Bold>{formErrors.tagline}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="Description">
            <StyledTextAreaRow $gap="var(--gap-xs)">
              <TextArea
                name="description"
                placeholder="The long description shown on the Exploration page"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setFormErrors((prev) => ({ ...prev, description: "" }));
                }}
              />
              {formErrors.description && <Bold>{formErrors.description}</Bold>}
            </StyledTextAreaRow>
          </FormField>

          <FormField label="Images">
            <StyledRow $gap="var(--gap-xs)">
              <ImageUploader
                name="images"
                maxImages={3}
                value={images}
                onChange={handleSetImages}
              />
              {formErrors.images && <Bold>{formErrors.images}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="Locations">
            <StyledRow $gap="var(--gap-md)">
              <LocationBuilder
                exploration={exploration || name}
                locations={locations}
                onAdd={handleAddLocation}
              />
              <CurrentLocations
                locations={locations}
                onEdit={handleEditLocation}
                onDelete={handleDeleteLocation}
                exploration={exploration || null}
              />
              {formErrors.locations && <Bold>{formErrors.locations}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="Badge">
            <StyledRow $gap="var(--gap-xs)">
              <BadgeBuilder value={badge} onSelect={handleSetBadge} />
              {formErrors.badge && <Bold>{formErrors.badge}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="Tags">
            <StyledRow $gap="var(--gap-xs)">
              <ExplorationTagBuilder
                exploration={exploration || null}
                tags={tags}
                onChange={handleSetTags}
              />
              {formErrors.tags && <Bold>{formErrors.tags}</Bold>}
              <StyledParagraph>
                {/* <Bold $color="var(--color-dark-200)">Note: </Bold>Tags are also
                derived from the tag(s) you add to each location. */}
              </StyledParagraph>
            </StyledRow>
          </FormField>

          <FormField label="Featured">
            <StyledRow $align="start">
              <FeaturedFormToggle
                featured={featured}
                onFeatured={setFeatured}
              />
            </StyledRow>
          </FormField>

          <Button $variation="darkRed" $size="medium" type="submit">
            {!isSubmitting &&
              (isEditing ? "Save Changes" : "Create Exploration")}
            {isSubmitting && "Saving Exploration..."}
          </Button>
          {formErrors.submit && <Bold>{formErrors.submit}</Bold>}
        </Row>
      </AppForm>
    </Row>
  );
}

export default CreateExploration;
