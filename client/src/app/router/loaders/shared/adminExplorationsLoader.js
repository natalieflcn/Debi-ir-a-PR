import { getExplorationsSummary } from "../../../../services/explorations";
import { getUsers } from "../../../../services/users";

export async function adminExplorationsLoader({ req }) {
  const { searchParams } = new URL(req.url);

  const { data: explorations } = await getExplorationsSummary(searchParams);
  const { data: users } = await getUsers();

  // console.log(await getExplorationsSummary());
  return {
    explorations: explorations.data,
    total: explorations.total,
    results: explorations.results,
    users: users.data,
  };
}
