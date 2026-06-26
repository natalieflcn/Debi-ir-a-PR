import styled from "styled-components";
import fakeExplorationData from "../../../features/explorer/pages/explorations/fakeExplorationData";
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
function LocationForm({ exploration = fakeExplorationData, onSubmit }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState(null);
  const [headerImage, setHeaderImage] = useState([]);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = function (e) {
    e.preventDefault();
    e.stopPropagation();

    console.log("handlesubmit fires");
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
      console.log("there is an error, should be returning");
      setFormErrors(errors);
      return;
    }
    console.log("the rest shouldnt be returning");
    const formData = {
      name,
      address,
      city,
      headerImage,
      description,
      images,
      tags,
    };
    console.log(formData);
    onSubmit(formData);
  };

  return (
    <AppForm formTitle={"CREATE A LOCATION"} onSubmit={handleSubmit}>
      <Row $gap="var(--gap-lg)">
        <FormField label="Exploration">
          <StyledHeading as="h6" $color="var(--color-red-300)">
            {exploration.explorationName}
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
          {"Create Location"}
        </Button>
      </Row>
    </AppForm>
  );
}

export default LocationForm;
