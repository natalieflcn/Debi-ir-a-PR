import { getAllMyExplorationProgress } from "../../../../services/explorationProgress";
import { getMe } from "../../../../services/auth";
import {
  getAllBadges,
  getExplorationsData,
} from "../../../../services/explorations";

export async function explorerDashboardLoader() {
  const explorations = await getExplorationsData();
  const badges = await getAllBadges();

  const explorationProgress = await getAllMyExplorationProgress();

  const profile = await getMe();

  return {
    explorations: explorations.data.data,
    userHistory: explorationProgress.data.data,
    profileData: profile.data.data,
    badges: badges.data.data,
  };
}
