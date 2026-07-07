import fakeExplorationsData from "../../../features/explorer/pages/explorations/fakeExplorationsData";

export async function adminDashboardLoader() {
  const users = [
    {
      id: "user_001",
      name: "Natalie Falcon",
      userType: "explorer",
      title: "First Explorer",
      explorationsStarted: 10,
      explorationsCompleted: 4,
      email: "natalie.dflcn@gmail.com",
      dateJoined: "2028-01-17",
      avatar: "/src/assets/images/content/TEMP.png",
    },
    {
      id: "user_002",
      name: "Alethia Ragland",
      userType: "ambassador",
      title: "Ambassador",
      email: "thearagland@gmail.com",
      dateJoined: "2022-06-17",
      isAdmin: true,
      createdExplorationIds: ["exp_001", "exp_002"],
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
      explorationsCompleted: 6,
      email: "natalie.dflcn@gmail.com",
      dateJoined: "2024-03-17",
    },
    {
      id: "user_005",
      name: "Alethia Ragland",
      userType: "ambassador",
      title: "First Explorer",
      email: "thearagland@gmail.com",
      dateJoined: "2023-01-12",
      isAdmin: false,
      createdExplorationIds: ["exp_001", "exp_002", "exp_005"],
    },
    {
      id: "user_006",
      name: "Jorge Gonzalez",
      userType: "explorer",
      explorationsCompleted: 6,
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
    isAdmin: true,
    createdExplorationIds: ["exp_001", "exp_002", "exp_005"],
  };
  const explorations = fakeExplorationsData;

  return { users, profileData, explorations };
}
