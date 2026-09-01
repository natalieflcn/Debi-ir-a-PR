const fakeExplorationsData = [
  {
    id: "exp_001",
    name: "Toa Alta Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
    numStops: 5,
    cities: ["Bayamon"],
    locationIds: ["loc_001", "loc_002"],
    tags: ["restaurants", "city"],
    featured: true,
    createdBy: "user_002", // FK → users (ambassador or admin)
    createdAt: "2025-01-10",
    updatedBy: "user_003", // FK → users (whoever last edited)
    updatedAt: "2025-06-20",
  },
  {
    id: "exp_002",
    name: "Bayamon Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
    numStops: 7,
    cities: ["Bayamon", "San Juan"],
    locationIds: ["loc_003", "loc_004", "loc_005"],
    tags: ["restaurants", "city", "landscapes"],
    featured: true,
    createdBy: "user_001", // FK → users (ambassador or admin)
    createdAt: "2025-01-10",
    updatedBy: "user_003", // FK → users (whoever last edited)
    updatedAt: "2025-06-20",
  },
  {
    id: "exp_003",
    name: "San Juan Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
    numStops: 11,
    cities: ["Bayamon", "San Juan"],
    tags: ["restaurants", "city", "landscapes", "landmarks"],
    locationIds: ["loc_006", "loc_007"],
    featured: true,
    createdBy: "user_002", // FK → users (ambassador or admin)
    createdAt: "2025-01-10",
    updatedBy: "user_003", // FK → users (whoever last edited)
    updatedAt: "2025-06-20",
  },
  {
    id: "exp_004",
    name: "Toa Alta Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
    numStops: 5,
    cities: ["Bayamon"],
    tags: ["restaurants", "city"],
    locationIds: ["loc_008", "loc_009", "loc_010"],
    featured: true,
    createdBy: "user_001", // FK → users (ambassador or admin)
    createdAt: "2025-01-10",
    updatedBy: "user_003", // FK → users (whoever last edited)
    updatedAt: "2025-06-20",
  },
  {
    id: "exp_005",
    name: "Bayamon Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
    numStops: 7,
    cities: ["Bayamon"],
    tags: ["restaurants", "city", "landscapes"],
    locationIds: ["loc_011", "loc_012"],
    featured: false,
    createdBy: "user_002", // FK → users (ambassador or admin)
    createdAt: "2025-01-10",
    updatedBy: "user_003", // FK → users (whoever last edited)
    updatedAt: "2025-06-20",
  },
  {
    id: "exp_006",
    name: "San Juan Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
    numStops: 11,
    cities: ["Bayamon", "San Juan"],
    tags: ["restaurants", "city", "landscapes", "landmarks"],
    locationIds: ["loc_013"],
    featured: false,
    createdBy: "user_002", // FK → users (ambassador or admin)
    createdAt: "2025-01-10",
    updatedBy: "user_003", // FK → users (whoever last edited)
    updatedAt: "2025-06-20",
  },
  {
    id: "exp_007",
    name: "Toa Alta Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
    numStops: 5,
    cities: ["Bayamon"],
    tags: ["restaurants", "city"],
    locationIds: ["loc_014", "loc_015", "loc_016"],
    featured: true,
    createdBy: "user_001", // FK → users (ambassador or admin)
    createdAt: "2025-01-10",
    updatedBy: "user_003", // FK → users (whoever last edited)
    updatedAt: "2025-06-20",
  },
  {
    id: "exp_008",
    name: "Bayamon Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
    numStops: 7,
    cities: ["Bayamon"],
    tags: ["restaurants", "city", "landscapes"],
    locationIds: ["loc_017", "loc_018"],
    featured: false,
    createdBy: "user_002", // FK → users (ambassador or admin)
    createdAt: "2025-01-10",
    updatedBy: "user_003", // FK → users (whoever last edited)
    updatedAt: "2025-06-20",
  },
  {
    id: "exp_009",
    name: "San Juan Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
    numStops: 11,
    cities: ["Bayamon"],
    tags: ["restaurants", "city", "landscapes", "landmarks"],
    locationIds: ["loc_019", "loc_020", "loc_021"],
    featured: false,
    createdBy: "user_002", // FK → users (ambassador or admin)
    createdAt: "2025-01-10",
    updatedBy: "user_003", // FK → users (whoever last edited)
    updatedAt: "2025-06-20",
  },
  {
    id: "exp_010",
    name: "Toa Alta Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
    numStops: 5,
    cities: ["Bayamon"],
    tags: ["restaurants", "city"],
    locationIds: ["loc_022", "loc_023"],
    featured: false,
    createdBy: "user_001", // FK → users (ambassador or admin)
    createdAt: "2025-01-10",
    updatedBy: "user_003", // FK → users (whoever last edited)
    updatedAt: "2025-06-20",
  },
  {
    id: "exp_011",
    name: "Bayamon Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
    numStops: 7,
    cities: ["Bayamon"],
    tags: ["restaurants", "city", "landscapes"],
    locationIds: ["loc_024"],
    featured: false,
    createdBy: "user_002", // FK → users (ambassador or admin)
    createdAt: "2025-01-10",
    updatedBy: "user_003", // FK → users (whoever last edited)
    updatedAt: "2025-06-20",
  },
  {
    id: "exp_012",
    name: "San Juan Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius egestas elit. Nam maximus mi vel lacus pulvinar, non blandit lorem venenatis. Sed suscipit leo viverra, condimentum velit non, viverra nisl.",
    numStops: 11,
    cities: ["Bayamon", "San Juan"],
    tags: ["restaurants", "city", "landscapes", "landmarks"],
    locationIds: ["loc_025"],
    featured: false,
    createdBy: "user_002", // FK → users (ambassador or admin)
    createdAt: "2025-01-10",
    updatedBy: "user_003", // FK → users (whoever last edited)
    updatedAt: "2025-06-20",
  },
];

export default fakeExplorationsData;

// // bad bunny exp (7 stops)
// - ojo de agua (vega baja, sightseeing)
// - playa puerto nuevo (beach)
// - el boricua (bar)
// - el pozo de jacinto (sightseeing)
// - la casita blanca (san juan, santurce)
// - casa historia de la musica en cayey (museum)
// - habitante cafe (cafe)

// // rauw alejandro exp (6 stops)
// - culebrita beach (beach, culebra)
// - bar 0.2 (bar, san juan)
// - canon blanco (river, utuado)
// - ecos sports bar (bar, san juan)
// - kiosko el boricua (food)
// - asador san miguel (food, naranjito)

// // marc anthony exp (5 or 9 stops)
// - la factoria (san juan)
// - musica bar and lounge (calle loiza)
// - antaños bar and tapas
// - paseo de la salsa
// - la guancha

// // san juan exp (8 stops)
// - paseo de la princesa (outdoors)
// - el hamburguito (food)
// - escambron beach (beach)
// - castillo san felipe del morro (landmark)
// - plaza las americas (shopping)
// - museo de arte de puerto rico (museo)
// - morenos spot (bar)
// - la placita (nightlife)

// // city corredor exp (5 stops)
// - parque luis munoz rivera
// - paseo del morro
// - canal and parque central path
// - tablado del piñones
// - ashford avenue
// - pista recreativa
