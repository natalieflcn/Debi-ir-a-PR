import { apiFetch } from "../shared/services/apiFetch";

export async function getExplorationsData() {
  return apiFetch("/explorations");
}

export async function getExplorationsSummary() {
  return await apiFetch("/explorations/summary");
}

export const getExploration = {};

export const createExploration = {};

export const updateExploration = {};

export const deleteExploration = {};
