import styled from "styled-components";
import Row from "../layout/Row";
import Heading from "../typography/Heading";

const FormLabel = styled(Heading)`
  /* width: 15rem; */
  min-width: 12rem;
  align-self: flex-start;
`;

function FormField({ label, children }) {
  return (
    <Row $direction="horizontal" $gap="var(--gap-md)">
      <FormLabel as="h5" $color="var(--color-red-400)">
        {label}
      </FormLabel>
      {children}
    </Row>
  );
}

export default FormField;
