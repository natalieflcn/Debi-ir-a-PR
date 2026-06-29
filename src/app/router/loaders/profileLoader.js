const fakeProfileData = {
  name: "Natalie Falcon",
  userEmail: "natalie.dflcn@gmail.com",
  password: "hello123",
};

export async function profileLoader() {
  return { userData: fakeProfileData };
}
