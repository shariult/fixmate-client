import authClient from "./authClient";

async function getTokenFromClient() {
  const { data } = await authClient.token();
  const token = data?.token;
  return token;
}

export { getTokenFromClient };
