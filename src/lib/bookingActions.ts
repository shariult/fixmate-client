import { TBooking, TBookingInput, TBookingStatus } from "@/types";
import { sendRequest } from "./utils";
import { getTokenFromClient } from "./authActionsClient";
import { getTokenFromServer } from "./authActions";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function createBookingAction(data: TBookingInput) {
  const token = await getTokenFromClient();

  const res = await sendRequest<TBooking>(`${API_URL}/bookings/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res;
}

async function listCustomerBookingsAction() {
  const token = await getTokenFromServer();
  const res = await sendRequest<TBooking[]>(`${API_URL}/bookings/my`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}

async function listTechnicianBookingsAction() {
  const token = await getTokenFromServer();
  const res = await sendRequest<TBooking[]>(`${API_URL}/bookings/technician`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}

async function cancelBookingAction(bId: string) {
  const token = await getTokenFromClient();
  const res = await sendRequest<TBooking[]>(
    `${API_URL}/bookings/${bId}/cancel`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`,
      },
    },
  );
  return res;
}

async function updateBookingStatusAction(
  bId: string,
  data: { status: TBookingStatus; finalAmount?: number },
) {
  const token = await getTokenFromClient();
  const res = await sendRequest<TBooking[]>(
    `${API_URL}/bookings/${bId}/status`,
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

async function getBookingAction(bId: string) {
  const token = await getTokenFromServer();

  const res = await sendRequest<TBooking>(`${API_URL}/bookings/${bId}`, {
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
  data: { paymentStatus?: "paid" | "unpaid" } | TBooking,
) {
  const token = await getTokenFromServer();

  const res = await sendRequest(`${API_URL}/bookings/${bId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res;
}

export {
  createBookingAction,
  listCustomerBookingsAction,
  cancelBookingAction,
  listTechnicianBookingsAction,
  updateBookingStatusAction,
  getBookingAction,
  updateBookingAction,
};
