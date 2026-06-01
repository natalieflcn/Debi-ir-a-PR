import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import Row from "../../../../shared/components/layout/Row";

const NumTotalLocations = function () {
  return <DashboardItem>num total locations</DashboardItem>;
};

const NumLocationsExplored = function () {
  return <DashboardItem>num locations explreod</DashboardItem>;
};
function AmbassadorDashboardLocationStats() {
  return (
    <Row $direction="horizontal" $gap="var(--gap-xl)">
      <NumTotalLocations />
      <NumLocationsExplored />
    </Row>
  );
}

export default AmbassadorDashboardLocationStats;
