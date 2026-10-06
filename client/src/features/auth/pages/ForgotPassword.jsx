import Card from "../../../shared/components/layout/Card";
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
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState("");

  return (
    <StyledAppForm formTitle="PASSWORD RESET">
      <Row $gap="var(--gap-xl)">
        <StyledParagraph>
          <Bold $color="var(--color-dark-200)" as="h6">
            Lost access to your account?
          </Bold>{" "}
          Don't worry! Enter your email below and we'll send you instructions on
          how to reset your password.
        </StyledParagraph>

        <FormField label="Email">
          <Input placeholder="Your email address" />
        </FormField>

        <Button $size="medium" $variation="yellow">
          Submit
        </Button>
      </Row>
    </StyledAppForm>
  );
}

export default ForgotPassword;
