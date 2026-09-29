import { apiFetch } from "../shared/services/apiFetch";

export async function getExplorationProgress(explorationId) {
  // const { data } = await apiFetch(`/explorations/${explorationSlug}`);

  // const explorationId = data.data._id;

  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress`,
  );
}

export async function startExploration(explorationId) {
  //   const { data } = await apiFetch(`/explorations/${explorationSlug}`);

  //   const explorationId = data.data._id;

  console.log("start exploration running!");
  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress`,
    {
      method: "POST",
    },
  );
}

export async function addVisitLocation(explorationId, locationId) {
  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress`,
    {
      method: "PATCH",
      body: JSON.stringify({
        locationId: locationId,
      }),
    },
  );
}

export async function removeVisitLocation(explorationId, locationId) {
  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress`,
    { method: "DELETE", body: JSON.stringify({ locationId: locationId }) },
  );
}
// PATCH exploration progress
// adding location to visitLog, each visitLog has timestamp
// separate method for removing location from visitLog (one location per location at a time)
// if locations.length === visitLog.length, status is complete, otherwise status is in_progress

// DELETE users
// DELETE me
// Make sure all API method calls are wrapped in try-catch blocks
// Use React Query in conjunction with React loaders
// Create new buttons (Delete)
// Create new pages
