"use server";
import { headers } from "next/headers";
import auth from "@/lib/auth";

export const getCurrentUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
};

export async function getTokenFromServer() {
  const jwtToken = await auth.api.getToken({
    headers: await headers(),
  });
  return jwtToken?.token;
}
