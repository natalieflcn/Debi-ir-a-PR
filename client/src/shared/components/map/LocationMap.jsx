import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import styled from "styled-components";

const StyledMap = styled.div`
  height: ${({ $height }) => $height}px;
`;

const PR_START = { lat: 18.379, lng: -66.029 };

function LocationMap({ coordinates, onChange, height = 350 }) {
  console.log("location map running");
  const editingLocation = Boolean(onChange);

  const handleMoveMarker = function () {};
  return (
    <StyledMap $height={height}>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
        <Map
          mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
          defaultZoom={15}
          defaultCenter={PR_START}
        ></Map>
      </APIProvider>
    </StyledMap>
  );
}

export default LocationMap;
