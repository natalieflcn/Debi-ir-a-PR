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

export const createExploration = {};

export const updateExploration = {};

export const deleteExploration = {};
