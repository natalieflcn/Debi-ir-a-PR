const AppError = require("../utils/appError");

const ENDPOINT = `https://addressvalidation.googleapis.com/v1:validateAddress`;

exports.validateAddress = async function ({ street, city, zipcode }) {
  console.log("SERVICE: addressValidationService");
  console.log(street, city, zipcode);

  const res = await fetch(`${ENDPOINT}?key=${process.env.GOOGLE_MAPS_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      address: {
        regionCode: "PR",
        addressLines: [street],
        locality: city,
        postalCode: zipcode,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.json();

    console.error(
      "Address Validation error:",
      JSON.stringify(err.error, null, 2),
    );

    throw new AppError(
      `Address Validation Error: ${JSON.stringify(err.error)}`,
      502,
    );
  }

  const { result } = await res.json();
  const { verdict, geocode, address } = result;

  return {
    // (string) The post-processed address, formatted as a single-line address following the address formatting rules of the region where the address is located.
    formattedAddress: address?.formattedAddress,

    // (object {lat, lng}) The geocoded location of the input. Using place IDs is preferred over using addresses, latitude/longitude coordinates, or plus codes.  Additionally, when a location is reverse geocoded, there is no guarantee that the returned address will match the original.
    coordinates: geocode?.location
      ? { lat: geocode.location.latitude, lng: geocode.location.longitude }
      : null,

    // (string) The PlaceID of the place this input geocodes to.
    placeId: geocode?.placeId,

    // (enum) The level of granularity for the post-processed address that the API can fully validate. PREMISE, PREMISE_PROXIMITY, ROUTE, OTHER...
    granularity: verdict?.validationGranularity,

    // (boolean) The post-processed address is considered complete if there are no unresolved tokens, no unexpected or missing address components. If unset, indicates that the value is false.
    isComplete: !!verdict?.addressComplete,

    // (boolean) At least one address component cannot be categorized or validated
    hasUnconfirmedParts: !!verdict?.hasUnconfirmedComponents,
  };
};
