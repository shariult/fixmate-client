"use server";

import { headers } from "next/headers";
import auth from "@/lib/auth";

async function getCurrentUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}

async function getTokenFromServer() {
  const jwtToken = await auth.api.getToken({
    headers: await headers(),
  });
  const token = jwtToken?.token;
  return token;
}

export { getCurrentUser, getTokenFromServer };
