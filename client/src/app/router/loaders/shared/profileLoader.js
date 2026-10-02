import { getMe } from "../../../../services/auth";

export async function profileLoader() {
  const { data } = await getMe();

  return { user: data.data };
}
