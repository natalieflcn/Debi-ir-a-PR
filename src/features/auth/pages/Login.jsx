import styled from "styled-components";
import Heading from "../../../shared/components/typography/Heading";
import Row from "../../../shared/components/layout/Row";
import AppForm from "../../../shared/components/form/AppForm";
import FormField from "../../../shared/components/form/FormField";
import Input from "../../../shared/components/form/Input";
import Button from "../../../shared/components/ui/Button";
import { MdQuestionMark } from "react-icons/md";
import RouterLink from "../../../shared/components/routing/RouterLink";

const StyledLoginBackground = styled.div`
  position: relative;
  width: 40%;
  flex: 0 0 40%;

  background-image: url("src/assets/images/content/TEMP.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  min-height: 80vh;
`;

const StyledAppForm = styled(AppForm)`
  height: 100%;
  flex: 1;
`;

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-light-0);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
  height: 80vh;
  flex: 1;
  padding: 1.5rem;
  box-sizing: border-box;
  justify-content: center;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

function Login() {
  return (
    <Row $direction="horizontal">
      <StyledLoginBackground />
      <StyledLoginForm>
        <Row $gap="var(--gap-xl)">
          <StyledAppForm
            formTitle="WELCOME BACK"
            action="/login"
            method="post"
            $height="100%"
          >
            <Row $gap="var(--gap-xl)">
              <StyledHeading as="h5" $color="var(--color-red-300)">
                Please login below
              </StyledHeading>
              <Row $gap="var(--gap-xl)">
                <FormField label="email">
                  <Input name="email" placeholder="Email address" />
                </FormField>

                <FormField label="password">
                  <Input name="password" placeholder="Password" />
                </FormField>
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
    </Row>
  );
}

export default Login;
