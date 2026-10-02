import { getMe } from "../../../../services/auth";

export async function profileLoader() {
  const { data } = await getMe();

  console.log(data.data);
  return { user: data.data };
}
