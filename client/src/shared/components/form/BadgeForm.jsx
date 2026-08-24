import { useState } from "react";
import AppForm from "./AppForm";
import Row from "../layout/Row";
import FormField from "./FormField";
import Input from "./Input";
import Bold from "../typography/Bold";
import Button from "../ui/Button";
import ImageUploader from "./ImageUploader";
import styled from "styled-components";
import Heading from "../typography/Heading";

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
function BadgeForm({ badge, onSubmit }) {
  const isEditing = Boolean(badge);

  const [name, setName] = useState(isEditing ? badge.name : "");
  const [image, setImage] = useState(isEditing ? badge.image : []);

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = function (e) {
    e.preventDefault();
    e.stopPropagation();

    const errors = {};

    if (!name.trim()) errors.name = "Badge name is required.";

    if (image.length < 1) errors.image = "Badge image is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const formData = {
      name,
      image,
      id: `badge_${crypto.randomUUID()}`,
    };

    onSubmit(formData);
  };

  return (
    <AppForm formTitle={"CREATE A BADGE"} onSubmit={handleSubmit} method="post">
      <Row $gap="var(--gap-lg)">
        <FormField label="Name">
          <StyledRow $gap="var(--gap-xs)">
            <Input
              name="name"
              placeholder="The name of the badge"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {formErrors.name && <Bold>{formErrors.name}</Bold>}
          </StyledRow>
        </FormField>

        <FormField label="Badge Image">
          <StyledRow $gap="var(--gap-xs)">
            <ImageUploader
              name="image"
              multiple={false}
              maxImages={1}
              value={image}
              onChange={setImage}
            />
            {formErrors.image && <Bold>{formErrors.image}</Bold>}
          </StyledRow>
        </FormField>

        <Button $variation="darkRed" $size="medium" type="submit">
          {"Create Badge"}
        </Button>
      </Row>
    </AppForm>
  );
}

export default BadgeForm;
