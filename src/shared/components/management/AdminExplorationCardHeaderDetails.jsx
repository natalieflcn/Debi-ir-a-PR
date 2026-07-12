import { IoPersonCircleSharp } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import Row from "../layout/Row";
import Bold from "../typography/Bold";
import Button from "../ui/Button";
import RouterLink from "../routing/RouterLink";
import { formatDate } from "../../utils/helpers";

function AdminExplorationCardHeaderDetails({
  lastUpdated,
  author = "Unknown",
}) {
  return (
    <>
      <Row $direction="horizontal" $align="center" $gap="var(--gap-xl)">
        <Row $direction="horizontal" $gap="var(--gap-sm)">
          <IoPersonCircleSharp size={20} color="var(--color-red-300) " />
          <Bold $color="var(--color-dark-200)">Created By {author}</Bold>
        </Row>

        <Row $direction="horizontal" $gap="var(--gap-sm)">
          <FaPencilAlt color="var(--color-red-300)" />
          <Bold $color="var(--color-dark-200)">
            Last Updated {formatDate(lastUpdated)}
          </Bold>
        </Row>
      </Row>
      <RouterLink to={`edit`}>
        <Button $variation="primary" $size="small">
          Edit Exploration
        </Button>
      </RouterLink>
    </>
  );
}

export default AdminExplorationCardHeaderDetails;
