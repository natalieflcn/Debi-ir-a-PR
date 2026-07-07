const badges = [
  {
    id: "badge_toa_alta",
    name: "Toa Alta Explorer",
    description: "Completed the Toa Alta Tour",
    image: "/badges/toa-alta.png",
    explorationId: "exp_001", // which exploration awards this badge (null if general)
    type: "completion", // "completion" | "milestone" | "special"
  },
  {
    id: "badge_5_explorations",
    name: "Seasoned Explorer",
    description: "Completed 5 explorations",
    image: "/badges/seasoned.png",
    explorationId: null,
    type: "milestone",
    threshold: 5, // how many completions to unlock
  },
];

export default badges;
