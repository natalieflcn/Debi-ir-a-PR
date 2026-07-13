import styled from "styled-components";
import Button from "../ui/Button";
import Row from "../layout/Row";
import { IoPerson } from "react-icons/io5";

const StyledButton = styled(Button)`
  width: 3.5rem;
  height: 3.5rem;
  padding-bottom: 0.1rem;

  background-color: ${({ $active }) =>
    $active ? "var(--color-yellow-0)" : "var(--color-light-100)"};
  color: ${({ $active }) =>
    $active ? "var(--color-brown-300)" : "var(--color-brown-200)"};
  box-shadow: ${({ $active }) =>
    $active
      ? "var(--box-shadow-inset-md) var(--color-brown-400)"
      : "var(--box-shadow-offset-md) var(--color-dark-200)"};
`;

function AdminShowCreatedExplorations({
  showMyExplorations,
  onShowMyExplorations,
}) {
  return (
    <Row $direction="horizontal" $gap="var(--gap-lg)">
      <StyledButton
        $size="square"
        $variation="light"
        onClick={() => onShowMyExplorations(!showMyExplorations)}
        $active={showMyExplorations}
      >
        <IoPerson size={25} />
      </StyledButton>
    </Row>
  );
}

export default AdminShowCreatedExplorations;
