import { TBooking, TPayment, TService, TServiceApproval } from "@/types";
import { getTokenFromServer } from "./authActions";
import { getTokenFromClient } from "./authActionsClient";
import { AuthUser } from "./authClient";
import { sendRequest } from "./utils";
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function listUsersAction() {
  const token = await getTokenFromServer();
  const resData = await sendRequest<AuthUser[]>(`${API_URL}/admin/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return resData;
}

async function listServicesAdminAction(status?: string) {
  const token = await getTokenFromServer();

  const res = await sendRequest<TService[]>(
    `${API_URL}/admin/services${status ? "?status=" + status : ""}`,
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

async function listPaymentsAdminAction() {
  const token = await getTokenFromServer();

  const res = await sendRequest<TPayment[]>(`${API_URL}/admin/payments/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}

async function updateUserRoleAction(uId: string, role: string) {
  const token = await getTokenFromClient();

  const resData = await sendRequest<AuthUser>(
    `${API_URL}/admin/users/${uId}/role`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ role }),
    },
  );
  return resData;
}

async function updateServiceApprovalAction(
  sId: string,
  data: TServiceApproval,
) {
  const token = await getTokenFromClient();

  const res = await sendRequest(`${API_URL}/admin/services/${sId}/approval`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify({ approvalStatus: data }),
  });

  return res;
}

async function listBookingsAdminAction(status?: string | undefined) {
  const token = await getTokenFromServer();
  const res = await sendRequest<TBooking[]>(
    `${API_URL}/admin/bookings${status ? "?status=" + status : ""}`,
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
  listUsersAction,
  listServicesAdminAction,
  listBookingsAdminAction,
  listPaymentsAdminAction,
  updateUserRoleAction,
  updateServiceApprovalAction,
};
