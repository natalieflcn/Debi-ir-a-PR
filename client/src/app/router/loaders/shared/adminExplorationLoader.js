import { getExploration } from "../../../../services/explorations";

export async function adminExplorationLoader({ params }) {
  const { explorationId } = params;

  const { data } = await getExploration(explorationId);

  console.log(data);
  return { exploration: data.data };
}
