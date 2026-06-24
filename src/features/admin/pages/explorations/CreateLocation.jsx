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

const StyledHeading = styled(Heading)`
  flex: 1 1 0;
`;
function CreateLocation({
  exploration = fakeExplorationData,
  location = false,
}) {
  const isEditing = Boolean(location);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState(null);
  const [headerImage, setHeaderImage] = useState([]);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

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
    navigate(`/admin/explorations/:explorationId`);
  };

  return (
    <Row $gap="var(--gap-lg)">
      <RouterLink to="/admin/explorations/:explorationId">
        <Button $size="small" $variation="darkRed">
          <FaArrowLeft size={12} /> Back to{" "}
          {exploration?.explorationName ?? "Exploration"}
        </Button>
      </RouterLink>

      <AppForm
        formTitle={isEditing ? "EDIT LOCATION" : "CREATE A LOCATION"}
        onSubmit={handleSubmit}
      >
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
            {isEditing ? "Save Changes" : "Create Location"}
          </Button>
        </Row>
      </AppForm>
    </Row>
  );
}

export default CreateLocation;
