import { apiFetch } from "../shared/services/apiFetch";

export async function getExplorationProgress(explorationSlug) {
  const { data } = await apiFetch(`/explorations/${explorationSlug}`);
  const explorationId = data.data._id;

  console.log(explorationId);
  return await apiFetch(
    `/explorations/${explorationId}/my-exploration-progress`,
  );
}
