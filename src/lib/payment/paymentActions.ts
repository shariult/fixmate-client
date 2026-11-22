import { TPayment } from "@/types";
import { sendRequest } from "../utils";
import { getTokenFromServer } from "../authActions";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function storePaymentAction(data: TPayment) {
  const token = await getTokenFromServer();
  const resData = await sendRequest<TPayment>(`${API_URL}/payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return resData;
}

async function getPaymentIndexAction() {
  const token = await getTokenFromServer();

  const res = await sendRequest<TPayment[]>(`${API_URL}/payment`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}
export { storePaymentAction, getPaymentIndexAction };
