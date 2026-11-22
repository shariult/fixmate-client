import { TBooking, TBookingInput, TBookingStatus } from "@/types";
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

async function showBookingAction(bId: string) {
  const token = await getTokenFromServer();

  const res = await sendRequest<TBooking>(`${API_URL}/booking/${bId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}

async function updateBookingAction(
  bId: string,
  data: { paymentId?: string | null; paymentDate?: Date | null },
) {
  const token = await getTokenFromServer();

  const res = await sendRequest(`${API_URL}/booking/${bId}`, {
    method: "PUT",
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

async function cancelMyBookingAction(bId: string) {
  const token = await getTokenFromClient();
  const res = await sendRequest<TBooking[]>(
    `${API_URL}/booking/${bId}/cancel`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`,
      },
    },
  );
  return res;
}

async function getMyRequestsAction() {
  const token = await getTokenFromServer();
  const res = await sendRequest<TBooking[]>(`${API_URL}/my-requests`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}

async function updateRequestStatusAction(
  bId: string,
  data: { status: TBookingStatus; price?: number },
) {
  const token = await getTokenFromClient();
  const res = await sendRequest<TBooking[]>(
    `${API_URL}/booking/${bId}/status`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify(data),
    },
  );
  return res;
}

async function getUserPayments() {
  const token = await getTokenFromServer();
  const res = await sendRequest<TBooking[]>(
    `${API_URL}/booking/payments?filter=paid`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`,
      },
    },
  );
  return res;
}

export {
  storeBookingAction,
  showBookingAction,
  updateBookingAction,
  getMyBookingsAction,
  cancelMyBookingAction,
  getMyRequestsAction,
  updateRequestStatusAction,
  getUserPayments,
};
