import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import styled from "styled-components";

const StyledMap = styled.div`
  height: ${({ $height }) => $height}px;
`;

const PR_START = { lat: 18.379, lng: -66.029 };

function LocationMap({ coordinates, onChange, height = 350 }) {
  console.log(coordinates);
  const editingLocation = Boolean(onChange);

  return (
    <StyledMap $height={height}>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
        <Map
          mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
          defaultZoom={coordinates ? 15 : 11}
          defaultCenter={coordinates ?? PR_START}
          gestureHandling="greedy"
          options={{ disableDefaultUI: true }}
          key={coordinates ? `${coordinates.lat},${coordinates.lng}` : "empty"}
          onClick={
            editingLocation
              ? (e) => e.detail.latLng && onChange(e.detail.latLng)
              : undefined
          }
        >
          {coordinates && (
            <AdvancedMarker
              position={coordinates}
              draggable={editingLocation}
              onDragEnd={(e) =>
                e.latLng &&
                onChange({ lat: e.latLng.lat(), lng: e.latLng.lng() })
              }
            />
          )}
        </Map>
      </APIProvider>
    </StyledMap>
  );
}

export default LocationMap;
