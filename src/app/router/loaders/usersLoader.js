import { formatDate } from "../../../shared/utils/helpers";

const fakeUsers = [
  {
    id: "user_001",
    name: "Natalie Falcon",
    userType: "explorer",
    title: "First Explorer",
    explorationsCompleted: 6,
    email: "natalie.dflcn@gmail.com",
    dateJoined: "2025-01-17",
    avatar: "/src/assets/images/content/TEMP.png",
  },
  {
    id: "user_002",
    name: "Alethia Ragland",
    userType: "ambassador",
    title: "Ambassador",
    email: "thearagland@gmail.com",
    dateJoined: "2025-01-17",
    isAdmin: true,
    createdExplorationIds: ["exp_001", "exp_002", "exp_005"],
  },
  {
    id: "user_003",
    name: "Jorge Gonzalez",
    userType: "explorer",
    title: "First Explorer",
    email: "genioa@gmail.com",
    explorationsCompleted: 6,
    dateJoined: "2025-01-17",
  },
  {
    id: "user_004",
    name: "Natalie Falcon",
    userType: "explorer",
    title: "First Explorer",
    explorationsCompleted: 6,
    email: "natalie.dflcn@gmail.com",
    dateJoined: "2025-01-17",
  },
  {
    id: "user_005",
    name: "Alethia Ragland",
    userType: "ambassador",
    title: "First Explorer",
    email: "thearagland@gmail.com",
    dateJoined: "2025-01-17",
    isAdmin: false,
    createdExplorationIds: ["exp_001", "exp_002", "exp_005"],
  },
  {
    id: "user_006",
    name: "Jorge Gonzalez",
    userType: "explorer",
    explorationsCompleted: 6,
    title: "First Explorer",
    email: "genioa@gmail.com",
    dateJoined: "2025-01-17",
  },
];

export async function usersLoader() {
  const usersData = fakeUsers.map((user) => ({
    ...user,
    dateJoined: formatDate(user.dateJoined),
  }));

  return usersData;
}
