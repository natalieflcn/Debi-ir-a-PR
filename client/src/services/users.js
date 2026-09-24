import { apiFetch } from "../shared/services/apiFetch";

export async function getUsers() {
  return await apiFetch(`/users`);
}

export async function getExplorers() {
  return await apiFetch(`/users?role=explorer`);
}
