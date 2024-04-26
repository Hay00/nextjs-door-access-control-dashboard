import { User } from "./types";

import { cookies } from "next/headers";

export default async function getUser(id: string): Promise<User> {
  const authToken = cookies().get("auth_token");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GCA_DOOR_API_BASE_URL}/user/${id}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken?.value}`,
      },
    }
  );
  return res.json();
}
