import { getExploration } from "../../../../services/explorations";

export async function explorerExplorationLoader({ params }) {
  const { explorationId } = params;
  console.log(explorationId);

  const { data } = await getExploration(explorationId);

  console.log(data);
  // const { data: explorationProgress } =
  // await getExplorationProgress(explorationId);

  // console.log(explorationProgress, userData);

  return {
    exploration: data.data,
    // userHistory: explorationProgress.data
  };
}
