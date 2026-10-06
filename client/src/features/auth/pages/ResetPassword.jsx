import AppForm from "../../../shared/components/form/AppForm";
import { useState } from "react";
import Bold from "../../../shared/components/typography/Bold";
import styled from "styled-components";
import Input from "../../../shared/components/form/Input";
import FormField from "../../../shared/components/form/FormField";
import Button from "../../../shared/components/ui/Button";
import Row from "../../../shared/components/layout/Row";

const StyledParagraph = styled.p`
  color: var(--color-dark-200);
`;

const StyledAppForm = styled(AppForm)`
  width: 75%;
  justify-self: center;
  padding: 5rem;
  margin-bottom: 3rem;
`;

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState("");

  return (
    <StyledAppForm formTitle="RESET YOUR PASSWORD">
      <Row $gap="var(--gap-xl)">
        <StyledParagraph>
          <Bold $color="var(--color-dark-200)" as="h6">
            This will be the new password for your account.{" "}
          </Bold>{" "}
          Please make sure it has at least 8 characters.
        </StyledParagraph>

        <FormField label="Password">
          <Input placeholder="Your new password" />
        </FormField>

        <FormField label="Confirm">
          <Input placeholder="Confirm your new password" />
        </FormField>

        <Button $size="medium" $variation="yellow">
          Reset Your Password
        </Button>
      </Row>
    </StyledAppForm>
  );
}

export default ResetPassword;
