import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import styled from "styled-components";
import CustomPin from "./CustomPin";

const StyledMap = styled.div`
  height: ${({ $height }) => $height}px;
`;

const PR_BOUNDS = { north: 18.6, south: 17.8, east: -65.1, west: -67.4 };

function calculateMapBounds(coordinates) {
  const lats = coordinates.map((coord) => coord.location.lat);
  const lngs = coordinates.map((coord) => coord.location.lng);

  return {
    north: Math.max(...lats),
    south: Math.min(...lats),
    east: Math.max(...lngs),
    west: Math.min(...lngs),
  };
}

function ExplorationMap({
  coordinates,

  height = 350,
}) {
  console.log(coordinates);

  if (!coordinates?.length) return null;

  const isSingle = coordinates.length === 1;

  return (
    <>
      {coordinates && (
        <StyledMap $height={height}>
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
            <Map
              mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
              defaultZoom={15}
              {...(isSingle
                ? { defaultCenter: coordinates[0].location, defaultZoom: 15 }
                : {
                    defaultBounds: {
                      ...calculateMapBounds(coordinates),
                      padding: 60,
                    },
                  })}
              minZoom={12}
              maxZoom={17}
              gestureHandling={isSingle ? "cooperative" : "greedy"}
              disableDefaultUI
              restriction={{ latLngBounds: PR_BOUNDS, strictBounds: true }}
              key={coordinates
                .map((coord) => `${coord.location.lat},${coord.location.lng}`)
                .join("|")}
            >
              {coordinates.map((loc, i) => (
                <AdvancedMarker key={i} position={loc.location}>
                  <CustomPin />
                </AdvancedMarker>
              ))}
            </Map>
          </APIProvider>
        </StyledMap>
      )}
    </>
  );
}

export default ExplorationMap;
