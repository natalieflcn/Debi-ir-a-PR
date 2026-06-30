import fakeExplorationsData from "../../../features/explorer/pages/explorations/fakeExplorationsData";

export async function explorerDashboardLoader() {
  const explorations = fakeExplorationsData;
  const profileData = {
    name: "Natalie Loader",
    title: "Ambassador",
    email: "natalie.dflcn@gmail.com",
    password: "hello123",
    dateJoined: "January 7, 2026",
  };

  return { explorations, profileData };
}
