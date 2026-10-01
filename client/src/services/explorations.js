import { apiFetch } from "../shared/services/apiFetch";

export async function getExplorationsData() {
  return apiFetch("/explorations");
}

export async function getExplorationsSummary() {
  return await apiFetch("/explorations/summary");
}

export async function getExploration(explorationId) {
  return await apiFetch(`/explorations/${explorationId}`);
}

export async function createExploration(formData) {
  return await apiFetch(`/explorations`, {
    method: "POST",
    body: JSON.stringify(formData),
  });
}

export async function updateExploration(formData) {
  console.log(formData._id);
  return await apiFetch(`/explorations/${formData._id}`, {
    method: "PATCH",
    body: JSON.stringify(formData),
  });
}

export async function updateExplorationLocation(
  exploration,
  location,
  formData,
) {
  return await apiFetch(`/explorations/${exploration}/locations/${location}`, {
    method: "PATCH",
    body: JSON.stringify(formData),
  });
}

export async function deleteExplorationLocation({ explorationId, locationId }) {
  return await apiFetch(
    `/explorations/${explorationId}/locations/${locationId}`,
    {
      method: "DELETE",
    },
  );
}
export const deleteExploration = {};
