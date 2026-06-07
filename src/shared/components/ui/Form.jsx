import Row from "../layout/Row";
import Input from "./Input";

function Form({ formValues }) {
  <Row $gap="var(--gap-md)">
    {formValues.map((input) => (
      <Input placeholder={input.placeholder} key={input.id} />
    ))}
  </Row>;
}

export default Form;
