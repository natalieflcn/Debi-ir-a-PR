import fakeExplorationLocationData from "../../../features/explorer/pages/explorations/fakeExplorationLocationData";
import { getExploration } from "../../../services/explorations";

export async function adminLocationLoader({ params }) {
  const { explorationId, locationId } = params;

  const { data } = await getExploration(explorationId);
  const explorationData = data.data;

  const location = explorationData.locations.find(
    (loc) => loc.slug === locationId,
  );

  return {
    exploration: { name: explorationData.name, slug: explorationData.slug },
    location: location,
  };
}
