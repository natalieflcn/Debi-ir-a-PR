import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Bold from "../../../../shared/components/typography/Bold";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import InsetSpan from "../../../../shared/components/ui/InsetSpan";

function AmbassadorDashboardExplorationsCreated() {
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
          <Button $variation="darkRed" $size="small">
            Manage Explorations
          </Button>
        </Row>
      </Row>
    </DashboardItem>
  );
}

export default AmbassadorDashboardExplorationsCreated;
