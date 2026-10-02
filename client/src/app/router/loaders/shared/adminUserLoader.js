import { getUser } from "../../../../services/users";

export async function adminUserLoader({ params }) {
  const { userId } = params;
  // console.log(userId);
  const { data } = await getUser(userId);

  // const userHistory2 = userHistory.find((history) => history.userId === userId);
  // console.log(data.data);
  return {
    user: data.data,
    // userHistory2,
  };
}
