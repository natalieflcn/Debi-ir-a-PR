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
  width: 50%;
  flex: 0 0 50%;

  /* left: 50%; */
  background-image: url("/src/assets/images/content/TEMP.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  height: 100%;
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
  height: 40rem;
`;
function Signup({ $variant }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
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
                <Input
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormField>

              <FormField label="email">
                <Input
                  name="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormField>

              <FormField label="password">
                <Input
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
