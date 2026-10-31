import { useState } from "react";
import AppForm from "./AppForm";
import Row from "../layout/Row";
import FormField from "./FormField";
import Input from "./Input";
import Bold from "../typography/Bold";
import Button from "../ui/Button";
import ImageUploader from "../ui/ImageUploader";
import styled from "styled-components";
import Heading from "../typography/Heading";
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

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

const StyledCheckboxForm = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0;
  gap: var(--gap-xl);

  @media (max-width: 690px) {
    align-self: center;
  }
`;

const StyledIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  align-content: center;
`;

function BadgeForm({ badge, onSubmit }) {
  const isEditing = Boolean(badge);

  const [name, setName] = useState(isEditing ? badge.name : "");
  const [image, setImage] = useState(() => {
    if (!isEditing || !badge.image) return [];
    return Array.isArray(badge.image) ? badge.image : [badge.image];
  });
  const [description, setDescription] = useState(
    isEditing ? badge.description : "",
  );

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setFormErrors({});

    const errors = {};

    if (!name.trim()) errors.name = "Badge name is required.";

    if (!description.trim())
      errors.description = "Badge description is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const formData = {
      name,
      description,
      image,
    };

    onSubmit(formData);
  };

  return (
    <AppForm formTitle={"CREATE A BADGE"} onSubmit={handleSubmit}>
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
          <StyledRow $gap="var(--gap-xs)" $align="start">
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

        <FormField label="Description">
          <StyledRow $gap="var(--gap-xs)">
            <Input
              name="description"
              placeholder="The description for the badge"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {formErrors.description && <Bold>{formErrors.description}</Bold>}
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
