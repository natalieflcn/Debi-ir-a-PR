import { getMe } from "../../../../services/auth";
import { getAllExplorationProgress } from "../../../../services/explorationProgress";
import { getExplorationsData } from "../../../../services/explorations";
import { getAllUsers, getUsers } from "../../../../services/users";

export async function adminDashboardLoader() {
  const users = await getAllUsers();
  const profile = await getMe();
  const explorations = await getExplorationsData();
  const explorationProgress = await getAllExplorationProgress();

  return {
    users: users.data.data,
    profileData: profile.data.data,
    explorations: explorations.data.data,
    explorationProgress: explorationProgress.data.data,
  };
}
