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
import { signupAmbassador, signupExplorer } from "../../../services/auth";
import { useAuth } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";

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
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirm, setConfirmPassword] = useState("");
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const { registerUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    isSubmitted,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleFormSubmit = async function (formData) {
    clearErrors("root.serverError");

    try {
      const signupFunction =
        $variant === "ambassador" ? signupAmbassador : signupExplorer;
      const data = await signupFunction(formData);

      registerUser(data);

      navigate(
        $variant === "ambassador"
          ? "/ambassador/explorations"
          : "/explorations",
      );
    } catch (err) {
      let errorMessage = err.message;

      setError("root.serverError", {
        type: "server",
        message: errorMessage,
      });
    }
  };

  return (
    <SignupWrapper>
      <StyledSignup>
        <Row $gap="var(--gap-xl)">
          <StyledHeading as="h2" $variant={$variant}>
            BECOME AN {$variant === "explorer" ? "EXPLORER" : "AMBASSADOR"}
          </StyledHeading>
          <AppForm $height="100%" onSubmit={handleSubmit(handleFormSubmit)}>
            <Row $gap="var(--gap-lg)">
              <FormField label="name">
                <Row $gap="var(--gap-xs)">
                  <StyledInput
                    name="name"
                    placeholder="Name"
                    id="name"
                    {...register("name", { required: "Name is required." })}
                  />
                  {errors?.name?.message && (
                    <Bold>{errors?.name?.message}</Bold>
                  )}
                </Row>
              </FormField>

              <FormField label="email">
                <Row $gap="var(--gap-xs)">
                  <StyledInput
                    name="email"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required.",
                      validate: (email) =>
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
                        "Please enter a valid email.",
                    })}
                  />
                  {errors?.email?.message && (
                    <Bold>{errors?.email?.message}</Bold>
                  )}
                </Row>
              </FormField>

              <FormField label="password">
                <Row $gap="var(--gap-xs)">
                  <StyledInput
                    name="password"
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                      required: "Password is required.",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters.",
                      },
                    })}
                  />
                  {errors?.password?.message && (
                    <Bold>{errors?.password?.message}</Bold>
                  )}
                </Row>
              </FormField>

              <FormField label="confirm Password">
                <Row $gap="var(--gap-xs)">
                  <StyledInput
                    name="passwordConfirm"
                    placeholder="Confirm Password"
                    type="password"
                    {...register("passwordConfirm", {
                      required: "Please confirm your password.",
                      validate: {
                        match: (passwordConfirm) =>
                          passwordConfirm === getValues("password") ||
                          "Passwords must match.",
                      },
                    })}
                  />
                  {errors?.passwordConfirm?.message && (
                    <Bold>{errors?.passwordConfirm?.message}</Bold>
                  )}
                </Row>
              </FormField>

              <Button
                $variation={$variant === "explorer" ? "secondary" : "primary"}
                $size="small"
                type="submit"
              >
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </Button>
              {isSubmitted && Object.keys(errors).length > 0 && (
                <Bold>Please review your form submission and try again.</Bold>
              )}
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
