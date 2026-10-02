import {
  getAllMyExplorationProgress,
  getExplorationProgress,
  getUserExplorationProgress,
} from "../../../../services/explorationProgress";
import { getExplorationsSummary } from "../../../../services/explorations";

export async function explorerExplorationsLoader() {
  const { data } = await getExplorationsSummary();
  // const { data: progress } = await getAllMyExplorationProgress();

  // console.log(await getExplorationsSummary());
  return { explorations: data.data };
}
