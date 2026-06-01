import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";

const NumTotalExplorations = function () {
  return <DashboardItem>num total explorations</DashboardItem>;
};

const NumExplorationsCompleted = function () {
  return <DashboardItem>num explorations completed </DashboardItem>;
};

function AmbassadorDashboardExplorationStats() {
  return (
    <Row $direction="horizontal" $gap="var(--gap-xl)">
      <NumTotalExplorations />
      <NumExplorationsCompleted />
    </Row>
  );
}

export default AmbassadorDashboardExplorationStats;
