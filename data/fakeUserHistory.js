// userHistory for userId: "user_natalie"
const userHistory = [
  {
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
    ],
    visitLog: [
      // raw event log — drives HistoryItem aggregations
      {
        explorationId: "exp_001",
        locationId: "loc_002",
        visitedAt: "2026-07-10T14:00:00Z",
      },
      {
        explorationId: "exp_002",
        locationId: "loc_004",
        visitedAt: "2026-07-07T10:00:00Z",
      },
      {
        explorationId: "exp_002",
        locationId: "loc_005",
        visitedAt: "2026-07-01T14:00:00Z",
      },
      {
        explorationId: "exp_003",
        locationId: "loc_006",
        visitedAt: "2026-05-22T10:00:00Z",
      },
      {
        explorationId: "exp_004",
        locationId: "loc_008",
        visitedAt: "2026-01-01T14:00:00Z",
      },
      {
        explorationId: "exp_004",
        locationId: "loc_010",
        visitedAt: "2026-07-05T10:00:00Z",
      },
      {
        explorationId: "exp_005",
        locationId: "loc_011",
        visitedAt: "2026-03-20T14:00:00Z",
      },
      {
        explorationId: "exp_005",
        locationId: "loc_012",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_006",
        locationId: "loc_013",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_007",
        locationId: "loc_014",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_008",
        locationId: "loc_017",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_009",
        locationId: "loc_019",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_009",
        locationId: "loc_020",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_010",
        locationId: "loc_022",
        visitedAt: "2025-06-22T10:00:00Z",
      },
      {
        explorationId: "exp_012",
        locationId: "loc_025",
        visitedAt: "2025-06-22T10:00:00Z",
      },
    ],
  },
  {
    userId: "user_003",
    explorationProgress: [
      {
        explorationId: "exp_004", // FK → explorationsData
        locationsVisited: 4, // derive progress % here: 4/12 = 33%
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
    ],
    visitLog: [
      // raw event log — drives HistoryItem aggregations
      {
        explorationId: "exp_001",
        locationId: "loc_05",
        visitedAt: "2025-06-20T14:00:00Z",
      },
      {
        explorationId: "exp_001",
        locationId: "loc_06",
        visitedAt: "2025-06-22T10:00:00Z",
      },
    ],
  },
  {
    userId: "user_004",
    explorationProgress: [
      {
        explorationId: "exp_004", // FK → explorationsData
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
    ],
    visitLog: [
      // raw event log — drives HistoryItem aggregations
      {
        explorationId: "exp_001",
        locationId: "loc_03",
        visitedAt: "2025-06-20T14:00:00Z",
      },
      {
        explorationId: "exp_001",
        locationId: "loc_04",
        visitedAt: "2025-06-22T10:00:00Z",
      },
    ],
  },
  {
    userId: "user_006",
    explorationProgress: [
      {
        explorationId: "exp_001", // FK → explorationsData
        locationsVisited: 4, // derive progress % here: 4/12 = 33%
        status: "in_progress", // "not_started" | "in_progress" | "completed"
        startedAt: "2026-07-02",
        completedAt: null,
        lastVisitedAt: "2026-07-02",
      },
    ],
    earnedBadges: [
      {
        badgeId: "badge_toa_alta", // FK → explorationsData[n].badge
        earnedAt: "2025-06-20",
      },
    ],
    visitLog: [
      // raw event log — drives HistoryItem aggregations
      {
        explorationId: "exp_001",
        locationId: "loc_03",
        visitedAt: "2026-07-01T14:00:00Z",
      },
      {
        explorationId: "exp_001",
        locationId: "loc_04",
        visitedAt: "2026-06-30T10:00:00Z",
      },
    ],
  },
  {
    userId: "user_001",
    explorationProgress: [
      {
        explorationId: "exp_001", // FK → explorationsData
        locationsVisited: 4, // derive progress % here: 4/12 = 33%
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
    ],
    visitLog: [
      // raw event log — drives HistoryItem aggregations
      {
        explorationId: "exp_001",
        locationId: "loc_03",
        visitedAt: "2025-06-20T14:00:00Z",
      },
      {
        explorationId: "exp_001",
        locationId: "loc_04",
        visitedAt: "2026-07-02T10:00:00Z",
      },
    ],
  },
];

export default userHistory;
