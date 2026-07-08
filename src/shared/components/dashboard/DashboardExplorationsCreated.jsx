import DashboardItem from "../layout/DashboardItem";
import Row from "../layout/Row";
import Button from "../ui/Button";
import InsetSpan from "../ui/InsetSpan";
import Bold from "../typography/Bold";
import Heading from "../typography/Heading";
import RouterLink from "../routing/RouterLink";

function DashboardExplorationsCreated({ type, profile }) {
  return (
    <DashboardItem $variation="center" $height="18rem">
      <Row $gap="var(--gap-xl)">
        <Heading as="h4" $color="var(--color-red-400)">
          Explorations Created
        </Heading>
        <Row $direction="horizontal" $gap="var(--gap-md)" $align="center">
          <InsetSpan>{profile.createdExplorationIds.length}</InsetSpan>{" "}
          <Bold>explorations created</Bold>
        </Row>
        <Row>
          <RouterLink to={`/${type}/explorations/create`}>
            <Button $variation="secondary" $size="small">
              Create Exploration
            </Button>
          </RouterLink>

          <RouterLink to={`/${type}/explorations`}>
            <Button $variation="primary" $size="small">
              Manage Explorations
            </Button>
          </RouterLink>
        </Row>
      </Row>
    </DashboardItem>
  );
}

export default DashboardExplorationsCreated;
