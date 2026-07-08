import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import SmallText from "../../../../shared/components/typography/SmallText";
import InsetSpan from "../../../../shared/components/ui/InsetSpan";

const NumTotalUsers = function ({ numExplorers }) {
  return (
    <DashboardItem>
      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Total Explorers
          </Heading>
          <SmallText>
            (The total number of Explorers enrolled in Debí ir a PR)
          </SmallText>
        </Row>
        <InsetSpan>{numExplorers}</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

const NumMonthlyUsers = function ({ numExplorers }) {
  return (
    <DashboardItem>
      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Monthly Explorers
          </Heading>
          <SmallText>
            (The total number of Explorers that were active this month)
          </SmallText>
        </Row>
        <InsetSpan>{numExplorers}</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

const NumWeeklyUsers = function ({ numExplorers }) {
  return (
    <DashboardItem>
      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Weekly Explorers
          </Heading>
          <SmallText>
            (The total number of Explorers that were active this week)
          </SmallText>
        </Row>
        <InsetSpan>{numExplorers}</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

function AmbassadorDashboardUserStats({
  usersData,
  numMonthlyExplorers,
  numWeeklyExplorers,
}) {
  const numTotalExplorers = usersData.length;

  return (
    <Row>
      <NumTotalUsers numExplorers={numTotalExplorers} />
      <NumMonthlyUsers numExplorers={numMonthlyExplorers} />
      <NumWeeklyUsers numExplorers={numWeeklyExplorers} />
    </Row>
  );
}

export default AmbassadorDashboardUserStats;
