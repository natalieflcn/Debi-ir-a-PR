import styled from "styled-components";
import ExplorerDashboardItem from "../../../../shared/components/layout/DashboardItem";
import ExplorerDashboardBadgeItem from "../../components/dashboard/ExplorerDashboardBadgeItem";
import ExplorerDashboardExplorationsItem from "../../components/dashboard/ExplorerDashboardExplorationsItem";
import ExplorerDashboardProfileItem from "../../components/dashboard/ExplorerDashboardProfileItem";
import ExplorerDashboardHistoryItem from "../../components/dashboard/ExplorerDashboardHistoryItem";
import ExplorerDashboardStatsItems from "../../components/dashboard/ExplorerDashboardStatsItem";
import Row from "../../../../shared/components/layout/Row";
import ExplorerDashboardFactsItem from "../../components/dashboard/ExplorerDashboardFactsItem";
import Heading from "../../../../shared/components/typography/Heading";

const StyledExplorerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

const StyledExplorerDashboardRow = styled(Row)`
  height: 20rem;
  flex: 1;
`;

function ExplorerDashboard() {
  return (
    <StyledExplorerDashboard>
      <Heading as="h2" $shadowColor="var(--color-blue-300)">
        WELCOME, NATALIE
      </Heading>
      <Row $direction="horizontal" $gap="var(--gap-md)">
        <ExplorerDashboardProfileItem></ExplorerDashboardProfileItem>

        <Row>
          <Row $direction="horizontal" $gap="var(--gap-md)">
            <ExplorerDashboardBadgeItem></ExplorerDashboardBadgeItem>

            <ExplorerDashboardHistoryItem></ExplorerDashboardHistoryItem>
          </Row>

          <ExplorerDashboardFactsItem></ExplorerDashboardFactsItem>
        </Row>
      </Row>
      <Row>
        <ExplorerDashboardStatsItems></ExplorerDashboardStatsItems>
      </Row>
      <Row>
        <ExplorerDashboardExplorationsItem></ExplorerDashboardExplorationsItem>

        <ExplorerDashboardExplorationsItem></ExplorerDashboardExplorationsItem>
      </Row>
    </StyledExplorerDashboard>
  );
}

export default ExplorerDashboard;
