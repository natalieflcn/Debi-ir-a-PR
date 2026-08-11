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
  /* display: flex;
  flex-direction: column;
  gap: var(--gap-xl); */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "profile badge history"
    "stats stats stats"
    "current current current"
    "featured featured featured";
  gap: var(--gap-xl);

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "profile badge"
      "history history"
      "stats stats"
      "current current"
      "featured featured";
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "profile"
      "badge"
      "history "
      "stats "
      "current "
      "featured ";
  }
`;

const GridArea = styled.div`
  display: flex;
  grid-area: ${({ $area }) => $area};
  min-width: 0;
`;

const StyledRow = styled(Row)`
  align-items: stretch;
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
    <Row $gap="var(--gap-lg)">
      <Heading as="h2" $shadowColor="var(--color-blue-300)">
        WELCOME, NATALIE
      </Heading>
      <StyledExplorerDashboard>
        <GridArea $area="profile">
          <ExplorerDashboardProfileItem profileData={profileData} />
        </GridArea>
        <GridArea $area="badge">
          <ExplorerDashboardBadgeItem userHistory={userHistory} />
        </GridArea>
        <GridArea $area="history">
          <ExplorerDashboardHistoryItem userHistory={userHistory} />
        </GridArea>

        <GridArea $area="stats">
          <ExplorerDashboardStatsItem userHistory={userHistory} />
        </GridArea>

        <GridArea $area="current">
          <ExplorerDashboardExplorationsItem
            title="Current Explorations"
            explorationData={currentExplorations}
            userProgress={userProgress}
          />
        </GridArea>

        <GridArea $area="featured">
          <ExplorerDashboardExplorationsItem
            title="Featured Explorations"
            explorationData={featuredExplorations}
            userProgress={userProgress}
          />
        </GridArea>
      </StyledExplorerDashboard>
    </Row>
  );
}

export default ExplorerDashboard;

//  <Heading as="h2" $shadowColor="var(--color-blue-300)">
//         WELCOME, NATALIE
//       </Heading>

//       <StyledRow $direction="horizontal" $gap="var(--gap-xl)">
//         <ExplorerDashboardProfileItem profileData={profileData} />
//         <ExplorerDashboardBadgeItem userHistory={userHistory} />
//         <ExplorerDashboardHistoryItem userHistory={userHistory} />
//       </StyledRow>

//       <ExplorerDashboardStatsItem userHistory={userHistory} />

//       <Row $gap="var(--gap-xl)">
//         <ExplorerDashboardExplorationsItem
//           title="Current Explorations"
//           explorationData={currentExplorations}
//           userProgress={userProgress}
//         />

//         <ExplorerDashboardExplorationsItem
//           title="Featured Explorations"
//           explorationData={featuredExplorations}
//           userProgress={userProgress}
//         />
//       </Row>
