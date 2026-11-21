import { TServiceInput } from "@/types";
import { sendRequest } from "../utils";
import { getTokenFromClient } from "../authActionsClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function serviceStoreAction(data: TServiceInput) {
  const token = await getTokenFromClient();

  const res = await sendRequest(`${API_URL}/service`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res;
}

export { serviceStoreAction };
