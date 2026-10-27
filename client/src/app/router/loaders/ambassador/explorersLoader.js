import { getAllExplorationProgress } from "../../../../services/explorationProgress";
import { getExplorers } from "../../../../services/users";

const ITEMS_PER_PAGE = 10;

export async function explorersLoader({ request }) {
  const { searchParams } = new URL(request.url);

  const params = new URLSearchParams();
  for (const key of ["search", "role", "sort", "page"]) {
    const value = searchParams.get(key);
    if (value) params.set(key, value);
  }
  params.set("limit", String(ITEMS_PER_PAGE));

  const { data: explorationProgress } = await getAllExplorationProgress();

  const { data: users, total } = await getExplorers(params);

  const usersData = users.data;

  const completeUsersData = usersData.map((user) => ({
    ...user,
    completedExplorations: explorationProgress.data
      .filter((progress) => progress.user === user._id)
      .filter((progress) => progress.status === "completed"),
  }));

  return { users: completeUsersData, total: total };
}
