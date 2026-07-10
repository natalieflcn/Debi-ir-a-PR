import { BsBadgeSd } from "react-icons/bs";
import fakeExplorationsData from "../../../features/explorer/pages/explorations/fakeExplorationsData";
import badges from "../../../../data/badges";

export async function explorerDashboardLoader() {
  const explorations = fakeExplorationsData;
  const profileData = {
    name: "Natalie Loader",
    title: "First Explorer",
    avatar: "",
    email: "natalie.dflcn@gmail.com",
    password: "hello123",
    dateJoined: "January 7, 2026",
  };

  const userHistory = {
    userId: "user_001",
    explorationProgress: [
      {
        explorationId: "exp_001", // FK → explorationsData
        locationsVisited: 4, // derive progress % here: 4/12 = 33%
        status: "in_progress", // "not_started" | "in_progress" | "completed"
        startedAt: "2025-03-01",
        completedAt: null,
        lastVisitedAt: "2025-06-20",
      },
    ],
    earnedBadges: [
      {
        badgeId: "badge_toa_alta", // FK → explorationsData[n].badge
        earnedAt: "2025-06-20",
      },
      {
        badgeId: "badge_toa_baja", // FK → explorationsData[n].badge
        earnedAt: "2025-06-29",
      },
    ],
    visitLog: [
      // raw event log — drives HistoryItem aggregations
      {
        explorationId: "exp_002",
        locationId: "loc_03",
        visitedAt: "2025-06-20T14:00:00Z",
      },
      {
        explorationId: "exp_001",
        locationId: "loc_04",
        visitedAt: "2025-06-22T10:00:00Z",
      },
    ],
  };

  return { explorations, profileData, userHistory };
}
