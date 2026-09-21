import fakeExplorationsData from "../../../features/explorer/pages/explorations/fakeExplorationsData";
import { getExplorationsSummary } from "../../../services/explorations";

export async function explorationsLoader() {
  const { data } = await getExplorationsSummary();
  // console.log(await getExplorationsSummary());
  return { explorations: data.data };
}
