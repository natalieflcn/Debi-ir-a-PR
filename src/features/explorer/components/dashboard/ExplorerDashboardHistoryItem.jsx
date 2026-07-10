import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import ExplorerDashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";
import Bold from "../../../../shared/components/typography/Bold";

import InsetSpan from "../../../../shared/components/ui/InsetSpan";

function getCurrentWeek(currentDate) {}

function getCurrentMonth(currentDate) {}

function getCurrentYear(currentDate) {}

function ExplorerDashboardHistoryItem({ userHistory }) {
  const now = new Date();

  const cutoffWeek = new Date();
  cutoffWeek.setDate(now.getDate() - 7);

  const cutoffMonth = new Date();
  cutoffWeek.setDate(now.getDate() - 30);

  const cutoffYear = new Date();

  const numWeeklyLocations = new Set();
  // userHistory.visitLog.filter((visit) => visit.visitedAt < todaysDate),

  const numMonthlyLocations = 0;
  const numYearlyLocations = 0;
  const numExplorationsCompleted = 0;
  const numExplorationsStarted = 0;

  return (
    <DashboardItem $height="18rem">
      <Heading as="h4" $color="var(--color-dark-100)">
        Exploration History
      </Heading>
      <Row $gap="var(--gap-md)">
        <Row $direction="horizontal">
          <Heading as="h6">Locations explored this week</Heading>
          <InsetSpan>
            <Bold>{numWeeklyLocations}</Bold>
          </InsetSpan>
        </Row>
        <Row $direction="horizontal">
          <Heading as="h6">Locations explored this month</Heading>
          <InsetSpan>
            <Bold>{numMonthlyLocations}</Bold>
          </InsetSpan>
        </Row>
        <Row $direction="horizontal">
          <Heading as="h6">Locations explored this year</Heading>
          <InsetSpan>
            <Bold>{numYearlyLocations}</Bold>
          </InsetSpan>
        </Row>
        <Row $direction="horizontal">
          <Heading as="h6">Explorations completed</Heading>
          <InsetSpan>
            <Bold>{numExplorationsCompleted}</Bold>
          </InsetSpan>
        </Row>
        <Row $direction="horizontal">
          <Heading as="h6">Explorations started</Heading>
          <InsetSpan>
            <Bold>{numExplorationsStarted}</Bold>
          </InsetSpan>
        </Row>
      </Row>
    </DashboardItem>
  );
}

export default ExplorerDashboardHistoryItem;
