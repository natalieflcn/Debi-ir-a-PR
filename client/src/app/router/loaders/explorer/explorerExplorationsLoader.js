import {
  getAllMyExplorationProgress,
  getExplorationProgress,
  getUserExplorationProgress,
} from "../../../../services/explorationProgress";
import { getExplorationsSummary } from "../../../../services/explorations";

export async function explorerExplorationsLoader({ request }) {
  const { searchParams } = new URL(request.url);
  const { data, total } = await getExplorationsSummary(searchParams);

  return { explorations: data.data, total: total };
}
