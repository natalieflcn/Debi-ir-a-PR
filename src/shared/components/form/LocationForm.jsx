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

const StyledHeading = styled(Heading)`
  flex: 1 1 0;
`;

function LocationForm({ exploration = fakeExplorationData }) {
  return (
    <AppForm formTitle={"CREATE A LOCATION"}>
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
            defaultValue={""}
          />
        </FormField>

        <FormField label="Address">
          <Input
            name="address"
            placeholder="The address of the location"
            defaultValue={""}
          />
        </FormField>

        <FormField label="City">
          <CityDropdown name="city" defaultValue={"Select City"} />
        </FormField>

        <FormField label="Header Image">
          <ImageUploader
            name="headerImage"
            multiple={false}
            maxImages={1}
            existingImages={exploration?.headerImage ?? []}
          />
        </FormField>

        <FormField label="Description">
          <TextArea
            name="description"
            placeholder="The description displayed beside the location"
            defaultValue={""}
          />
        </FormField>

        <FormField label="Images">
          <ImageUploader
            name="images"
            multiple={true}
            maxImages={1}
            existingImages={[]}
          />
        </FormField>

        <Button $variation="darkRed" $size="medium" type="submit">
          {"Create Location"}
        </Button>
      </Row>
    </AppForm>
  );
}

export default LocationForm;
