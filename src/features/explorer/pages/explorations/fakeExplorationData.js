const fakeExplorationData = {
  id: 0,
  name: "Toa Alta Tour",
  headerImage: ["/src/assets/images/content/TEMP.png"],
  numStops: 5,
  startingCity: "Bayamon",
  tagline: "hello",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl. Lorem ipsum dolor sit amet, consectetur dipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
  locations: [
    {
      id: 1,
      name: "Rey Chino Food",
      completed: true,
      tags: ["restaurant"],
    },
    {
      id: 2,
      name: "Pool place",
      completed: false,
      tags: ["restaurant"],
    },
    {
      id: 3,
      name: "El Cafetin",
      completed: false,
      tags: ["restaurant"],
    },
    { id: 4, name: "El Yunque", completed: true, tags: ["restaurant"] },
    { id: 5, name: "El Morro", completed: false, tags: ["restaurant"] },
    {
      id: 6,
      name: "Columbian steakhouse",
      completed: true,
      tags: ["restaurant"],
    },
  ],
  images: [
    { id: 1, imageURL: "/src/assets/images/content/TEMP.png" },
    { id: 2, imageURL: "/src/assets/images/content/TEMP.png" },
    { id: 3, imageURL: "/src/assets/images/content/TEMP.png" },
  ],
  tags: [],
};

export default fakeExplorationData;
