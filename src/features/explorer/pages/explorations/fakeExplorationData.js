const fakeExplorationData = {
  id: "exp_001",
  name: "Toa Alta Tour",
  tagline: "hello",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl. Lorem ipsum dolor sit amet, consectetur dipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
  startingCity: "Bayamon",
  headerImage: ["/src/assets/images/content/TEMP.png"],
  numStops: 5,
  tags: [],
  featured: false,
  badge: {
    id: "badge_toa_alta",
    name: "Toa Alta Badge",
    image: "/badges/toa-alta.png",
  },
  locations: [
    {
      id: "loc_01",
      name: "Rey Chino Food",
      completed: true,
      tags: ["restaurant"],
    },
    {
      id: "loc_02",
      name: "Pool place",
      completed: false,
      tags: ["restaurant"],
    },
    {
      id: "loc_03",
      name: "El Cafetin",
      completed: false,
      tags: ["restaurant"],
    },
    { id: "loc_04", name: "El Yunque", completed: true, tags: ["restaurant"] },
    { id: "loc_05", name: "El Morro", completed: false, tags: ["restaurant"] },
    {
      id: "loc_06",
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
};

export default fakeExplorationData;
