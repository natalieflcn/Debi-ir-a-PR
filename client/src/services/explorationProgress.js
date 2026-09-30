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
  console.log("running add visitlocation");
  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress/locations/${locationId}`,
    {
      method: "POST",
    },
  );
}

export async function removeVisitLocation(explorationId, locationId) {
  console.log("running removevisitlocation");
  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress/locations/${locationId}`,
    { method: "DELETE" },
  );
}
// PATCH exploration progress
// add loading spinner states to exploration location pages
// separate method for removing location from visitLog (one location per location at a time)

// DELETE users
// DELETE me
// Make sure all API method calls are wrapped in try-catch blocks
// add loading spinners everywhere
// Use React Query in conjunction with React loaders
// Create new buttons (Delete)
// Create new pages
