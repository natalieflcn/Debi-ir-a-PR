import userProgress from "../../../../data/fakeUserProgress";
import fakeExplorationsData from "../../../features/explorer/pages/explorations/fakeExplorationsData";

const explorers = [
  {
    id: "user_001",
    name: "Natalie Falcon",
    userType: "explorer",
    title: "First Explorer",
    explorationsStarted: 10,
    explorationsCompleted: 14,
    email: "natalie.dflcn@gmail.com",
    dateJoined: "2028-01-17",
    avatar: "/src/assets/images/content/TEMP.png",
  },
  {
    id: "user_003",
    name: "Jorge Gonzalez",
    userType: "explorer",
    title: "First Explorer",
    email: "genioa@gmail.com",
    explorationsStarted: 10,
    explorationsCompleted: 6,
    dateJoined: "2023-11-13",
  },
  {
    id: "user_004",
    name: "Natalie Falcon",
    userType: "explorer",
    title: "First Explorer",
    explorationsStarted: 8,
    explorationsCompleted: 62,
    email: "natalie.dflcn@gmail.com",
    dateJoined: "2024-03-17",
  },
  {
    id: "user_006",
    name: "Jorge Gonzalez",
    userType: "explorer",
    explorationsCompleted: 61,
    explorationsStarted: 12,
    title: "First Explorer",
    email: "genioa@gmail.com",
    dateJoined: "2025-01-11",
  },
];

const profileData = {
  name: "Natalie Loader",
  title: "Ambassador",
  email: "natalie.dflcn@gmail.com",
  password: "hello123",
  dateJoined: "January 7, 2026",
  isAdmin: false,
  createdExplorationIds: ["exp_001", "exp_002"],
};

const explorations = fakeExplorationsData;

function isActiveWithinDays(visitLog, days) {
  if (!visitLog?.length) return false;

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);

  // check if any visit is more recent than the cutoff
  return visitLog.some((visit) => new Date(visit.visitedAt) > cutoff);
}

export async function ambassadorDashboardLoader() {
  const userHistories = userProgress;

  const activeThisWeek = userHistories.filter((history) => {
    return isActiveWithinDays(history.visitLog, 7);
  });

  const activeThisMonth = userHistories.filter((history) =>
    isActiveWithinDays(history.visitLog, 30),
  );

  const completedExplorationIds = new Set(
    userHistories.flatMap((history) =>
      history.explorationProgress
        .filter((progress) => progress.status === "completed")
        .map((progress) => progress.explorationId),
    ),
  );

  const numExplorationsCompleted = completedExplorationIds.size;

  return {
    profileData,
    explorations,
    explorers,
    numWeeklyExplorers: activeThisWeek.length,
    numMonthlyExplorers: activeThisMonth.length,
    numExplorationsCompleted,
    userHistories,
  };
}
