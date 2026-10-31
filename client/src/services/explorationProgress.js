import { apiFetch } from "./utils/apiFetch";

export async function getExplorationProgress(explorationId) {
  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress`,
  );
}

export async function getAllMyExplorationProgress() {
  return await apiFetch(`/exploration-progress/me?limit=all`);
}

export async function getUserExplorationProgress(userId) {
  return await apiFetch(`/users/${userId}/user-exploration-progress?limit=all`);
}

export async function getAllExplorationProgress() {
  return await apiFetch(`/exploration-progress?limit=all`);
}

export async function startExploration(explorationId) {
  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress`,
    {
      method: "POST",
    },
  );
}

export async function endExploration(explorationId) {
  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress`,
    {
      method: "DELETE",
    },
  );
}

export async function addVisitLocation(explorationId, locationId) {
  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress/locations/${locationId}`,
    {
      method: "POST",
    },
  );
}

export async function removeVisitLocation(explorationId, locationId) {
  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress/locations/${locationId}`,
    { method: "DELETE" },
  );
}
