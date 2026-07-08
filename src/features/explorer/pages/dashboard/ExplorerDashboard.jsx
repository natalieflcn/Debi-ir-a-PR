import styled from "styled-components";
import ExplorerDashboardItem from "../../../../shared/components/layout/DashboardItem";
import ExplorerDashboardBadgeItem from "../../components/dashboard/ExplorerDashboardBadgeItem";
import ExplorerDashboardExplorationsItem from "../../components/dashboard/ExplorerDashboardExplorationsItem";
import ExplorerDashboardProfileItem from "../../components/dashboard/ExplorerDashboardProfileItem";
import ExplorerDashboardHistoryItem from "../../components/dashboard/ExplorerDashboardHistoryItem";
import ExplorerDashboardStatsItems from "../../components/dashboard/ExplorerDashboardStatsItem";
import Row from "../../../../shared/components/layout/Row";

import Heading from "../../../../shared/components/typography/Heading";
import ExplorerDashboardStatsItem from "../../components/dashboard/ExplorerDashboardStatsItem";
import { useLoaderData } from "react-router-dom";

const StyledExplorerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

const TEMPCURRENTEXPLORATIONDATA = [
  {
    id: 1,
    name: "Toa Alta",
    description: "lorerio veivoesne v vepins vv oien sv peines vpesvniv",
    progress: 80,
  },
  {
    id: 2,
    name: "Toa Alta",
    description: "lorerio veivoesne v vepins vv oien sv peines vpesvniv",
    progress: 80,
  },
  {
    id: 3,
    name: "Toa Alta",
    description: "lorerio veivoesne v vepins vv oien sv peines vpesvniv",
    progress: 80,
  },
];

const TEMPEXPLORATIONDATA = [
  {
    id: 1,
    name: "Bayamon",
    description: "lorerio veivoesne v vepins vv oien sv peines vpesvniv",
    progress: 80,
  },
  {
    id: 2,
    name: "Bayamon",
    description: "lorerio veivoesne v vepins vv oien sv peines vpesvniv",
    progress: 80,
  },
  {
    id: 3,
    name: "Bayamon",
    description: "lorerio veivoesne v vepins vv oien sv peines vpesvniv",
    progress: 80,
  },
];

function ExplorerDashboard() {
  const { profileData, explorations, userProgress } = useLoaderData();

  return (
    <StyledExplorerDashboard>
      <Heading as="h2" $shadowColor="var(--color-blue-300)">
        WELCOME, NATALIE
      </Heading>

      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <ExplorerDashboardProfileItem profileData={profileData} />
        <ExplorerDashboardBadgeItem />
        <ExplorerDashboardHistoryItem />
      </Row>

      <ExplorerDashboardStatsItem />

      <Row $gap="var(--gap-xl)">
        <ExplorerDashboardExplorationsItem
          title="Current Explorations"
          explorationData={explorations}
        />

        <ExplorerDashboardExplorationsItem
          title="Featured Explorations"
          explorationData={explorations}
        />
      </Row>
    </StyledExplorerDashboard>
  );
}

export default ExplorerDashboard;
