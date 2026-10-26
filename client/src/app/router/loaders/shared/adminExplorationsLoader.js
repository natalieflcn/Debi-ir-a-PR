import { getExplorationsSummary } from "../../../../services/explorations";
import { getAllUsers, getUsers } from "../../../../services/users";

export async function adminExplorationsLoader({ request }) {
  const { searchParams } = new URL(request.url);

  const { data: explorations, total } =
    await getExplorationsSummary(searchParams);
  const { data: users } = await getAllUsers();

  // console.log(await getExplorationsSummary());
  return {
    explorations: explorations.data,
    total: total,
    results: explorations.results,
    users: users.data,
  };
}
