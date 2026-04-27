import Bold from "../components/typography/Bold";

// a small utility function
export const parseBold = function (text) {
  return text
    .split(/\*\*(.*?)\*\*/g)
    .map((part, i) => (i % 2 === 1 ? <Bold key={i}>{part}</Bold> : part));
};
