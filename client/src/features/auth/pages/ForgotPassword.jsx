import Card from "../../../shared/components/layout/Card";
import AppForm from "../../../shared/components/form/AppForm";
import { useState } from "react";
import Bold from "../../../shared/components/typography/Bold";
import styled from "styled-components";
import Input from "../../../shared/components/form/Input";
import FormField from "../../../shared/components/form/FormField";
import Button from "../../../shared/components/ui/Button";
import Row from "../../../shared/components/layout/Row";
import { forgotPassword } from "../../../services/auth";

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
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});

    const errors = {};

    if (!email) errors.email = "Please provide an email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Please enter a valid email address.";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      setIsSending(true);
      await forgotPassword(email);
      setIsSuccess(true);
    } catch (err) {
      setErrors({ submit: err.message });
      setIsSuccess(false);
    } finally {
      setIsSending(false);
    }
  }
  return (
    <StyledAppForm formTitle="FORGOT PASSWORD">
      <Row $gap="var(--gap-xl)">
        <StyledParagraph>
          <Bold $color="var(--color-dark-200)" as="h6">
            Lost access to your account?
          </Bold>{" "}
          Don't worry! Enter your email below and we'll send you instructions on
          how to reset your password.
        </StyledParagraph>

        <FormField label="Email">
          <Input
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
              setIsSuccess(false);
              setIsSending(false);
            }}
          />
        </FormField>
        {errors.email && <Bold>{errors.email}</Bold>}

        <Button
          $size="medium"
          $variation={isSending ? "darkYellow" : "yellow"}
          onClick={handleSubmit}
          disabled={isSuccess}
        >
          {!isSuccess && (isSending ? "Sending..." : "Submit")}

          {isSuccess && "Sent!"}
        </Button>
        {errors.submit && <Bold>{errors.submit}</Bold>}
      </Row>
    </StyledAppForm>
  );
}

export default ForgotPassword;
