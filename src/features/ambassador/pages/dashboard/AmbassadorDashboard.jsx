import styled from "styled-components";
import Heading from "../../../../shared/components/typography/Heading";
import Row from "../../../../shared/components/layout/Row";
import AmbassadorDashboardUserStats from "../../components/dashboard/AmbassadorDashboardUserStats";
import AmbassadorDashboardProfileItem from "../../components/dashboard/AmbassadorDashboardProfileItem";
import AmbassadorDashboardNewExplorers from "../../components/dashboard/AmbassadorDashboardNewExplorers";
import AmbassadorDashboardTopExplorers from "../../components/dashboard/AmbassadorDashboardTopExplorers";
import AmbassadorDashboardExplorationStats from "../../components/dashboard/AmbassadorDashboardExplorationStats";
import AmbassadorDashboardLocationStats from "../../components/dashboard/AmbassadorDashboardLocationStats";
import AmbassadorDashboardTopExplorations from "../../components/dashboard/AmbassadorDashboardTopExplorations";
import AmbassadorDashboardTopLocations from "../../components/dashboard/AmbassadorDashboardTopLocations";
import AmbassadorDashboardExplorationsCreated from "../../components/dashboard/AmbassadorDashboardExplorationsCreated";

const StyledAmbassadorDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

function AmbassadorDashboard() {
  return (
    <StyledAmbassadorDashboard>
      <Heading as="h2" $shadowColor="var(--color-red-300)">
        WELCOME, AMBASSADOR
      </Heading>

      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <AmbassadorDashboardProfileItem />
        <AmbassadorDashboardExplorationsCreated />
        <AmbassadorDashboardUserStats />
      </Row>

      <Row>
        <AmbassadorDashboardNewExplorers />
        <AmbassadorDashboardTopExplorers />
      </Row>

      <Row $gap="var(--gap-xl)">
        <AmbassadorDashboardExplorationStats />
        <AmbassadorDashboardTopExplorations />
        <AmbassadorDashboardLocationStats />
        <AmbassadorDashboardTopLocations />
      </Row>
    </StyledAmbassadorDashboard>
  );
}

export default AmbassadorDashboard;
