import Input from "../../../../shared/components/form/Input";
import Button from "../../../../shared/components/ui/Button";

import AppForm from "../../../../shared/components/form/Form";
import FormField from "../../../../shared/components/form/FormField";
import TextArea from "../../../../shared/components/form/TextArea";

const createExplorationFormValues = [
  {
    id: 0,
    title: "Name",
    placeholder: "The title of the exploration",
  },
  {
    id: 1,
    title: "Header Image",
    placeholder: "The main image of the exploration",
  },
  {
    id: 2,
    title: "Tagline",
    placeholder: "The short description displayed on the Explorations page",
  },
  {
    id: 3,
    title: "Description",
    placeholder: "The long description shown on the Exploration page",
  },
  { id: 4, title: "Locations", placeholder: "" },
  { id: 5, title: "Images", placeholder: "" },
];

function CreateExploration() {
  return (
    <AppForm
      formValues={createExplorationFormValues}
      formTitle="CReATE aN eXPLORATION"
    >
      <FormField label="Name">
        <Input name="name" placeholder="The title of the exploration" />
      </FormField>

      <FormField label="Header Image">
        <Input
          name="header-image"
          placeholder="The main image of the exploration"
        />
      </FormField>

      <FormField label="Tagline">
        <Input
          name="tagline"
          placeholder="The short description displayed on the Explorations page"
        />
      </FormField>

      <FormField label="Description">
        <TextArea
          name="description"
          placeholder="The long description shown on the Exploration page"
        />
      </FormField>

      <FormField label="Images">
        <Input name="images" placeholder="The images of the exploration" />
      </FormField>

      <FormField label="Locations">
        <Input
          name="locations"
          placeholder="The locations of the exploration"
        />
      </FormField>
    </AppForm>
  );
}

export default CreateExploration;
