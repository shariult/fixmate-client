import { getTokenFromClient } from "./authActionsClient";
import { AuthUser } from "./authClient";
import { sendRequest } from "./utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function updateNewUserAction() {
  const token = await getTokenFromClient();
  const resData = await sendRequest(`${API_URL}/users/update-new-user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return resData;
}

export { updateNewUserAction };
