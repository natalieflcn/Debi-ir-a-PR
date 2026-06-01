import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import SmallText from "../../../../shared/components/typography/SmallText";
import InsetSpan from "../../../../shared/components/ui/InsetSpan";

const NumTotalUsers = function () {
  return (
    <DashboardItem>
      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            Number of Explorers
          </Heading>
          <SmallText>
            (The total number of Explorers enrolled in Debí ir a PR)
          </SmallText>
        </Row>
        <InsetSpan>5</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

const NumMonthlyUsers = function () {
  return (
    <DashboardItem>
      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            Number of Monthly Users
          </Heading>
          <SmallText>
            (The total number of Explorers that were active this month)
          </SmallText>
        </Row>
        <InsetSpan>5</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

const NumWeeklyUsers = function () {
  return (
    <DashboardItem>
      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            Number of Weekly Users
          </Heading>
          <SmallText>
            (The total number of Explorers that were active this week)
          </SmallText>
        </Row>
        <InsetSpan>5</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

function AmbassadorDashboardUserStats() {
  return (
    <Row>
      <NumTotalUsers />
      <NumMonthlyUsers />
      <NumWeeklyUsers />
    </Row>
  );
}

export default AmbassadorDashboardUserStats;
