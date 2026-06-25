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

const StyledLoginBackground = styled.div`
  position: relative;
  width: 40%;
  flex: 0 0 40%;

  background-image: url("src/assets/images/content/TEMP.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  align-self: stretch;
  min-height: 100%;
`;

const StyledAppForm = styled(AppForm)`
  height: 100%;
  flex: 1;
`;

const LoginWrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-light-0);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
  height: 100%;
  flex: 1;
  padding: 1.5rem;
  box-sizing: border-box;
  justify-content: center;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const StyledInput = styled(Input)`
  width: 25rem;
`;
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = function (e) {
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
    console.log(formData);
    navigate("/");
  };

  return (
    <LoginWrapper>
      <StyledLoginBackground />
      <StyledLoginForm>
        <Row $gap="var(--gap-xl)">
          <StyledAppForm
            formTitle="WELCOME BACK"
            action="/login"
            method="post"
            $height="100%"
            onSubmit={handleSubmit}
          >
            <Row $gap="var(--gap-xl)">
              <StyledHeading as="h5" $color="var(--color-red-300)">
                Please login below
              </StyledHeading>
              <Row $gap="var(--gap-xl)">
                <FormField label="email">
                  <Row $gap="var(--gap-xs)">
                    <StyledInput
                      name="email"
                      placeholder="Email address"
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

                <Button $variation="darkRed" $size="small" type="submit">
                  Login
                </Button>
              </Row>
            </Row>
          </StyledAppForm>

          <Row>
            <Row $direction="horizontal" $align="center">
              <StyledHeading as="h5" $color="var(--color-red-300)">
                DON'T HAVE AN ACCOUNT YET?
              </StyledHeading>
            </Row>

            <Row $direction="horizontal" $gap="var(--gap-md)">
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
            </Row>
          </Row>
        </Row>
      </StyledLoginForm>
    </LoginWrapper>
  );
}

export default Login;
