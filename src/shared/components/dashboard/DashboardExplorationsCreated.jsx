import DashboardItem from "../layout/DashboardItem";
import Row from "../layout/Row";
import Button from "../ui/Button";
import InsetSpan from "../ui/InsetSpan";
import Bold from "../typography/Bold";
import Heading from "../typography/Heading";
import styled from "styled-components";

function DashboardExplorationsCreated() {
  return (
    <DashboardItem $variation="center" $height="18rem">
      <Row $gap="var(--gap-xl)">
        <Heading as="h4" $color="var(--color-red-400)">
          Explorations Created
        </Heading>
        <Row $direction="horizontal" $gap="var(--gap-md)" $align="center">
          <InsetSpan>5</InsetSpan> <Bold>explorations created</Bold>
        </Row>
        <Row>
          <Button $variation="secondary" $size="small">
            Create Exploration
          </Button>
          <Button $variation="primary" $size="small">
            Manage Explorations
          </Button>
        </Row>
      </Row>
    </DashboardItem>
  );
}

export default DashboardExplorationsCreated;
