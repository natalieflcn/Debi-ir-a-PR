import styled from "styled-components";
import Heading from "../../../../shared/components/typography/Heading";
import Row from "../../../../shared/components/layout/Row";
import AdminDashboardProfileItem from "../../components/dashboard/AdminDashboardProfileItem";
import DashboardExplorationsCreated from "../../../../shared/components/dashboard/DashboardExplorationsCreated";
import AdminDashboardUserStats from "../../components/dashboard/AdminDashboardUserStats";
import DashboardNewExplorers from "../../../../shared/components/dashboard/DashboardNewExplorers";
import DashboardTopExplorers from "../../../../shared/components/dashboard/DashboardTopExplorers";
import AdminDashboardTopAmbassadors from "../../components/dashboard/AdminDashboardTopAmbassadors";
import AdminDashboardNewAmbassadors from "../../components/dashboard/AdminDashboardNewAmbassadors";
import { useLoaderData } from "react-router-dom";

const StyledAdminDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xl);
`;

const StyledAdminHighlights = styled.div`
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

const GridArea = styled.div`
  display: flex;
  grid-area: ${({ $area }) => $area};
  min-width: 0;
`;

function AdminDashboard() {
  const { users, profileData, explorations, explorationProgress } =
    useLoaderData();

  const explorersData = users.filter((user) => user.role === "explorer");
  const ambassadorsData = users.filter(
    (user) => user.role === "ambassador" || user.role === "admin",
  );

  return (
    <StyledAdminDashboard>
      <Heading as="h2" $shadowColor="var(--color-red-300)">
        WELCOME, {profileData.name.split(" ")[0].toUpperCase()}
      </Heading>

      <StyledAdminHighlights>
        <GridArea $area="profile">
          <AdminDashboardProfileItem profileData={profileData} />
        </GridArea>

        <GridArea $area="explorationsCreated">
          <DashboardExplorationsCreated
            profile={profileData}
            explorations={explorations}
          />
        </GridArea>

        <GridArea $area="userStats">
          <AdminDashboardUserStats users={users} />
        </GridArea>
      </StyledAdminHighlights>
      <Row>
        <DashboardNewExplorers usersData={explorersData} />

        <DashboardTopExplorers
          usersData={explorersData}
          explorationProgress={explorationProgress}
        />
        <AdminDashboardNewAmbassadors usersData={ambassadorsData} />
        <AdminDashboardTopAmbassadors
          usersData={ambassadorsData}
          explorations={explorations}
        />
      </Row>
    </StyledAdminDashboard>
  );
}

export default AdminDashboard;
