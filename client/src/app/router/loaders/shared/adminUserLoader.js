import { getUserExplorationProgress } from "../../../../services/explorationProgress";
import { getAllBadges } from "../../../../services/explorations";
import { getUser } from "../../../../services/users";

export async function adminUserLoader({ params }) {
  const { userId } = params;

  const { data } = await getUser(userId);

  const userHistory = await getUserExplorationProgress(userId);

  const badges = await getAllBadges();

  return {
    user: data.data,
    userHistory: userHistory.data.data,
    badges: badges.data.data,
  };
}
