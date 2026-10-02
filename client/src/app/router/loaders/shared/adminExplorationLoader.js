import { getExploration } from "../../../../services/explorations";
import { getUsers } from "../../../../services/users";

export async function adminExplorationLoader({ params }) {
  const { explorationId } = params;

  const { data } = await getExploration(explorationId);
  const { data: users } = await getUsers();

  return { exploration: data.data, users: users.data };
}
