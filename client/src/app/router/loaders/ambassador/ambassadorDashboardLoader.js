import { getMe } from "../../../../services/auth";
import { getAllExplorationProgress } from "../../../../services/explorationProgress";
import { getExplorationsData } from "../../../../services/explorations";
import { getUsers } from "../../../../services/users";

// const users = [
//   {
//     id: "user_001",
//     name: "Natalie Falcon",
//     role: "explorer",
//     title: "First Explorer",
//     explorationsStarted: 10,
//     explorationsCompleted: 4,
//     email: "natalie.dflcn@gmail.com",
//     dateJoined: "2028-01-17",
//     avatar: "/src/assets/images/content/TEMP.png",
//   },
//   {
//     id: "user_002",
//     name: "Alethia Ragland",
//     role: "ambassador",
//     title: "Ambassador",
//     email: "thearagland@gmail.com",
//     dateJoined: "2022-06-17",
//     isAdmin: true,
//     createdExplorationIds: ["exp_001", "exp_002"],
//   },
//   {
//     id: "user_003",
//     name: "Jorge Gonzalez",
//     role: "explorer",
//     title: "First Explorer",
//     email: "genioa@gmail.com",
//     explorationsStarted: 10,
//     explorationsCompleted: 6,
//     dateJoined: "2023-11-13",
//   },
//   {
//     id: "user_004",
//     name: "Natalie Falcon",
//     role: "explorer",
//     title: "First Explorer",
//     explorationsStarted: 8,
//     explorationsCompleted: 6,
//     email: "natalie.dflcn@gmail.com",
//     dateJoined: "2024-03-17",
//   },
//   {
//     id: "user_005",
//     name: "Alethia Ragland",
//     role: "ambassador",
//     title: "First Explorer",
//     email: "thearagland@gmail.com",
//     dateJoined: "2023-01-12",
//     isAdmin: false,
//     createdExplorationIds: ["exp_001", "exp_002", "exp_005"],
//   },
//   {
//     id: "user_006",
//     name: "Jorge Gonzalez",
//     role: "explorer",
//     explorationsCompleted: 6,
//     explorationsStarted: 12,
//     title: "First Explorer",
//     email: "genioa@gmail.com",
//     dateJoined: "2025-01-11",
//   },
// ];

function isActiveWithinDays(visitLog, days) {
  if (!visitLog?.length) return false;

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);

  return visitLog.some((visit) => new Date(visit.visitedAt) > cutoff);
}

export async function ambassadorDashboardLoader() {
  // Fetching data from database
  const users = await getUsers();
  const explorations = await getExplorationsData();
  const profileData = await getMe();
  const { data: explorationProgress } = await getAllExplorationProgress();

  // Deriving data points for dashboard
  const explorersData = users.data.data.filter(
    (user) => user.role === "explorer",
  );

  console.log(explorationProgress.data);

  const activeThisWeek = [
    ...new Set(
      explorationProgress.data
        .filter((progress) => {
          return isActiveWithinDays(progress.visitLog, 7);
        })
        .map((progress) => progress.user),
    ),
  ];
  console.log(activeThisWeek);

  const activeThisMonth = [
    ...new Set(
      explorationProgress.data
        .filter((progress) => {
          return isActiveWithinDays(progress.visitLog, 30);
        })
        .map((progress) => progress.user),
    ),
  ];

  //   const completedExplorationIds = new Set(
  //     userHistories.flatMap((history) =>
  //       history.explorationProgress
  //         .filter((progress) => progress.status === "completed")
  //         .map((progress) => progress.explorationId),
  //     ),
  //   );

  //   const numExplorationsCompleted = completedExplorationIds.size;

  const userStats = {
    numWeeklyExplorers: activeThisWeek,
    numMonthlyExplorers: activeThisMonth,
  };

  console.log(userStats);
  return {
    profileData: profileData.data.data,
    explorations: explorations.data.data,
    explorationProgress: explorationProgress.data,
    users: explorersData,
    userStats,
  };
}
