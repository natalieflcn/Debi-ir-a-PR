import fakeExplorationLocationData from "../../../features/explorer/pages/explorations/fakeExplorationLocationData";
import { getExploration } from "../../../services/explorations";

export async function adminLocationLoader({ params }) {
  const { explorationId, locationId } = params;

  const { data } = await getExploration(explorationId);
  const explorationData = data.data;
  console.log(data.data);
  console.log(locationId);
  const location = explorationData.locations.find(
    (loc) => loc.slug === locationId,
  );

  console.log(location);

  return {
    exploration: { name: explorationData.name, slug: explorationData.slug },
    location: location,
  };
}
