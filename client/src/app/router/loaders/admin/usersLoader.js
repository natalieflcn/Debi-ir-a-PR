import { getUsers } from "../../../../services/users";

const ITEMS_PER_PAGE = 10;

export async function usersLoader({ request }) {
  const { searchParams } = new URL(request.url);

  const params = new URLSearchParams();
  for (const key of ["search", "role", "sort", "page"]) {
    const value = searchParams.get(key);
    if (value) params.set(key, value);
  }
  params.set("limit", String(ITEMS_PER_PAGE));

  const { data: users, total } = await getUsers(params);
  return { users: users.data, total: total };
}
