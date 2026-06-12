import styled from "styled-components";
import Card from "../../../shared/components/layout/Card";
import Heading from "../../../shared/components/typography/Heading";
import Row from "../../../shared/components/layout/Row";
import AppForm from "../../../shared/components/form/AppForm";
import FormField from "../../../shared/components/form/FormField";
import Input from "../../../shared/components/form/Input";
import Button from "../../../shared/components/ui/Button";
import { MdQuestionMark } from "react-icons/md";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-2xl);
  margin-bottom: 1rem;
`;

function Login() {
  return (
    <StyledLogin>
      <AppForm formTitle="LOGIN TO DeBí iR a PR" action="/login" method="post">
        <Row $gap="var(--gap-lg)">
          <FormField label="email">
            <Input name="email" placeholder="Email address" />
          </FormField>

          <FormField label="password">
            <Input name="password" placeholder="Password" />
          </FormField>
        </Row>
      </AppForm>

      <Row $direction="horizontal" $gap="var(--gap-lg)" $align="flex-start">
        <Row $direction="horizontal" $align="flex-start">
          <Heading as="h4" $color="var(--color-light-0)">
            Don't have an account yet
          </Heading>
          <MdQuestionMark size={25} />
        </Row>
        <Button $variation="primary" $size="small">
          Sign Up Here
        </Button>
      </Row>
    </StyledLogin>
  );
}

export default Login;
