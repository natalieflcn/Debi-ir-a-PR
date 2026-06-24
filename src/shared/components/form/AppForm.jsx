import { Form } from "react-router-dom";
import Row from "../layout/Row";
import Input from "./Input";
import Card from "../layout/Card";
import Heading from "../typography/Heading";
import styled from "styled-components";

// function Form({ formValues }) {
//   <Row $gap="var(--gap-md)">
//     {formValues.map((input) => (
//       <Input placeholder={input.placeholder} key={input.id} />
//     ))}
//   </Row>;
// }

const StyledForm = styled(Form)`
  width: 95%;
  margin: 0.5rem;
`;

function AppForm({
  formTitle,
  action,
  method,
  children,
  $height,
  className,
  onSubmit,
}) {
  return (
    <Card
      $cardColor="var(--color-light-100)"
      $height={$height}
      className={className}
    >
      <Row $align="center" $gap="var(--gap-lg)">
        <Heading
          as="h2"
          $color="var(--color-red-200)"
          $shadowColor="var(--color-brown-400)"
        >
          {formTitle}
        </Heading>
        <StyledForm action={action} method={method} onSubmit={onSubmit}>
          <Row $gap="var(--gap-md)">{children}</Row>
        </StyledForm>
      </Row>
    </Card>
  );
}
export default AppForm;
