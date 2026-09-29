import { apiFetch } from "../shared/services/apiFetch";

export async function getExplorationProgress(explorationSlug) {
  const { data } = await apiFetch(`/explorations/${explorationSlug}`);

  const explorationId = data.data._id;

  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress`,
  );
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
