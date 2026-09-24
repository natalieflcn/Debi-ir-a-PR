import Bold from "../components/typography/Bold";

// a small utility function
export const parseBold = function (text) {
  return text
    .split(/\*\*(.*?)\*\*/g)
    .map((part, i) => (i % 2 === 1 ? <Bold key={i}>{part}</Bold> : part));
};

export const formatDate = function (ISOString) {
  const date = new Date(ISOString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};

export const capitalize = function (word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
};

export const verifyPRZipcode = function (zipcode) {
  const prZipRegex = /^(00[67]\d{2}|009\d{2})(?:-\d{4})?$/;

  return prZipRegex.test(zipcode);
};
