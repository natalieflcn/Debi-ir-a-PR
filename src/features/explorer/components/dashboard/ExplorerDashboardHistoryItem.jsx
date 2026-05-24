import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import ExplorerDashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";
import Bold from "../../../../shared/components/typography/Bold";

import InsetSpan from "../../../../shared/components/ui/InsetSpan";

function ExplorerDashboardHistoryItem() {
  return (
    <DashboardItem $height="5rem">
      <Heading as="h4" $color="var(--color-dark-100)">
        Exploration History
      </Heading>
      <Row $gap="var(--gap-md)">
        <Row $direction="horizontal">
          <Heading as="h6">Places explored this week</Heading>
          <InsetSpan>
            <Bold>5</Bold>
          </InsetSpan>
        </Row>
        <Row $direction="horizontal">
          <Heading as="h6">Places explored this month</Heading>
          <InsetSpan>
            <Bold>5</Bold>
          </InsetSpan>
        </Row>
        <Row $direction="horizontal">
          <Heading as="h6">Places explored this year</Heading>
          <InsetSpan>
            <Bold>5</Bold>
          </InsetSpan>
        </Row>
        <Row $direction="horizontal">
          <Heading as="h6">Explorations completed</Heading>
          <InsetSpan>
            <Bold>5</Bold>
          </InsetSpan>
        </Row>
        <Row $direction="horizontal">
          <Heading as="h6">Explorations started</Heading>
          <InsetSpan>
            <Bold>5</Bold>
          </InsetSpan>
        </Row>
      </Row>
    </DashboardItem>
  );
}

export default ExplorerDashboardHistoryItem;
