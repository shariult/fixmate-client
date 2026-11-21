import { TService, TServiceInput } from "@/types";
import { sendRequest } from "../utils";
import { getTokenFromClient } from "../authActionsClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function serviceIndexAction(urlQuery?: string) {
  let url = urlQuery ? `${API_URL}/service${urlQuery}` : `${API_URL}/service`;
  const res = await sendRequest<TService[]>(url);
  return res;
}

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

async function serviceShowAction(sId: string) {
  const res = await sendRequest<TService>(`${API_URL}/service/${sId}`);
  return res;
}

export { serviceIndexAction, serviceStoreAction, serviceShowAction };
