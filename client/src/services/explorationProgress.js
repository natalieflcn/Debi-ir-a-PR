import { apiFetch } from "../shared/services/apiFetch";

export async function getExplorationProgress(explorationId) {
  // const { data } = await apiFetch(`/explorations/${explorationSlug}`);

  // const explorationId = data.data._id;

  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress`,
  );
}

export async function getAllMyExplorationProgress() {
  return await apiFetch(`/exploration-progress/me`);
}

export async function getUserExplorationProgress(userId) {
  return await apiFetch(`${userId}/explorations/user-exploration-progress`);
}

export async function startExploration(explorationId) {
  //   const { data } = await apiFetch(`/explorations/${explorationSlug}`);

  //   const explorationId = data.data._id;

  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress`,
    {
      method: "POST",
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

// add loading spinner states to exploration location pages
// separate method for removing location from visitLog (one location per location at a time)

// DELETE users
// DELETE me
// Make sure all API method calls are wrapped in try-catch blocks
// Use React Query in conjunction with React loaders
// Create new buttons (Delete Exploration, Delete Location)
// Create new pages
