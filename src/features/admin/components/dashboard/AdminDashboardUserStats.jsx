import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import SmallText from "../../../../shared/components/typography/SmallText";
import InsetSpan from "../../../../shared/components/ui/InsetSpan";

const NumTotalExplorers = function ({ numExplorers }) {
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

const NumTotalAmbassadors = function ({ numAmbassadors }) {
  return (
    <DashboardItem>
      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Total Ambassadors
          </Heading>
          <SmallText>
            (The total number of Ambassadors enrolled in Debí ir a PR)
          </SmallText>
        </Row>
        <InsetSpan>{numAmbassadors}</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

const NumTotalAdmins = function ({ numAdmins }) {
  return (
    <DashboardItem>
      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <Row $gap="var(--gap-xs)">
          <Heading as="h4" $color="var(--color-red-400)">
            # of Total Admins
          </Heading>
          <SmallText>
            (The total number of Admins managing Debí ir a PR)
          </SmallText>
        </Row>
        <InsetSpan>{numAdmins}</InsetSpan>
      </Row>
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
    <Row>
      <NumTotalExplorers numExplorers={numExplorers} />
      <NumTotalAmbassadors numAmbassadors={numAmbassadors} />
      <NumTotalAdmins numAdmins={numAdmins} />
    </Row>
  );
}

export default AdminDashboardUserStats;
