import { Form, useSubmit } from "react-router-dom";
import Input from "../../../../shared/components/ui/Input";
import Button from "../../../../shared/components/ui/Button";

const createExplorationFormValues = [
  { id: 0, placeholder: "Create Exploration..." },
  { id: 1, placeholder: "Create Exploration..." },
  { id: 2, placeholder: "Create Exploration..." },
];

function CreateExploration() {
  return (
    <Form action="/events" method="post">
      {createExplorationFormValues.map((input) => (
        <Input placeholder={input.placeholder} key={input.id} />
      ))}
      <Button type="submit">Create Exploration</Button>
    </Form>
  );
}

export default CreateExploration;
