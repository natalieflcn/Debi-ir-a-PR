import {
  getAllMyExplorationProgress,
  getExplorationProgress,
  getUserExplorationProgress,
} from "../../../../services/explorationProgress";
import { getExplorationsSummary } from "../../../../services/explorations";

export async function explorerExplorationsLoader({ request }) {
  const { searchParams } = new URL(request.url);
  const { data, total } = await getExplorationsSummary(searchParams);
  // const { data: progress } = await getAllMyExplorationProgress();

  // console.log(await getExplorationsSummary());
  return { explorations: data.data, total: total };
}
