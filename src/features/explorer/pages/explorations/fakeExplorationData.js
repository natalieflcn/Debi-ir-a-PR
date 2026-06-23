const fakeExplorationData = {
  id: 0,
  explorationName: "Toa Alta Tour",
  headerImage: "/src/assets/images/content/TEMP.png",
  numStops: 5,
  startLocation: "Toa Alta",
  shortDescription: "hello",
  longDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl. Lorem ipsum dolor sit amet, consectetur dipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
  locations: [
    {
      id: 1,
      locationName: "Rey Chino Food",
      completed: true,
      tags: ["restaurant"],
    },
    {
      id: 2,
      locationName: "Pool place",
      completed: false,
      tags: ["restaurant"],
    },
    {
      id: 3,
      locationName: "El Cafetin",
      completed: false,
      tags: ["restaurant"],
    },
    { id: 4, locationName: "El Yunque", completed: true, tags: ["restaurant"] },
    { id: 5, locationName: "El Morro", completed: false, tags: ["restaurant"] },
    {
      id: 6,
      locationName: "Columbian steakhouse",
      completed: true,
      tags: ["restaurant"],
    },
  ],
  images: [
    { id: 1, imageURL: "/src/assets/images/content/TEMP.png" },
    { id: 2, imageURL: "/src/assets/images/content/TEMP.png" },
    { id: 3, imageURL: "/src/assets/images/content/TEMP.png" },
  ],
};

export default fakeExplorationData;
