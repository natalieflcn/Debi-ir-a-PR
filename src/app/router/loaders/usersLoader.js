const fakeUsers = [
  {
    id: 0,
    name: "Natalie Falcon",
    userType: "explorer",
    title: "Explorer Title",
    email: "natalie.dflcn@gmail.com",
    dateJoined: "January 17, 2025",
    action: "View",
  },
  {
    id: 1,
    name: "Alethia Ragland",
    userType: "ambassador",
    title: "Ambassador",
    email: "thearagland@gmail.com",
    dateJoined: "June 23, 2024",
    action: "View",
  },
  {
    id: 2,
    name: "Jorge Gonzalez",
    userType: "explorer",
    title: "Explorer Title",
    email: "genioa@gmail.com",
    explorationsCompleted: 6,
    dateJoined: "March 6, 2023",
    action: "View",
  },
  {
    id: 3,
    name: "Natalie Falcon",
    userType: "explorer",
    title: "Explorer Title",
    email: "natalie.dflcn@gmail.com",
    dateJoined: "January 17, 2025",
    action: "View",
  },
  {
    id: 4,
    name: "Alethia Ragland",
    userType: "ambassador",
    title: "Explorer Title",
    email: "thearagland@gmail.com",
    dateJoined: "June 23, 2024",
    action: "View",
  },
  {
    id: 5,
    name: "Jorge Gonzalez",
    userType: "explorer",
    title: "Explorer Title",
    email: "genioa@gmail.com",
    explorationsCompleted: 6,
    dateJoined: "March 6, 2023",
    action: "View",
  },
];

export async function usersLoader() {
  return { users: fakeUsers };
}
