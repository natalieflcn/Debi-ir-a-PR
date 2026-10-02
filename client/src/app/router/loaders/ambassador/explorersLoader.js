import { getExplorers } from "../../../../services/users";

export async function explorersLoader() {
  const { data } = await getExplorers();

  const users = data.data;

  return users;
}
