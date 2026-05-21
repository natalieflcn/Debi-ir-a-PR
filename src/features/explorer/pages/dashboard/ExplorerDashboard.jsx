import styled from "styled-components";
import ExplorerDashboardItem from "../../../../shared/components/layout/DashboardItem";
import ExplorerDashboardBadgeItem from "../../components/dashboard/ExplorerDashboardBadgeItem";
import ExplorerDashboardExplorationsItem from "../../components/dashboard/ExplorerDashboardExplorationsItem";
import ExplorerDashboardProfileItem from "../../components/dashboard/ExplorerDashboardProfileItem";
import ExplorerDashboardProgressItem from "../../components/dashboard/ExplorerDashboardProgressItem";
import ExplorerDashboardStatsItems from "../../components/dashboard/ExplorerDashboardStatsItem";
import Row from "../../../../shared/components/layout/Row";

const StyledExplorerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function ExplorerDashboard() {
  return (
    <StyledExplorerDashboard>
      <Row $direction="horizontal" $gap="var(--gap-md)">
        <ExplorerDashboardProfileItem></ExplorerDashboardProfileItem>

        <ExplorerDashboardBadgeItem></ExplorerDashboardBadgeItem>

        <Row>
          <ExplorerDashboardProgressItem></ExplorerDashboardProgressItem>

          <ExplorerDashboardStatsItems></ExplorerDashboardStatsItems>
        </Row>
      </Row>

      <Row>
        <ExplorerDashboardExplorationsItem></ExplorerDashboardExplorationsItem>

        <ExplorerDashboardExplorationsItem></ExplorerDashboardExplorationsItem>
      </Row>
    </StyledExplorerDashboard>
  );
}

export default ExplorerDashboard;
