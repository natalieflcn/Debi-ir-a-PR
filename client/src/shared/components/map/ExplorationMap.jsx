import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import styled from "styled-components";
import CustomPin from "./CustomPin";

const StyledMap = styled.div`
  height: ${({ $height }) => $height}px;
`;

const PR_BOUNDS = { north: 18.6, south: 17.8, east: -65.1, west: -67.4 };

function calculateMapBounds(coordinates) {
  if (!coordinates?.length) return null;

  const lats = coordinates.map((coord) => coord.location?.lat);
  const lngs = coordinates.map((coord) => coord.location?.lng);

  return {
    north: Math.max(...lats),
    south: Math.min(...lats),
    east: Math.max(...lngs),
    west: Math.min(...lngs),
  };
}

function ExplorationMap({
  coordinates,

  height = 550,
}) {
  const filteredCoordinates = coordinates.filter((coord) => coord != null);

  if (filteredCoordinates.length === 0) return null;
  const isSingle = filteredCoordinates.length === 1;

  return (
    <>
      {filteredCoordinates && (
        <StyledMap $height={height}>
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
            <Map
              mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
              defaultZoom={15}
              {...(isSingle
                ? {
                    defaultCenter: filteredCoordinates[0].location,
                    defaultZoom: 15,
                  }
                : {
                    defaultBounds: {
                      ...calculateMapBounds(filteredCoordinates),
                      padding: 60,
                    },
                  })}
              // minZoom={}
              maxZoom={17}
              gestureHandling={isSingle ? "cooperative" : "greedy"}
              disableDefaultUI
              restriction={{ latLngBounds: PR_BOUNDS, strictBounds: true }}
              key={filteredCoordinates
                .map((coord) => `${coord.location.lat},${coord.location.lng}`)
                .join("|")}
            >
              {filteredCoordinates.map((loc, i) => {
                if (!loc?.location) return null;

                return (
                  <AdvancedMarker key={i} position={loc?.location}>
                    <CustomPin />
                  </AdvancedMarker>
                );
              })}
            </Map>
          </APIProvider>
        </StyledMap>
      )}
    </>
  );
}

export default ExplorationMap;
