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

const StyledHeading = styled(Heading)`
  flex: 1 1 0;
`;
function CreateLocation({
  exploration = fakeExplorationData,
  location = true,
}) {
  const isEditing = Boolean(location);

  return (
    <Row $gap="var(--gap-lg)">
      <RouterLink to="/ambassador/explorations/:explorationId">
        <Button $size="small" $variation="darkRed">
          <FaArrowLeft size={12} /> Back to{" "}
          {exploration?.explorationName ?? "Exploration"}
        </Button>
      </RouterLink>

      <AppForm formTitle={isEditing ? "EDIT LOCATION" : "CREATE A LOCATION"}>
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
              defaultValue={location?.name ?? ""}
            />
          </FormField>

          <FormField label="Address">
            <Input
              name="address"
              placeholder="The address of the location"
              defaultValue={location?.address ?? ""}
            />
          </FormField>

          <FormField label="City">
            <CityDropdown
              name="city"
              defaultValue={location?.city ?? "Select City"}
            />
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
              defaultValue={exploration?.description ?? ""}
            />
          </FormField>

          <FormField label="Images">
            <ImageUploader
              name="images"
              multiple={true}
              maxImages={1}
              existingImages={exploration?.images ?? []}
            />
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
