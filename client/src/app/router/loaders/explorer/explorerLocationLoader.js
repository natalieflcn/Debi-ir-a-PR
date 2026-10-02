import { getExploration } from "../../../../services/explorations";

export async function explorerLocationLoader({ params }) {
  const { explorationId, locationId } = params;

  const { data } = await getExploration(explorationId);
  const explorationData = data.data;
  const location = explorationData.locations.find(
    (loc) => loc.slug === locationId,
  );

  // const { data: explorationProgress } = await getExplorationProgress(
  //   explorationData._id,
  // );

  // console.log(
  //   explorationProgress.data.visitLog.find(
  //     (visit) => visit.location === location._id,
  //   ),
  // );
  return {
    exploration: {
      _id: explorationData._id,
      name: explorationData.name,
      slug: explorationData.slug,
    },
    location: location,
    // userHistory: explorationProgress.data.visitLog.find(
    //   (visit) => visit.location === location._id,
    // ),
  };
}
