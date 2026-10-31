import { getMe } from "../../../../services/auth";
import { getAllExplorationProgress } from "../../../../services/explorationProgress";
import { getExplorationsData } from "../../../../services/explorations";
import { getAllUsers, getUsers } from "../../../../services/users";

function isActiveWithinDays(visitLog, days) {
  if (!visitLog?.length) return false;

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);

  return visitLog.some((visit) => new Date(visit.visitedAt) > cutoff);
}

export async function ambassadorDashboardLoader() {
  // Fetching data from database
  const users = await getAllUsers();
  const explorations = await getExplorationsData();
  const profileData = await getMe();
  const { data: explorationProgress } = await getAllExplorationProgress();

  // Deriving data points for dashboard
  const explorersData = users.data.data.filter(
    (user) => user.role === "explorer",
  );

  const activeThisWeek = [
    ...new Set(
      explorationProgress.data
        .filter((progress) => {
          return isActiveWithinDays(progress.visitLog, 7);
        })
        .map((progress) => progress.user),
    ),
  ];

  const activeThisMonth = [
    ...new Set(
      explorationProgress.data
        .filter((progress) => {
          return isActiveWithinDays(progress.visitLog, 30);
        })
        .map((progress) => progress.user),
    ),
  ];

  const userStats = {
    numWeeklyExplorers: activeThisWeek,
    numMonthlyExplorers: activeThisMonth,
  };

  return {
    profileData: profileData.data.data,
    explorations: explorations.data.data,
    explorationProgress: explorationProgress.data,
    users: explorersData,
    userStats,
  };
}
