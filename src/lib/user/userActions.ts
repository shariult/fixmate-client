import { getTokenFromClient } from "../authActionsClient";
import { sendRequest } from "../utils";
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function updateNewUserAction() {
  const token = await getTokenFromClient();
  const resData = await sendRequest(`${API_URL}/user/update-new-user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return resData;
}

export { updateNewUserAction };
