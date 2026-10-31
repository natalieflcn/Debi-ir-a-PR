import { getExploration } from "../../../../services/explorations";

export async function explorerExplorationLoader({ params }) {
  const { explorationId } = params;

  const { data } = await getExploration(explorationId);

  

  return {
    exploration: data.data,
    
  };
}
