const AppError = require("../utils/appError");

const ENDPOINT = `https://maps.googleapis.com/maps/api/geocode/json`;

const PR_BOUNDS = { minLat: 17.8, maxLat: 18.6, minLng: -67.4, maxLng: -65.1 };

const inPuertoRico = ({ lat, lng }) =>
  lat >= PR_BOUNDS.minLat &&
  lat <= PR_BOUNDS.maxLat &&
  lng >= PR_BOUNDS.minLng &&
  lng <= PR_BOUNDS.maxLng;

exports.geocodeAddress = async function ({ street, city, zipcode }) {
  console.log("SERVICE: GEOCODEService");
  console.log(street, city, zipcode);

  if (!street?.trim() || !city || !zipcode)
    throw new AppError("Street, city, and zipcode are required.", 400);

  const url = new URL(ENDPOINT);
  url.searchParams.set(
    "address",
    `${street.trim()}, ${city}, PR ${String(zipcode).trim()}`,
  );
  url.searchParams.set("components", "country:PR");
  url.searchParams.set("key", process.env.GOOGLE_MAPS_KEY);

  console.log(url);
  const res = await fetch(url);

  if (!res.ok) {
    const err = await res.json();

    throw new AppError(`Geocoding Error: ${JSON.stringify(err)}`, 502);
  }

  const data = await res.json();

  if (data.status === "ZERO_RESULTS") return null;

  if (data.status !== "OK") {
    console.error("Geocoding error:", data.status, data.error_message);
    throw new AppError("Geocoding service unavailable.", 502);
  }

  const result = data.results[0];
  const loc = result.geometry.location;
  const coordinates = inPuertoRico(loc) ? { lat: loc.lat, lng: loc.lng } : null;

  return {
    // found,
    // (string) The post-processed address, formatted as a single-line address following the address formatting rules of the region where the address is located.
    formattedAddress: result?.formatted_address,

    // (object {lat, lng}) The geocoded location of the input. Using place IDs is preferred over using addresses, latitude/longitude coordinates, or plus codes.  Additionally, when a location is reverse geocoded, there is no guarantee that the returned address will match the original.
    coordinates: coordinates,

    // (string) The PlaceID of the place this input geocodes to.
    placeId: result?.place_id,

    // // (enum) The level of granularity for the post-processed address that the API can fully validate. PREMISE, PREMISE_PROXIMITY, ROUTE, OTHER...
    // granularity: verdict?.validationGranularity,

    // // (boolean) The post-processed address is considered complete if there are no unresolved tokens, no unexpected or missing address components. If unset, indicates that the value is false.
    // isComplete: !!verdict?.addressComplete,

    // // (boolean) At least one address component cannot be categorized or validated
    // hasUnconfirmedParts: !!verdict?.hasUnconfirmedComponents,
  };
};
