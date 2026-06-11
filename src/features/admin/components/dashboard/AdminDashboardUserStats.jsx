import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import SmallText from "../../../../shared/components/typography/SmallText";
import InsetSpan from "../../../../shared/components/ui/InsetSpan";

const NumTotalExplorers = function () {
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
        <InsetSpan>5</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

const NumTotalAmbassadors = function () {
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
        <InsetSpan>5</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

const NumTotalAdmins = function () {
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
        <InsetSpan>5</InsetSpan>
      </Row>
    </DashboardItem>
  );
};

function AdminDashboardUserStats() {
  return (
    <Row>
      <NumTotalExplorers />
      <NumTotalAmbassadors />
      <NumTotalAdmins />
    </Row>
  );
}

export default AdminDashboardUserStats;
