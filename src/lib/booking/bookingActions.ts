import { TBooking, TBookingInput } from "@/types";
import { sendRequest } from "../utils";
import { getTokenFromClient } from "../authActionsClient";
import { getTokenFromServer } from "../authActions";
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function storeBookingAction(data: TBookingInput) {
  const token = await getTokenFromClient();

  const res = await sendRequest(`${API_URL}/booking/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res;
}

async function getMyBookingsAction() {
  const token = await getTokenFromServer();
  const res = await sendRequest<TBooking[]>(`${API_URL}/my-bookings`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}

export { storeBookingAction, getMyBookingsAction };
