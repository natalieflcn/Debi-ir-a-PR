import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import ExplorerDashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";
import Bold from "../../../../shared/components/typography/Bold";

import InsetSpan from "../../../../shared/components/ui/InsetSpan";

function getCurrentWeek(currentDate) {
  const date = new Date(currentDate);

  const weekStart = date.getDate() !== 1 ? date.getDay() : 7;

  date.setDate(date.getDate() - weekStart);
  date.setHours(0, 0, 0, 0);

  return date;
}

function getCurrentMonth(currentDate) {
  const date = new Date(currentDate);

  date.setDate(date.getDate() - date.getDate() + 1);
  date.setHours(0, 0, 0, 0);

  return date;
}

function getCurrentYear(currentDate) {
  const date = new Date(currentDate);

  date.setMonth(0);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);

  return date;
}

function ExplorerDashboardHistoryItem({ userHistory }) {
  const now = new Date();

  const cutoffWeek = getCurrentWeek(now);

  const cutoffMonth = getCurrentMonth(now);

  const cutoffYear = getCurrentYear(now);

  const numWeeklyLocations = new Set(
    userHistory.visitLog
      .filter((visit) => new Date(visit.visitedAt) > cutoffWeek)
      .map((visit) => visit.locationId),
  ).size;

  const numMonthlyLocations = new Set(
    userHistory.visitLog
      .filter((visit) => new Date(visit.visitedAt) > cutoffMonth)
      .map((visit) => visit.locationId),
  ).size;

  const numYearlyLocations = new Set(
    userHistory.visitLog
      .filter((visit) => new Date(visit.visitedAt) > cutoffYear)
      .map((visit) => visit.locationId),
  ).size;

  const numExplorationsCompleted = userHistory.explorationProgress.filter(
    (exploration) => exploration.status === "completed",
  ).length;

  const numExplorationsStarted = userHistory.explorationProgress.length;

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
