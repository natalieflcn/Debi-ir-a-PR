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

      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <AmbassadorDashboardProfileItem profileData={profileData} />
        <DashboardExplorationsCreated type="ambassador" profile={profileData} />
        <AmbassadorDashboardUserStats
          usersData={explorers}
          numWeeklyExplorers={numWeeklyExplorers}
          numMonthlyExplorers={numMonthlyExplorers}
        />
      </Row>

      <Row>
        <DashboardNewExplorers usersData={explorers} />
        <DashboardTopExplorers usersData={explorers} />
      </Row>

      <Row $gap="var(--gap-xl)">
        <AmbassadorDashboardExplorationStats
          explorations={explorations}
          numExplorationsCompleted={numExplorationsCompleted}
        />
        <AmbassadorDashboardTopExplorations
          explorations={explorations}
          userHistories={userHistories}
        />
        <AmbassadorDashboardLocationStats
          explorations={explorations}
          userHistories={userHistories}
        />
        <AmbassadorDashboardTopLocations />
      </Row>
    </StyledAmbassadorDashboard>
  );
}

export default AmbassadorDashboard;
