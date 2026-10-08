import AppForm from "../../../shared/components/form/AppForm";
import { useState } from "react";
import Bold from "../../../shared/components/typography/Bold";
import styled from "styled-components";
import Input from "../../../shared/components/form/Input";
import FormField from "../../../shared/components/form/FormField";
import Button from "../../../shared/components/ui/Button";
import Row from "../../../shared/components/layout/Row";
import { useParams } from "react-router-dom";
import { resetPassword } from "../../../services/auth";
import RouterLink from "../../../shared/components/routing/RouterLink";

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
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const { token } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});

    const errors = {};

    if (!password) errors.password = "Please provide a new password.";
    else if (password.length < 8)
      errors.password =
        "Please create a password that is at least 8 characters.";

    if (!passwordConfirm)
      errors.passwordConfirm = "Please confirm your new password.";
    else if (!(passwordConfirm === password))
      errors.passwordConfirm = "Both passwords must match.";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      setIsSending(true);
      await resetPassword({ token, password, passwordConfirm });
      setIsSuccess(true);
    } catch (err) {
     
      setErrors({
        submit: `${err.message} Please try again.`,
      });
      setIsSuccess(false);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <StyledAppForm formTitle="RESET YOUR PASSWORD">
      <Row $gap="var(--gap-xl)">
        <StyledParagraph>
          <Bold $color="var(--color-dark-200)" as="h6">
            This will be the new password for your account.{" "}
          </Bold>{" "}
          Please make sure it has at least 8 characters.
        </StyledParagraph>

        <Row $gap="var(--gap-xs)">
          <FormField label="Password">
            <Input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
              type="password"
              placeholder="Your new password"
            />
          </FormField>
          {errors.password && <Bold>{errors.password}</Bold>}
        </Row>

        <Row $gap="var(--gap-xs)">
          <FormField label="Confirm">
            <Input
              value={passwordConfirm}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
                setErrors((prev) => ({ ...prev, passwordConfirm: "" }));
              }}
              type="password"
              placeholder="Confirm your new password"
            />
          </FormField>
          {errors.passwordConfirm && <Bold>{errors.passwordConfirm}</Bold>}
        </Row>

        <Row $gap="var(--gap-xs)">
          <Button
            $size="medium"
            $variation={isSending ? "darkYellow" : "yellow"}
            onClick={handleSubmit}
            disabled={isSuccess}
          >
            {!isSuccess && (isSending ? "Resetting..." : "Reset Your Password")}
            {isSuccess && "Password Reset!"}
          </Button>
          {errors.submit && <Bold>{errors.submit}</Bold>}
        </Row>

        <Row $direction="horizontal" $gap="var(--gap-md)">
          <RouterLink to="/">
            <Button $size="medium" $variation="secondary">
              Back to Home
            </Button>
          </RouterLink>

          <RouterLink to="/login">
            <Button $size="medium" $variation="primary">
              Login Now
            </Button>
          </RouterLink>
        </Row>
      </Row>
    </StyledAppForm>
  );
}

export default ResetPassword;
