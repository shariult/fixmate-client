"use server";

import { headers } from "next/headers";
import auth from "@/lib/auth";
import { cache } from "react";

const getCurrentUser = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session; // { user, session } or null
});

async function getTokenFromServer() {
  const jwtToken = await auth.api.getToken({
    headers: await headers(),
  });
  const token = jwtToken?.token;
  return token;
}

export { getCurrentUser, getTokenFromServer };
