import { TService, TServiceApproval, TServiceInput } from "@/types";
import { sendRequest } from "./utils";
import { getTokenFromClient } from "./authActionsClient";
import { getTokenFromServer } from "./authActions";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function listFeaturedServicesAction() {
  const res = await sendRequest<TService[]>(`${API_URL}/services/featured`);
  return res;
}

async function listServicesAction(urlQuery?: string) {
  const res = await sendRequest<TService[]>(
    `${API_URL}/services?${urlQuery ?? ""}`,
  );
  return res;
}

async function listTechnicianServicesAction() {
  const token = await getTokenFromServer();
  const res = await sendRequest<TService[]>(`${API_URL}/services/technician`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}

async function getServiceAction(sId: string) {
  const res = await sendRequest<TService>(`${API_URL}/services/${sId}`);
  return res;
}

async function createServiceAction(data: TServiceInput) {
  const token = await getTokenFromClient();

  const res = await sendRequest(`${API_URL}/services`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res;
}

async function updateServiceAction(sId: string, data: TServiceInput) {
  const token = await getTokenFromClient();

  const res = await sendRequest(`${API_URL}/services/${sId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res;
}

async function destroyServiceAction(sId: string) {
  const token = await getTokenFromClient();

  const res = await sendRequest(`${API_URL}/services/${sId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });

  return res;
}

async function updateServiceAvailabilityAction(
  sId: string,
  data: { isAvailable: boolean },
) {
  const token = await getTokenFromClient();
  const res = await sendRequest(`${API_URL}/services/${sId}/availability`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res;
}

async function getServicesAdminAction() {
  const token = await getTokenFromServer();

  const res = await sendRequest<TService[]>(`${API_URL}/service/admin`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}

async function updateServiceApprovalAction(
  sId: string,
  data: TServiceApproval,
) {
  const token = await getTokenFromClient();

  const res = await sendRequest(`${API_URL}/service/${sId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify({ approval: data }),
  });

  return res;
}

export {
  listServicesAction,
  listFeaturedServicesAction,
  listTechnicianServicesAction,
  getServiceAction,
  createServiceAction,
  getServicesAdminAction,
  updateServiceAction,
  destroyServiceAction,
  updateServiceAvailabilityAction,
  updateServiceApprovalAction,
};
