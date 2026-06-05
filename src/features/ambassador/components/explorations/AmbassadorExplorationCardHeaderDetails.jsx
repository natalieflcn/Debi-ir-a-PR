import Row from "../../../../shared/components/layout/Row";
import Bold from "../../../../shared/components/typography/Bold";
import Button from "../../../../shared/components/ui/Button";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";

function AmbassadorExplorationCardHeaderDetails({
  dateUpdated = "today",
  author = "me",
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
          <Bold $color="var(--color-dark-200)">Last Updated {dateUpdated}</Bold>
        </Row>
      </Row>
      <Button $variation="primary" $size="small">
        Edit Exploration
      </Button>
    </>
  );
}

export default AmbassadorExplorationCardHeaderDetails;
