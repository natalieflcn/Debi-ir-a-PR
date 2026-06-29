import Input from "../../../../shared/components/form/Input";
import Button from "../../../../shared/components/ui/Button";

import AppForm from "../../../../shared/components/form/AppForm";
import FormField from "../../../../shared/components/form/FormField";
import TextArea from "../../../../shared/components/form/TextArea";
import ImageUploader from "../../../../shared/components/form/ImageUploader";
import { useState } from "react";
import LocationBuilder from "../../../../shared/components/form/LocationBuilder";
import CurrentLocations from "../../../../shared/components/form/CurrentLocations";
import fakeExplorationLocationData from "../../../explorer/pages/explorations/fakeExplorationLocationData";
import fakeExplorationData from "../../../explorer/pages/explorations/fakeExplorationData";
import Row from "../../../../shared/components/layout/Row";
import styled from "styled-components";
import CityDropdown from "../../../../shared/components/dropdown/CityDropdown";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { FaArrowLeft } from "react-icons/fa";
import ExplorationTagBuilder from "../../../../shared/components/form/ExplorationTagBuilder";
import Bold from "../../../../shared/components/typography/Bold";
import { useNavigate } from "react-router-dom";

const StyledRow = styled(Row)`
  flex: 1 1 0;
`;

const StyledParagraph = styled.p`
  color: var(--color-dark-200);
`;

const StyledTextAreaRow = styled(Row)`
  flex: 1 1 0;
  height: 10rem;
`;

function CreateExploration({ exploration }) {
  const isEditing = Boolean(exploration);

  const [name, setName] = useState(isEditing ? exploration.name : "");
  const [headerImage, setHeaderImage] = useState(
    isEditing ? exploration.headerImage : [],
  );
  const [startingCity, setStartingCity] = useState(
    isEditing ? exploration.startingCity : null,
  );
  const [tagline, setTagline] = useState(isEditing ? exploration.tagline : "");
  const [description, setDescription] = useState(
    isEditing ? exploration.description : "",
  );
  const [images, setImages] = useState(isEditing ? exploration.images : []);
  const [locations, setLocations] = useState(
    isEditing ? exploration.locations : fakeExplorationData.locations,
  );
  const [tags, setTags] = useState(isEditing ? exploration.tags : []);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  function handleAddLocation(formData) {
    setLocations((prev) => [...prev, { ...formData, id: crypto.randomUUID() }]);
  }

  function handleDeleteLocation(id) {
    setLocations((prev) => prev.filter((l) => l.id !== id));
  }

  function handleEditLocation(id, formData) {
    setLocations((prev) =>
      prev.map((l) => (l.id === id ? { ...l, ...formData } : l)),
    );
  }

  const handleSubmit = function (e) {
    e.preventDefault();

    const errors = {};

    if (!name.trim()) errors.name = "Exploration name is required.";
    if (!startingCity) errors.startingCity = "Please select starting city.";
    if (headerImage.length < 1)
      errors.headerImage = "Please select a header image.";
    if (!tagline.trim()) errors.tagline = "Please provide a tagline.";
    if (!description.trim())
      errors.description = "Please provide a description.";
    if (images.length < 1) errors.images = "Please provide at least one image.";
    if (locations.length < 1)
      errors.locations = "Please provide at least one location.";
    if (tags.length < 1)
      errors.tags = "Please select at least one exploration tag.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const newId = crypto.randomUUID();
    const formData = {
      id: newId,
      name,
      startingCity,
      headerImage,
      tagline,
      description,
      images,
      locations,
      tags,
    };

    navigate(`/ambassador/explorations/${newId}`);
  };

  return (
    <Row $gap="var(--gap-lg)">
      {exploration ? (
        <RouterLink to={`/ambassador/explorations/${exploration.id}`}>
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
        action={isEditing ? `/explorations/${exploration.id}` : "/explorations"}
        method={isEditing ? "patch" : "post"}
        onSubmit={handleSubmit}
      >
        <Row $gap="var(--gap-lg)">
          <FormField label="Name">
            <StyledRow $gap="var(--gap-xs)">
              <Input
                name="name"
                placeholder="The title of the exploration"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                onChange={setHeaderImage}
              />
              {formErrors.headerImage && <Bold>{formErrors.headerImage}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="Starting City">
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
          </FormField>

          <FormField label="Tagline">
            <StyledRow $gap="var(--gap-xs)">
              <Input
                name="tagline"
                placeholder="The short description displayed on the Explorations page"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
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
                onChange={setImages}
              />
              {formErrors.images && <Bold>{formErrors.images}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="Locations">
            <StyledRow $gap="var(--gap-sm)">
              <LocationBuilder
                locations={locations}
                onAdd={handleAddLocation}
              />
              <CurrentLocations
                locations={locations}
                onEdit={handleEditLocation}
                onDelete={handleDeleteLocation}
                exploration={fakeExplorationData}
              />
              {formErrors.locations && <Bold>{formErrors.locations}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="Tags">
            <StyledRow $gap="var(--gap-xs)">
              <ExplorationTagBuilder
                exploration={fakeExplorationData}
                tags={tags}
                onChange={setTags}
              />
              {formErrors.tags && <Bold>{formErrors.tags}</Bold>}
              <StyledParagraph>
                <Bold $color="var(--color-dark-200)">Note: </Bold>Tags are also
                derived from the tag(s) you add to each location.
              </StyledParagraph>
            </StyledRow>
          </FormField>

          <Button $variation="darkRed" $size="medium" type="submit">
            {isEditing ? "Save Changes" : "Create Exploration"}
          </Button>
        </Row>
      </AppForm>
    </Row>
  );
}

export default CreateExploration;
