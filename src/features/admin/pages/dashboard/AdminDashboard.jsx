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

function AdminDashboard() {
  const { users, profileData } = useLoaderData();

  const explorersData = users.filter((user) => user.userType === "explorer");
  const ambassadorsData = users.filter(
    (user) => user.userType === "ambassador",
  );

  return (
    <StyledAdminDashboard>
      <Heading as="h2" $shadowColor="var(--color-red-300)">
        WELCOME, ADMIN
      </Heading>

      <Row $direction="horizontal" $gap="var(--gap-xl)">
        <AdminDashboardProfileItem profileData={profileData} />
        <DashboardExplorationsCreated type="admin" profile={profileData} />
        <AdminDashboardUserStats users={users} />
      </Row>

      <Row>
        <DashboardNewExplorers usersData={explorersData} />
        <DashboardTopExplorers usersData={explorersData} />
        <AdminDashboardNewAmbassadors usersData={ambassadorsData} />
        <AdminDashboardTopAmbassadors usersData={ambassadorsData} />
      </Row>
    </StyledAdminDashboard>
  );
}

export default AdminDashboard;
