import { useParams } from "react-router-dom";
import { apiFetch } from "./utils/apiFetch";

export async function getExplorationsData() {
  return apiFetch("/explorations?limit=500");
}

export async function getExplorationsSummary(params = "") {
  const queryString = new URLSearchParams(params).toString();
  return await apiFetch(
    `/explorations/summary${queryString ? `?${queryString}` : ""}`,
  );
}

export async function getTotalExplorationsSummary(params = {}) {
  const qs = new URLSearchParams({
    fields: "_id,name,headerImage,tagline,slug,tags,numStops",
    limit: "500",
    ...params,
  });
  return await apiFetch(`/explorations?${qs}`);
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
  return await apiFetch(`/explorations/${formData._id}`, {
    method: "PATCH",
    body: JSON.stringify(formData),
  });
}

export async function deleteExploration(explorationId) {
  return await apiFetch(`/explorations/${explorationId}`, {
    method: "DELETE",
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

export async function getAllBadges() {
  return await apiFetch(`/explorations/getAllBadges`);
}

export async function validateLocation({ street, city, zipcode }) {
  return await apiFetch(`/explorations/validate-location`, {
    method: "POST",
    body: JSON.stringify({ street: street, city: city, zipcode: zipcode }),
  });
}
