import styled from "styled-components";
import Row from "../layout/Row";
import Heading from "../typography/Heading";

const FormLabel = styled(Heading)`
  /* width: 15rem; */
  min-width: 12rem;
  align-self: flex-start;

  @media (max-width: 800px) {
    min-width: 10rem;
  }

  @media (max-width: 690px) {
    align-self: center;
    text-align: center;
    min-width: 0;
  }
`;

const StyledRow = styled(Row)`
  @media (max-width: 690px) {
    flex-direction: column;
    align-items: stretch;
    gap: var(--gap-sm);
    width: 100%;
  }
`;

function FormField({ label, children }) {
  return (
    <StyledRow $direction="horizontal" $gap="var(--gap-md)">
      <FormLabel as="h5" $color="var(--color-red-400)">
        {label}
      </FormLabel>
      {children}
    </StyledRow>
  );
}

export default FormField;
