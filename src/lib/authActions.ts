import "server-only";
import { cache } from "react";
import { headers } from "next/headers";
import auth from "@/lib/auth";

export const getCurrentUser = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
});

export async function getTokenFromServer() {
  const jwtToken = await auth.api.getToken({
    headers: await headers(),
  });
  return jwtToken?.token;
}
