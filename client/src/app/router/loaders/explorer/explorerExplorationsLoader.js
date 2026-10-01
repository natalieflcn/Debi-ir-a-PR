import { useAuth } from "../../../../features/auth/contexts/AuthContext";
import {
  getAllMyExplorationProgress,
  getExplorationProgress,
  getUserExplorationProgress,
} from "../../../../services/explorationProgress";
import { getExplorationsSummary } from "../../../../services/explorations";

export async function explorerExplorationsLoader() {
  const { data: explorations } = await getExplorationsSummary();
  const { data: progress } = await getAllMyExplorationProgress();

  // console.log(await getExplorationsSummary());
  return { explorations: explorations.data, userHistory: progress.data };
}
