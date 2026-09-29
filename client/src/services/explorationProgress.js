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

// POST exploration progress
// PATCH exploration progress
// DELETE users
// DELETE me
// Make sure all API method calls are wrapped in try-catch blocks
// Use React Query in conjunction with React loaders
// Create new buttons (Delete)
// Create new pages
