import styled from "styled-components";
import AppForm from "../../../../shared/components/form/AppForm";
import FormField from "../../../../shared/components/form/FormField";
import ImageUploader from "../../../../shared/components/form/ImageUploader";
import Input from "../../../../shared/components/form/Input";
import TextArea from "../../../../shared/components/form/TextArea";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import fakeExplorationData from "../../../explorer/pages/explorations/fakeExplorationData";
import CityDropdown from "../../../../shared/components/dropdown/CityDropdown";
import Button from "../../../../shared/components/ui/Button";
import RouterLink from "../../../../shared/components/routing/RouterLink";
import { FaArrowLeft } from "react-icons/fa";
import LocationTagBuilder from "../../../../shared/components/form/LocationTagBuilder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bold from "../../../../shared/components/typography/Bold";

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

function CreateLocation({ exploration = fakeExplorationData, location }) {
  const isEditing = Boolean(location);

  const [name, setName] = useState(isEditing ? location.name : "");
  const [address, setAddress] = useState(isEditing ? location.address : "");
  const [city, setCity] = useState(isEditing ? location.city : null);
  const [headerImage, setHeaderImage] = useState(
    isEditing ? location.headerImage : [],
  );
  const [description, setDescription] = useState(
    isEditing ? location.description : "",
  );
  const [images, setImages] = useState(isEditing ? location.images : []);
  const [tags, setTags] = useState(isEditing ? location.tags : []);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();

    const errors = {};

    if (!name.trim()) errors.name = "Location name is required.";

    if (!address.trim()) errors.address = "Location address is required.";

    if (!city) errors.city = "Please select a city.";

    if (headerImage.length < 1)
      errors.headerImage = "Please select a header image.";

    if (!description.trim())
      errors.description = "Please provide a description.";

    if (images.length < 1) errors.images = "Please provide at least one image.";

    if (tags.length < 1) errors.tags = "Please select at least one tag.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const formData = {
      name,
      address,
      city,
      headerImage,
      description,
      images,
      tags,
    };

    navigate(`/ambassador/explorations/:explorationId`);
  };

  return (
    <Row $gap="var(--gap-lg)">
      <RouterLink to="/ambassador/explorations/:explorationId">
        <Button $size="small" $variation="darkRed">
          <FaArrowLeft size={12} /> Back to {exploration?.name ?? "Exploration"}
        </Button>
      </RouterLink>

      <AppForm
        formTitle={isEditing ? "EDIT LOCATION" : "CREATE A LOCATION"}
        onSubmit={handleSubmit}
        method={isEditing ? "patch" : "post"}
      >
        <Row $gap="var(--gap-lg)">
          <FormField label="Exploration">
            <StyledHeading as="h6" $color="var(--color-red-300)">
              {exploration.name}
            </StyledHeading>
          </FormField>

          <FormField label="Name">
            <StyledRow $gap="var(--gap-xs)">
              <Input
                name="name"
                placeholder="The name of the location"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {formErrors.name && <Bold>{formErrors.name}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="Address">
            <StyledRow $gap="var(--gap-xs)">
              <Input
                name="address"
                placeholder="The address of the location"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {formErrors.address && <Bold>{formErrors.address}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="City">
            <StyledRow $gap="var(--gap-xs)">
              <CityDropdown name="city" value={city} onSelect={setCity} />
              {formErrors.city && <Bold>{formErrors.city}</Bold>}
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

          <FormField label="Description">
            <StyledTextAreaRow $gap="var(--gap-xs)">
              <TextArea
                name="description"
                placeholder="The description displayed beside the location"
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
                multiple={true}
                maxImages={3}
                value={images}
                onChange={setImages}
              />
              {formErrors.images && <Bold>{formErrors.images}</Bold>}
            </StyledRow>
          </FormField>

          <FormField label="Tags">
            <StyledRow $gap="var(--gap-xs)">
              <LocationTagBuilder value={tags} onChange={setTags} />
              {formErrors.tags && <Bold>{formErrors.tags}</Bold>}
            </StyledRow>
          </FormField>

          <Button $variation="darkRed" $size="medium" type="submit">
            {isEditing ? "Save Changes" : "Create Location"}
          </Button>
        </Row>
      </AppForm>
    </Row>
  );
}

export default CreateLocation;
