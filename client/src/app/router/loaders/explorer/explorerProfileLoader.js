import { getMe } from "../../../../services/auth";
import { getAllMyExplorationProgress } from "../../../../services/explorationProgress";
import { getAllBadges } from "../../../../services/explorations";

export async function explorerProfileLoader() {
  const me = await getMe();
  const userHistory = await getAllMyExplorationProgress();
  const badges = await getAllBadges();

  return {
    user: me.data.data,
    userHistory: userHistory.data.data,
    badges: badges.data.data,
  };
}
