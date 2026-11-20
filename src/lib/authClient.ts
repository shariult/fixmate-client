import { createAuthClient } from "better-auth/react";
import {
  usernameClient,
  jwtClient,
  inferAdditionalFields,
} from "better-auth/client/plugins";
import type auth from "./auth";

const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_AUTH_URL as string,
  plugins: [
    usernameClient(),
    jwtClient(),
    inferAdditionalFields<typeof auth>(),
  ],
});

export type AuthUser = typeof authClient.$Infer.Session.user;
export default authClient;
