import styled from "styled-components";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import SmallText from "../../../../shared/components/typography/SmallText";
import InsetSpan from "../../../../shared/components/ui/InsetSpan";

const StyledRow = styled(Row)`
  width: 100%;
`;

const DashboardItemLabelRow = styled(Row)`
  @media (max-width: 1150px) {
    flex-direction: row;
    align-items: center;
    gap: var(--gap-sm);
  }

  @media (max-width: 970px) {
    flex-direction: column;
  }
`;

const DashboardItemContentRow = styled(Row)`
  width: 100%;

  @media (max-width: 570px) {
    flex-direction: column;
    gap: var(--gap-md);
    text-align: center;
    align-items: center;
  }
`;

const NumTotalUsers = function ({ numExplorers }) {
  return (
    <DashboardItem>
      <DashboardItemContentRow $direction="horizontal" $gap="var(--gap-xl)">
        <DashboardItemLabelRow $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Total Explorers
          </Heading>
          <SmallText>
            (The total number of Explorers enrolled in Debí ir a PR)
          </SmallText>
        </DashboardItemLabelRow>
        <InsetSpan>{numExplorers}</InsetSpan>
      </DashboardItemContentRow>
    </DashboardItem>
  );
};

const NumMonthlyUsers = function ({ numExplorers }) {
  return (
    <DashboardItem>
      <DashboardItemContentRow $direction="horizontal" $gap="var(--gap-xl)">
        <DashboardItemLabelRow $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Monthly Explorers
          </Heading>
          <SmallText>
            (The total number of Explorers that were active this month)
          </SmallText>
        </DashboardItemLabelRow>
        <InsetSpan>{numExplorers}</InsetSpan>
      </DashboardItemContentRow>
    </DashboardItem>
  );
};

const NumWeeklyUsers = function ({ numExplorers }) {
  return (
    <DashboardItem>
      <DashboardItemContentRow $direction="horizontal" $gap="var(--gap-xl)">
        <DashboardItemLabelRow $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Weekly Explorers
          </Heading>
          <SmallText>
            (The total number of Explorers that were active this week)
          </SmallText>
        </DashboardItemLabelRow>
        <InsetSpan>{numExplorers}</InsetSpan>
      </DashboardItemContentRow>
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
    <StyledRow>
      <NumTotalUsers numExplorers={numTotalExplorers} />
      <NumMonthlyUsers numExplorers={numMonthlyExplorers} />
      <NumWeeklyUsers numExplorers={numWeeklyExplorers} />
    </StyledRow>
  );
}

export default AmbassadorDashboardUserStats;
