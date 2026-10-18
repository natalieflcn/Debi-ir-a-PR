import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import styled from "styled-components";
import CustomPin from "./CustomPin";

const StyledMap = styled.div`
  height: 25rem;
  /* width: 50%; */

  @media (max-width: 700px) {
    height: 20rem;
  }

  @media (max-width: 400px) {
    height: 15rem;
  }
`;

const PR_START = { lat: 18.379, lng: -66.029 };
const PR_BOUNDS = { north: 18.6, south: 17.8, east: -65.1, west: -67.4 };

function LocationMap({ coordinates, onChange, isAddressReady, width = 30 }) {
  const editingLocation = Boolean(onChange);
  const canEdit = editingLocation && isAddressReady;

  return (
    <>
      {coordinates && (
        <StyledMap>
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
            <Map
              mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
              defaultZoom={coordinates ? 15 : 10}
              minZoom={13}
              maxZoom={17}
              defaultCenter={coordinates ?? PR_START}
              gestureHandling={canEdit ? "greedy" : "cooperative"}
              disableDefaultUI
              restriction={{ latLngBounds: PR_BOUNDS, strictBounds: true }}
              key={
                coordinates ? `${coordinates.lat},${coordinates.lng}` : "empty"
              }
              onClick={
                editingLocation && isAddressReady
                  ? (e) => e.detail.latLng && onChange(e.detail.latLng)
                  : undefined
              }
            >
              {coordinates && (
                <AdvancedMarker
                  position={coordinates}
                  draggable={canEdit}
                  onDragEnd={(e) =>
                    e.latLng &&
                    onChange({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                  }
                >
                  <CustomPin />
                </AdvancedMarker>
              )}
            </Map>
          </APIProvider>
        </StyledMap>
      )}
    </>
  );
}

export default LocationMap;
