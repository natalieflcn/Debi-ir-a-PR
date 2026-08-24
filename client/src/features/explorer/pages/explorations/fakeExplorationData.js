const fakeExplorationData = {
  id: "exp_001",
  name: "Toa Alta Tour",
  tagline: "hello",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl. Lorem ipsum dolor sit amet, consectetur dipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
  startingCity: "Bayamon",
  headerImage: ["/src/assets/images/content/TEMP.png"],
  numStops: 5,
  tags: ["city"],
  featured: false,
  badge: {
    id: "badge_toa_alta",
    name: "Toa Alta Badge",
    image: "/badges/toa-alta.png",
  },
  locations: [
    {
      id: "loc_001",
      name: "Rey Chino Food",
      completed: true,
      tags: ["restaurant"],
    },
    {
      id: "loc_002",
      name: "Pool place",
      completed: false,
      tags: ["bar"],
    },
    {
      id: "loc_003",
      name: "El Cafetin",
      completed: false,
      tags: ["restaurant"],
    },
    { id: "loc_004", name: "El Yunque", completed: true, tags: ["landscape"] },
    { id: "loc_005", name: "El Morro", completed: false, tags: ["landmark"] },
    {
      id: "loc_006",
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
  createdBy: "user_001", // FK → users (ambassador or admin)
  createdAt: "2025-01-10",
  updatedBy: "user_003", // FK → users (whoever last edited)
  updatedAt: "2025-06-20",
};

export default fakeExplorationData;
