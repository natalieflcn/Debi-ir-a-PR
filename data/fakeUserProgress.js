// userHistory for userId: "user_natalie"
const userProgress = {
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

export default userProgress;
