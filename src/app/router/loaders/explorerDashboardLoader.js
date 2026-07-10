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
        locationsVisited: 1, // derive progress % here: 4/12 = 33%
        status: "in_progress", // "not_started" | "in_progress" | "completed"
        startedAt: "2025-03-01",
        completedAt: null,
        lastVisitedAt: "2025-06-20",
      },
      {
        explorationId: "exp_002", // FK → explorationsData
        locationsVisited: 2, // derive progress % here: 4/12 = 33%
        status: "in_progress", // "not_started" | "in_progress" | "completed"
        startedAt: "2025-03-01",
        completedAt: null,
        lastVisitedAt: "2025-06-20",
      },
      {
        explorationId: "exp_003", // FK → explorationsData
        locationsVisited: 1, // derive progress % here: 4/12 = 33%
        status: "in_progress", // "not_started" | "in_progress" | "completed"
        startedAt: "2025-03-01",
        completedAt: null,
        lastVisitedAt: "2025-06-20",
      },
      {
        explorationId: "exp_004", // FK → explorationsData
        locationsVisited: 0, // derive progress % here: 4/12 = 33%
        status: "in_progress", // "not_started" | "in_progress" | "completed"
        startedAt: "2025-03-01",
        completedAt: null,
        lastVisitedAt: "2025-06-20",
      },
      {
        explorationId: "exp_005", // FK → explorationsData
        locationsVisited: 2, // derive progress % here: 4/12 = 33%
        status: "in_progress", // "not_started" | "in_progress" | "completed"
        startedAt: "2025-03-01",
        completedAt: null,
        lastVisitedAt: "2025-06-20",
      },
      {
        explorationId: "exp_006", // FK → explorationsData
        locationsVisited: 1, // derive progress % here: 4/12 = 33%
        status: "completed", // "not_started" | "in_progress" | "completed"
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
        explorationId: "exp_001",
        locationId: "loc_02",
        visitedAt: "2026-07-10T14:00:00Z",
      },
      {
        explorationId: "exp_002",
        locationId: "loc_04",
        visitedAt: "2026-07-07T10:00:00Z",
      },
      {
        explorationId: "exp_002",
        locationId: "loc_05",
        visitedAt: "2026-07-01T14:00:00Z",
      },
      {
        explorationId: "exp_003",
        locationId: "loc_06",
        visitedAt: "2026-05-22T10:00:00Z",
      },
      {
        explorationId: "exp_004",
        locationId: "loc_08",
        visitedAt: "2026-01-01T14:00:00Z",
      },
      {
        explorationId: "exp_004",
        locationId: "loc_10",
        visitedAt: "2026-07-05T10:00:00Z",
      },
      {
        explorationId: "exp_005",
        locationId: "loc_11",
        visitedAt: "2026-03-20T14:00:00Z",
      },
      {
        explorationId: "exp_005",
        locationId: "loc_12",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_006",
        locationId: "loc_13",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_007",
        locationId: "loc_14",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_008",
        locationId: "loc_17",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_009",
        locationId: "loc_19",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_009",
        locationId: "loc_20",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_010",
        locationId: "loc_22",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_012",
        locationId: "loc_25",
        visitedAt: "2025-06-22T10:00:00Z",
      },
    ],
  };

  return { explorations, profileData, userHistory };
}
