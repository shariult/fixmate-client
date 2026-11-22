import {
  TService,
  TServiceApproval,
  TServiceInput,
  TServiceStatus,
} from "@/types";
import { sendRequest } from "../utils";
import { getTokenFromClient } from "../authActionsClient";
import { getTokenFromServer } from "../authActions";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

async function getServicesAction(urlQuery?: string) {
  let url = urlQuery ? `${API_URL}/service${urlQuery}` : `${API_URL}/service`;
  const res = await sendRequest<TService[]>(url);
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

async function storeServiceAction(data: TServiceInput) {
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

async function showServiceAction(sId: string) {
  const res = await sendRequest<TService>(`${API_URL}/service/${sId}`);
  return res;
}

async function updateServiceAction(sId: string, data: TServiceInput) {
  const token = await getTokenFromClient();

  const res = await sendRequest(`${API_URL}/service/${sId}`, {
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

  const res = await sendRequest(`${API_URL}/service/${sId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });

  return res;
}

async function getMyServicesAction() {
  const token = await getTokenFromServer();
  const res = await sendRequest<TService[]>(`${API_URL}/my-services`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return res;
}

async function changeServiceStatusAction(
  sId: string,
  data: { status: TServiceStatus },
) {
  const token = await getTokenFromClient();
  const res = await sendRequest(`${API_URL}/service/${sId}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data),
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
  getServicesAction,
  getServicesAdminAction,
  storeServiceAction,
  showServiceAction,
  updateServiceAction,
  destroyServiceAction,
  getMyServicesAction,
  changeServiceStatusAction,
  updateServiceApprovalAction,
};
