import DashboardItem from "../layout/DashboardItem";
import Row from "../layout/Row";
import Button from "../ui/Button";
import InsetSpan from "../ui/InsetSpan";
import Bold from "../typography/Bold";
import Heading from "../typography/Heading";
import RouterLink from "../routing/RouterLink";
import styled from "styled-components";

const StyledRow = styled(Row)`
  flex-direction: column;
`;

function DashboardExplorationsCreated({ profile, explorations }) {
  const createdExplorations = explorations.filter(
    (exploration) => exploration.createdBy === profile._id,
  );

  return (
    <DashboardItem $variation="center">
      <Row $gap="var(--gap-lg)">
        <Heading as="h4" $color="var(--color-red-400)">
          Explorations Created
        </Heading>
        <StyledRow $direction="horizontal" $gap="var(--gap-md)" $align="center">
          <InsetSpan>{createdExplorations.length}</InsetSpan>
          <Bold>
            exploration{createdExplorations.length !== 1 && "s"} created
          </Bold>
        </StyledRow>
        <Row>
          <RouterLink to={`/${profile.role}/explorations/create`}>
            <Button $variation="secondary" $size="small">
              Create Exploration
            </Button>
          </RouterLink>

          <RouterLink to={`/${profile.role}/explorations`}>
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
