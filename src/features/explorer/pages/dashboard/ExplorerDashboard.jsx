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
import badges from "../../../../../data/badges";

const StyledExplorerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function getCurrentExplorations(explorations, userHistory) {
  const explorationIds = [
    ...new Set(
      userHistory.explorationProgress
        .filter((exploration) => exploration.status === "in_progress")
        .map((exploration) => exploration.explorationId),
    ),
  ];

  const currentExplorations = explorations.filter((exploration) =>
    explorationIds.includes(exploration.id),
  );

  return currentExplorations;
}

function getFeaturedExplorations(explorations) {
  const featuredExplorations = explorations.filter(
    (exploration) => exploration.featured === true,
  );

  return featuredExplorations;
}

function getUserProgress(explorations, userHistory) {
  const userProgress = userHistory.explorationProgress.map((exploration) => {
    const totalLocations = explorations.find(
      (currentExploration) =>
        currentExploration.id === exploration.explorationId,
    ).locationIds.length;

    return {
      explorationId: exploration.explorationId,
      userProgress: Math.round(
        (exploration.locationsVisited / totalLocations) * 100,
      ),
    };
  });

  return userProgress;
}

function ExplorerDashboard() {
  const { profileData, explorations, userHistory } = useLoaderData();

  const currentExplorations = getCurrentExplorations(explorations, userHistory);
  const featuredExplorations = getFeaturedExplorations(explorations);
  const userProgress = getUserProgress(explorations, userHistory);

  return (
    <StyledExplorerDashboard>
      <Heading as="h2" $shadowColor="var(--color-blue-300)">
        WELCOME, NATALIE
      </Heading>

      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <ExplorerDashboardProfileItem profileData={profileData} />
        <ExplorerDashboardBadgeItem userHistory={userHistory} />
        <ExplorerDashboardHistoryItem userHistory={userHistory} />
      </Row>

      <ExplorerDashboardStatsItem userHistory={userHistory} />

      <Row $gap="var(--gap-xl)">
        <ExplorerDashboardExplorationsItem
          title="Current Explorations"
          explorationData={currentExplorations}
          userProgress={userProgress}
        />

        <ExplorerDashboardExplorationsItem
          title="Featured Explorations"
          explorationData={featuredExplorations}
          userProgress={userProgress}
        />
      </Row>
    </StyledExplorerDashboard>
  );
}

export default ExplorerDashboard;
