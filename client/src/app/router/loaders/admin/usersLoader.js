import { getUsers } from "../../../../services/users";

export async function usersLoader() {
  const { data } = await getUsers();

  const users = data.data;

  return users;
}
