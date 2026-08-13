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

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const DashboardItemContentRow = styled(Row)`
  width: 100%;

  @media (max-width: 580px) {
    flex-direction: column;
    gap: var(--gap-md);
    text-align: center;
    align-items: center;
  }
`;

const NumTotalExplorers = function ({ numExplorers }) {
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

const NumTotalAmbassadors = function ({ numAmbassadors }) {
  return (
    <DashboardItem>
      <DashboardItemContentRow $direction="horizontal" $gap="var(--gap-xl)">
        <DashboardItemLabelRow $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Total Ambassadors
          </Heading>
          <SmallText>
            (The total number of Ambassadors enrolled in Debí ir a PR)
          </SmallText>
        </DashboardItemLabelRow>
        <InsetSpan>{numAmbassadors}</InsetSpan>
      </DashboardItemContentRow>
    </DashboardItem>
  );
};

const NumTotalAdmins = function ({ numAdmins }) {
  return (
    <DashboardItem>
      <DashboardItemContentRow $direction="horizontal" $gap="var(--gap-xl)">
        <DashboardItemLabelRow $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Total Admins
          </Heading>
          <SmallText>
            (The total number of Admins managing Debí ir a PR)
          </SmallText>
        </DashboardItemLabelRow>
        <InsetSpan>{numAdmins}</InsetSpan>
      </DashboardItemContentRow>
    </DashboardItem>
  );
};

function AdminDashboardUserStats({ users }) {
  const numExplorers = users.filter(
    (user) => user.userType === "explorer",
  ).length;
  const numAmbassadors = users.filter(
    (user) => user.userType === "ambassador",
  ).length;
  const numAdmins = users.filter((user) => user.userType === "admin").length;

  return (
    <StyledRow $align="stretch">
      <NumTotalExplorers numExplorers={numExplorers} />
      <NumTotalAmbassadors numAmbassadors={numAmbassadors} />
      <NumTotalAdmins numAdmins={numAdmins} />
    </StyledRow>
  );
}

export default AdminDashboardUserStats;
