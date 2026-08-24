import styled from "styled-components";
import Heading from "../../../../shared/components/typography/Heading";
import Row from "../../../../shared/components/layout/Row";
import AmbassadorDashboardUserStats from "../../components/dashboard/AmbassadorDashboardUserStats";
import AmbassadorDashboardProfileItem from "../../components/dashboard/AmbassadorDashboardProfileItem";

import AmbassadorDashboardExplorationStats from "../../components/dashboard/AmbassadorDashboardExplorationStats";
import AmbassadorDashboardLocationStats from "../../components/dashboard/AmbassadorDashboardLocationStats";
import AmbassadorDashboardTopExplorations from "../../components/dashboard/AmbassadorDashboardTopExplorations";
import AmbassadorDashboardTopLocations from "../../components/dashboard/AmbassadorDashboardTopLocations";

import DashboardExplorationsCreated from "../../../../shared/components/dashboard/DashboardExplorationsCreated";
import DashboardNewExplorers from "../../../../shared/components/dashboard/DashboardNewExplorers";
import DashboardTopExplorers from "../../../../shared/components/dashboard/DashboardTopExplorers";
import { useLoaderData } from "react-router-dom";

const StyledAmbassadorDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);

  /* profile exploration userstats
  newexplorers
  top explorers
  totalexplorations explorationscompleted
  topexplorations
  totallocations locationsexplored
  toplocations
   */
`;

const StyledAmbassadorHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "profile explorationsCreated userStats";
  gap: var(--gap-xl);

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "profile explorationsCreated"
      "userStats userStats";
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "profile"
      "explorationsCreated"
      "userStats";
  }
`;

const StyledAmbassadorStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "newExplorers newExplorers"
    "topExplorers topExplorers"
    "explorationStats explorationStats"
    "topExplorations topExplorations"
    "locationStats locationStats"
    "topLocations topLocations";
  gap: var(--gap-xl);
`;

const GridArea = styled.div`
  display: flex;
  grid-area: ${({ $area }) => $area};
  min-width: 0;
`;

function AmbassadorDashboard() {
  const {
    explorers,
    profileData,
    explorations,
    numWeeklyExplorers,
    numMonthlyExplorers,
    numExplorationsCompleted,
    userHistories,
  } = useLoaderData();

  return (
    <StyledAmbassadorDashboard>
      <Heading as="h2" $shadowColor="var(--color-red-300)">
        WELCOME, AMBASSADOR
      </Heading>

      <StyledAmbassadorHighlights>
        <GridArea $area="profile">
          <AmbassadorDashboardProfileItem profileData={profileData} />
        </GridArea>
        <GridArea $area="explorationsCreated">
          <DashboardExplorationsCreated
            type="ambassador"
            profile={profileData}
          />
        </GridArea>
        <GridArea $area="userStats">
          <AmbassadorDashboardUserStats
            usersData={explorers}
            numWeeklyExplorers={numWeeklyExplorers}
            numMonthlyExplorers={numMonthlyExplorers}
          />
        </GridArea>
      </StyledAmbassadorHighlights>

      <StyledAmbassadorStats>
        <GridArea $area="newExplorers">
          <DashboardNewExplorers usersData={explorers} />
        </GridArea>
        <GridArea $area="topExplorers">
          <DashboardTopExplorers usersData={explorers} />
        </GridArea>

        <GridArea $area="explorationStats">
          <AmbassadorDashboardExplorationStats
            explorations={explorations}
            numExplorationsCompleted={numExplorationsCompleted}
          />
        </GridArea>
        <GridArea $area="topExplorations">
          <AmbassadorDashboardTopExplorations
            explorations={explorations}
            userHistories={userHistories}
          />
        </GridArea>
        <GridArea $area="locationStats">
          <AmbassadorDashboardLocationStats
            explorations={explorations}
            userHistories={userHistories}
          />
        </GridArea>
        <GridArea $area="topLocations">
          <AmbassadorDashboardTopLocations />
        </GridArea>
      </StyledAmbassadorStats>
    </StyledAmbassadorDashboard>
  );
}

export default AmbassadorDashboard;
