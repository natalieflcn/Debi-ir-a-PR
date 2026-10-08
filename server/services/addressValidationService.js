const catchAsync = require("../utils/catchAsync");

const ENDPOINT = `https://addressvalidation.googleapis.com/v1:validateAddress`;

exports.validateAddress = async function ({ street, city, zipcode }) {
  console.log("SERVICE: addressValidationService");
  console.log(street, city, zipcode);

  return "validate Address complete";
};
