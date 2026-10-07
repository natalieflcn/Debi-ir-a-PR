import { getExplorationsSummary } from "../../../../services/explorations";
import { getUsers } from "../../../../services/users";

export async function adminExplorationsLoader() {
  const { data: explorations } = await getExplorationsSummary();
  const { data: users } = await getUsers();

  console.log(explorations);
  // console.log(await getExplorationsSummary());
  return { explorations: explorations.data, users: users.data };
}
