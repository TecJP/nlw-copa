import { api } from "./axios";

export async function loadData() {
  const [
    poolCountResponse,
    guessCountResponse,
    userCountResponse
  ] = await Promise.all([
    api.get("pools/count"),
    api.get("guesses/count"),
    api.get("users/count"),
  ])

  return [poolCountResponse, guessCountResponse, userCountResponse];
}