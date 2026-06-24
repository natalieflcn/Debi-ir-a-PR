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

function CreateExploration({ exploration }) {
  const isEditing = Boolean(exploration);

  const [name, setName] = useState("");
  const [headerImage, setHeaderImage] = useState([]);
  const [startingCity, setStartingCity] = useState(null);
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [locations, setLocations] = useState([]);
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    const formData = {
      name,
      startingCity,

      headerImage,
      tagline,
      description,
      images,
      locations,
      tags,
    };
    console.log(formData);
    navigate(`/ambassador/explorations/:explorationId`);
  };

  return (
    <Row $gap="var(--gap-lg)">
      {exploration ? (
        <RouterLink to="/ambassador/explorations/:explorationId">
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
            <Input
              name="name"
              placeholder="The title of the exploration"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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

          <FormField label="Starting City">
            <CityDropdown
              name="city"
              value={startingCity}
              onSelect={setStartingCity}
            />
          </FormField>

          <FormField label="Tagline">
            <Input
              name="tagline"
              placeholder="The short description displayed on the Explorations page"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </FormField>

          <FormField label="Description">
            <TextArea
              name="description"
              placeholder="The long description shown on the Exploration page"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormField>

          <FormField label="Images">
            <ImageUploader
              name="images"
              maxImages={3}
              value={images}
              onChange={setImages}
            />
          </FormField>

          <FormField label="Locations">
            <StyledRow>
              <LocationBuilder />
              <CurrentLocations
                locations={fakeExplorationData.locations}
                exploration={fakeExplorationData}
                onChange={setLocations}
              />
            </StyledRow>
          </FormField>

          <FormField label="Tags">
            <StyledRow>
              <ExplorationTagBuilder
                exploration={fakeExplorationData}
                value={tags}
                onChange={setTags}
              />
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
