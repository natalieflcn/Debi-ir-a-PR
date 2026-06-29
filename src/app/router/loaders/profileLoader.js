const fakeProfileData = {
  name: "Natalie Loader",
  title: "Ambassador",
  email: "natalie.dflcn@gmail.com",
  password: "hello123",
  dateJoined: "January 7, 2026",
};

export async function profileLoader() {
  return fakeProfileData;
}
