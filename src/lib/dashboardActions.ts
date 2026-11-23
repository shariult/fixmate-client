import { getTokenFromServer } from "./authActions";
import { sendRequest } from "./utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function getCustomerDashAction() {
  const token = await getTokenFromServer();
  const res = await sendRequest<{
    active: number;
    completed: number;
    total: number;
  }>(`${API_URL}/dashboard/customer`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}

async function getTechnicianDashAction() {
  const token = await getTokenFromServer();
  const res = await sendRequest<{
    totalServices: number;
    approvedServices: number;
    pendingRequests: number;
  }>(`${API_URL}/dashboard/technician`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}

async function getAdminDashAction() {
  const token = await getTokenFromServer();
  const res = await sendRequest<{
    totalUsers: number;
    totalTechnicians: number;
    pendingServices: number;
    totalRevenue: number;
    paidJobs: number;
  }>(`${API_URL}/dashboard/admin`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}

export { getCustomerDashAction, getTechnicianDashAction, getAdminDashAction };
