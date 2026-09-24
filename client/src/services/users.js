import { apiFetch } from "../shared/services/apiFetch";

export async function getUsers() {
  return await apiFetch(`/users`);
}
