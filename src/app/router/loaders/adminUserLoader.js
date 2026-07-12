import userHistory from "../../../../data/fakeUserHistory";
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

export async function adminUserLoader({ params }) {
  const { userId } = params;
  console.log(userId);
  const user = fakeUsers.find((user) => user.id === userId);
  const userHistory2 = userHistory.find((history) => history.userId === userId);

  console.log(user, userHistory2);
  return {
    user: { ...user, dateJoined: formatDate(user.dateJoined) },
    userHistory2,
  };
}

// pass explorer id, and admin/ambassador id into this loader, return the specific user and necessary details for the explorer/ambassador/admin-detail components... then destructure from loaded data and pass into props of profileBadgeCollection and other details for admin/ambassador

// then replicate the 'toggle as admin' feature for featureFormToggle, implement this into explorationTagBuilder to toggle featured flag

// then add toggle into explorationFilters to toggle search for featured explorations, both for explorers and admins

// then create new toggle for admins/ambassadors to filter for explorations created by them
