import { cookies } from "next/headers";

export function serverHeaders() {
  const cookiesStore = cookies();

  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + cookiesStore.get("auth_token")?.value,
  };
}
