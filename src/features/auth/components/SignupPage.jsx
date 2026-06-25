import styled from "styled-components";
import Heading from "../../../shared/components/typography/Heading";
import Row from "../../../shared/components/layout/Row";
import AppForm from "../../../shared/components/form/AppForm";
import FormField from "../../../shared/components/form/FormField";
import Input from "../../../shared/components/form/Input";
import Bold from "../../../shared/components/typography/Bold";
import Button from "../../../shared/components/ui/Button";
import RouterLink from "../../../shared/components/routing/RouterLink";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledSignupBackground = styled.div`
  position: relative;
  width: 45%;
  flex: 0 0 45%;

  /* left: 50%; */
  background-image: url("/src/assets/images/content/TEMP.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  align-self: stretch;
  min-height: 100%;
  /* height: 100vh; */
`;

const StyledSignup = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-light-0);
  border-top-left-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  height: 100%;
  flex: 1;
  padding: 2rem;
  box-sizing: border-box;
  justify-content: center;
`;

const StyledInput = styled(Input)`
  flex: 1 1 0;
  width: 25rem;
`;
const StyledHeading = styled(Heading)`
  text-align: center;
  line-height: var(--line-height-2xl);
  ${({ $variant }) =>
    $variant === "explorer" &&
    `color: var(--color-blue-200); text-shadow: 2px 2px var(--color-blue-400);`}
  ${({ $variant }) =>
    $variant === "ambassador" &&
    `color: var(--color-red-200); text-shadow: 2px 2px var(--color-red-400);`}
`;

const SignupWrapper = styled.div`
  display: flex;

  align-items: stretch;
`;

// const StyledInput = styled(Input)`
//   width: 15rem;
// `;
function Signup({ $variant }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();

    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required.";
    }
    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!password.trim()) {
      errors.password = "Password is required.";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }
    if (confirmPassword.trim() !== password.trim()) {
      errors.confirmPassword = "Passwords must match.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const formData = { name, email, password };
    console.log(formData);
    navigate("/");
  };

  return (
    <SignupWrapper>
      <StyledSignup>
        <Row $gap="var(--gap-xl)">
          <StyledHeading as="h2" $variant={$variant}>
            BECOME AN {$variant === "explorer" ? "EXPLORER" : "AMBASSADOR"}
          </StyledHeading>
          <AppForm
            action="/login"
            method="post"
            $height="100%"
            onSubmit={handleSubmit}
          >
            <Row $gap="var(--gap-lg)">
              <FormField label="name">
                <Row $gap="var(--gap-xs)">
                  <StyledInput
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {formErrors.name && <Bold>{formErrors.name}</Bold>}
                </Row>
              </FormField>

              <FormField label="email">
                <Row $gap="var(--gap-xs)">
                  <StyledInput
                    name="email"
                    placeholder="Email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {formErrors.email && <Bold>{formErrors.email}</Bold>}
                </Row>
              </FormField>

              <FormField label="password">
                <Row $gap="var(--gap-xs)">
                  <StyledInput
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {formErrors.password && <Bold>{formErrors.password}</Bold>}
                </Row>
              </FormField>

              <FormField label="confirm Password">
                <Row $gap="var(--gap-xs)">
                  <StyledInput
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {formErrors.confirmPassword && (
                    <Bold>{formErrors.confirmPassword}</Bold>
                  )}
                </Row>
              </FormField>

              <Button
                $variation={$variant === "explorer" ? "secondary" : "primary"}
                $size="small"
                type="submit"
              >
                Sign Up
              </Button>
            </Row>
          </AppForm>

          <Row $direction="horizontal" $gap="var(--gap-md)">
            <Heading
              as="h6"
              $color={
                $variant === "explorer"
                  ? "var(--color-blue-200)"
                  : "var(--color-red-200)"
              }
            >
              Already have an account?
            </Heading>

            <RouterLink to="/login">
              <Button
                $size="medium"
                $variation={$variant === "explorer" ? "darkBlue" : "darkRed"}
              >
                Login
              </Button>
            </RouterLink>
          </Row>
        </Row>
      </StyledSignup>
      <StyledSignupBackground />
    </SignupWrapper>
  );
}

export default Signup;
