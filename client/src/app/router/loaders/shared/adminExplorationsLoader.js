import { getExplorationsSummary } from "../../../../services/explorations";

export async function adminExplorationsLoader() {
  const { data } = await getExplorationsSummary();
  // console.log(await getExplorationsSummary());
  return { explorations: data.data };
}
