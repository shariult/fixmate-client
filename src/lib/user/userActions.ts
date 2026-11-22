import { getTokenFromServer } from "../authActions";
import { getTokenFromClient } from "../authActionsClient";
import { AuthUser } from "../authClient";
import { sendRequest } from "../utils";
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function getUsersAction() {
  const token = await getTokenFromServer();
  const resData = await sendRequest<(AuthUser & { _id: string })[]>(
    `${API_URL}/user`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`,
      },
    },
  );
  return resData;
}

async function updateUserRoleAction(uId: string, role: string) {
  const token = await getTokenFromClient();
  const resData = await sendRequest<AuthUser[]>(`${API_URL}/user/${uId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify({ role }),
  });
  return resData;
}

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

export { updateNewUserAction, getUsersAction, updateUserRoleAction };
