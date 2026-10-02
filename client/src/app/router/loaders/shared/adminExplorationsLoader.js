import { getExplorationsSummary } from "../../../../services/explorations";
import { getUsers } from "../../../../services/users";

export async function adminExplorationsLoader() {
  const { data } = await getExplorationsSummary();

  // console.log(await getExplorationsSummary());
  return { explorations: data.data };
}
