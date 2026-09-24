import styled from "styled-components";

import CityDropdown from "../dropdown/CityDropdown";
import Row from "../layout/Row";
import Heading from "../typography/Heading";
import Button from "../ui/Button";
import AppForm from "./AppForm";
import FormField from "./FormField";
import ImageUploader from "./ImageUploader";
import Input from "./Input";
import TextArea from "./TextArea";
import { useState } from "react";
import LocationTagBuilder from "./LocationTagBuilder";
import Bold from "../typography/Bold";
import { MdRowing } from "react-icons/md";
import { verifyPRZipcode } from "../../utils/helpers";
import { useAuth } from "../../../features/auth/contexts/AuthContext";

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
function LocationForm({ exploration, location, onSubmit }) {
  const isEditing = Boolean(location);

  const [name, setName] = useState(isEditing ? location.name : "");
  const [street, setStreet] = useState(
    isEditing ? location.address.street : "",
  );
  const [city, setCity] = useState(isEditing ? location.address.city : null);
  const [zipcode, setZipcode] = useState(
    isEditing ? location.address.zipcode : "",
  );
  const [headerImage, setHeaderImage] = useState(
    isEditing ? location.headerImage : [],
  );
  const [description, setDescription] = useState(
    isEditing ? location.description : "",
  );
  const [images, setImages] = useState(isEditing ? location.images : []);
  const [tags, setTags] = useState(isEditing ? location.tags : []);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  function handleSetTags(value) {
    setFormErrors((prev) => ({ ...prev, tags: "" }));
    setTags(value);
  }

  function handleSetCity(value) {
    setFormErrors((prev) => ({ ...prev, city: "" }));
    setCity(value);
  }

  const handleSubmit = function (e) {
    e.preventDefault();
    e.stopPropagation();

    const errors = {};

    if (!name.trim()) errors.name = "A location name is required.";
    else if (name.trim().length < 5)
      errors.name = "A location name must have more than 5 characters.";
    else if (name.trim().length > 40)
      errors.name = "An location name must have less than 40 characters.";

    if (!street.trim()) errors.street = "Location street address is required.";

    if (!city) errors.city = "A city is required.";

    if (!zipcode.trim()) errors.zipcode = "A location zipcode is required.";
    else if (!verifyPRZipcode(zipcode.trim()))
      errors.zipcode = "Please enter a valid Puerto Rican zipcode.";

    // if (headerImage.length < 1)
    //   errors.headerImage = "Please select a header image.";

    if (!description.trim())
      errors.description = "Please provide a description.";
    else if (description.trim().length < 50)
      errors.description =
        "A location description must have more than 50 characters.";
    else if (description.trim().length > 1000)
      errors.description =
        "A location description must have less than 1000 characters.";

    // if (images.length < 1) errors.images = "Please provide at least one image.";

    if (tags.length < 1) errors.tags = "Please select at least one tag.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const formData = {
      name,
      address: { street, city, zipcode },
      city,
      headerImage,
      description,
      images,
      tags,
      // explorationId: exploration.explorationId,
    };
    if (isEditing) formData.updatedBy = user._id;

    setIsSubmitting(true);
    onSubmit(formData);
    setIsSubmitting(false);
  };

  return (
    <AppForm
      formTitle={"CREATE A LOCATION"}
      onSubmit={handleSubmit}
      method="post"
    >
      <Row $gap="var(--gap-lg)">
        {isEditing && (
          <FormField label="Exploration">
            <StyledHeading as="h6" $color="var(--color-red-300)">
              {exploration?.name ?? exploration}
            </StyledHeading>
          </FormField>
        )}

        <FormField label="Name">
          <StyledRow $gap="var(--gap-xs)">
            <Input
              name="name"
              placeholder="The name of the location"
              value={name}
              onChange={(e) => {
                setFormErrors((prev) => ({ ...prev, name: "" }));
                setName(e.target.value);
              }}
            />
            {formErrors.name && <Bold>{formErrors.name}</Bold>}
          </StyledRow>
        </FormField>

        <FormField label="Street">
          <StyledRow $gap="var(--gap-xs)">
            <Input
              name="street"
              placeholder="The street address of the location"
              value={street}
              onChange={(e) => {
                setFormErrors((prev) => ({ ...prev, street: "" }));
                setStreet(e.target.value);
              }}
            />
            {formErrors.street && <Bold>{formErrors.street}</Bold>}
          </StyledRow>
        </FormField>

        <FormField label="City">
          <StyledRow $gap="var(--gap-xs)">
            <CityDropdown name="city" value={city} onSelect={handleSetCity} />
            {formErrors.city && <Bold>{formErrors.city}</Bold>}
          </StyledRow>
        </FormField>

        <FormField label="Zipcode">
          <StyledRow $gap="var(--gap-xs)">
            <Input
              name="zipcode"
              placeholder="The zipcode of the location"
              value={zipcode}
              onChange={(e) => {
                setFormErrors((prev) => ({ ...prev, zipcode: "" }));
                setZipcode(e.target.value);
              }}
              type="text"
              maxLength={10}
            />
            {formErrors.zipcode && <Bold>{formErrors.zipcode}</Bold>}
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
              onChange={(e) => {
                setFormErrors((prev) => ({ ...prev, description: "" }));
                setDescription(e.target.value);
              }}
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
            <LocationTagBuilder value={tags} onChange={handleSetTags} />
            {formErrors.tags && <Bold>{formErrors.tags}</Bold>}
          </StyledRow>
        </FormField>

        <Button $variation="darkRed" $size="medium" type="submit">
          {!isSubmitting && (isEditing ? "Save Changes" : "Create Location")}
          {isSubmitting && "Saving Changes..."}
        </Button>
      </Row>
    </AppForm>
  );
}

export default LocationForm;
