import styled from "styled-components";
import Heading from "../../../shared/components/typography/Heading";
import Row from "../../../shared/components/layout/Row";
import AppForm from "../../../shared/components/form/AppForm";
import FormField from "../../../shared/components/form/FormField";
import Input from "../../../shared/components/form/Input";
import Button from "../../../shared/components/ui/Button";
import { MdQuestionMark } from "react-icons/md";
import RouterLink from "../../../shared/components/routing/RouterLink";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bold from "../../../shared/components/typography/Bold";
import { login } from "../../../services/auth";
import { useAuth } from "../contexts/AuthContext";
import SmallText from "../../../shared/components/typography/SmallText";
import loginBg from "../../../assets/images/about/login.jpeg";

const StyledLoginBackground = styled.div`
  position: relative;
  max-width: 40%;
  flex: 1 0 40%;

  background-image: url(${loginBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  align-self: stretch;
  min-height: 100%;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const StyledAppForm = styled(AppForm)`
  height: 100%;
  flex: 1;
`;

const LoginWrapper = styled.div`
  display: flex;
  align-items: stretch;

  justify-self: center;
  width: 100%;

  @media (max-width: 1200px) {
    width: auto;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-light-0);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
  height: 100%;
  flex: 1 1 0;
  /* width: 60%; */
  padding: 1.5rem;
  box-sizing: border-box;
  justify-content: center;

  @media (max-width: 1200px) {
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const StyledInput = styled(Input)`
  flex: 1 1 0;
  width: 100%;
  min-width: 0;

  @media (max-width: 1200px) {
  }

  /* @media (max-width: 900px) {
    width: 22rem;
  }

  @media (max-width: 900px) {
    width: 20rem;
  }

  @media (max-width: 780px) {
    width: 17rem;
  }

  @media (max-width: 680px) {
    width: 100%;
  } */
`;

const ButtonsRow = styled(Row)`
  @media (max-width: 680px) {
    flex-direction: column;
    flex: 1;

    button {
      width: 100%;
    }
  }
`;

const StyledRow = styled(Row)`
  flex: 1;
`;

const ForgotPasswordRow = styled(Row)`
  @media (max-width: 560px) {
    flex-direction: column;
    gap: var(--gap-xs);
    text-align: center;
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { loginUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async function (e) {
    e.preventDefault();

    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!password.trim()) {
      errors.password = "Please enter a password.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const formData = { email, password };

    try {
      setIsSubmitting(true);
      let redirectLink = "";

      const user = await loginUser(formData);

      switch (user.role) {
        case "explorer":
          redirectLink = "/dashboard";
          break;

        case "ambassador":
          redirectLink = "/ambassador/dashboard";
          break;

        case "admin":
          redirectLink = "/admin/dashboard";
          break;

        default:
          redirectLink = "/unauthorized";
          break;
      }

      navigate(redirectLink);
    } catch (err) {
      setFormErrors({ submit: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LoginWrapper>
      <StyledLoginBackground />
      <StyledLoginForm>
        <Row $gap="var(--gap-xl)">
          <StyledAppForm
            formTitle="WELCOME BACK"
            // action="/login"
            // method="post"
            $height="100%"
            onSubmit={handleSubmit}
          >
            <Row $gap="var(--gap-xl)">
              <StyledHeading as="h5" $color="var(--color-red-300)">
                Please login below
              </StyledHeading>
              <Row $gap="var(--gap-xl)">
                <FormField label="email">
                  <StyledRow $gap="var(--gap-xs)">
                    <StyledInput
                      name="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {formErrors.email && <Bold>{formErrors.email}</Bold>}
                  </StyledRow>
                </FormField>

                <FormField label="password">
                  <StyledRow $gap="var(--gap-xs)">
                    <StyledInput
                      name="password"
                      placeholder="Password"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {formErrors.password && <Bold>{formErrors.password}</Bold>}
                  </StyledRow>
                </FormField>

                <Button $variation="darkRed" $size="small" type="submit">
                  {isSubmitting ? "Logging In..." : "Login"}
                </Button>
                {formErrors.submit && <Bold>{formErrors.submit}</Bold>}
              </Row>
            </Row>
          </StyledAppForm>

          <Row>
            <ForgotPasswordRow
              $direction="horizontal"
              $color="var(--color-dark-200)"
              $align="center"
              $gap="var(--gap-sm)"
            >
              <SmallText $color="var(--color-dark-200)">
                Forgot your password?
              </SmallText>
              <RouterLink to="/forgot-password">
                <Bold $color="var(--color-dark-100)">
                  Recover your account here
                </Bold>
              </RouterLink>
            </ForgotPasswordRow>
            <Row $direction="horizontal" $align="center">
              <StyledHeading as="h5" $color="var(--color-red-300)">
                OR
              </StyledHeading>
            </Row>

            <ButtonsRow $direction="horizontal" $gap="var(--gap-md)">
              <RouterLink to="/signup/explorer">
                <Button $variation="secondary" $size="small">
                  Become an Explorer
                </Button>
              </RouterLink>

              <RouterLink to="/signup/ambassador">
                <Button $variation="primary" $size="small">
                  Become an Ambassador
                </Button>
              </RouterLink>

              <RouterLink to="how-it-works">
                <Button $variation="yellow" $size="small">
                  Learn More
                </Button>
              </RouterLink>
            </ButtonsRow>
          </Row>
        </Row>
      </StyledLoginForm>
    </LoginWrapper>
  );
}

export default Login;
