import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";

const NumTotalUsers = function () {
  return <DashboardItem>num total users</DashboardItem>;
};

const NumActiveUsers = function () {
  return <DashboardItem>num active users</DashboardItem>;
};

function AmbassadorDashboardUserStats() {
  return (
    <Row $gap="var(--gap-xl)">
      <NumTotalUsers />
      <NumActiveUsers />
    </Row>
  );
}

export default AmbassadorDashboardUserStats;
