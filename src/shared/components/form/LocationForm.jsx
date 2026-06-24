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

const StyledHeading = styled(Heading)`
  flex: 1 1 0;
`;

function LocationForm({ exploration = fakeExplorationData, onClose }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState(null);
  const [headerImage, setHeaderImage] = useState([]);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);

  const handleSubmit = function (e) {
    e.preventDefault();
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
    onClose();
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
          <Input
            name="name"
            placeholder="The name of the location"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormField>

        <FormField label="Address">
          <Input
            name="address"
            placeholder="The address of the location"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormField>

        <FormField label="City">
          <CityDropdown name="city" value={city} onSelect={setCity} />
        </FormField>

        <FormField label="Header Image">
          <ImageUploader
            name="headerImage"
            multiple={false}
            maxImages={1}
            value={headerImage}
            onChange={setHeaderImage}
          />
        </FormField>

        <FormField label="Description">
          <TextArea
            name="description"
            placeholder="The description displayed beside the location"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormField>

        <FormField label="Images">
          <ImageUploader
            name="images"
            multiple={true}
            maxImages={3}
            value={images}
            onChange={setImages}
          />
        </FormField>

        <FormField label="Tags">
          <LocationTagBuilder value={tags} onChange={setTags} />
        </FormField>

        <Button $variation="darkRed" $size="medium" type="submit">
          {"Create Location"}
        </Button>
      </Row>
    </AppForm>
  );
}

export default LocationForm;
