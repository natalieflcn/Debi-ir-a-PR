import { apiFetch } from "../shared/services/apiFetch";

export async function getUsers() {
  return await apiFetch(`/users`);
}

export async function getExplorers() {
  return await apiFetch(`/users?role=explorer`);
}

export async function getUser(userId) {
  return await apiFetch(`/users/${userId}`);
}

export async function toggleAdmin(userId, role) {
  return await apiFetch(`/users/${userId}`, {
    method: "PATCH",
    body: JSON.stringify({ role: role }),
  });
}
