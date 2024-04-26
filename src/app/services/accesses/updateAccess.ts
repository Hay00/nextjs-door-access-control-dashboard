"use client";

import { clientHeaders } from "../clientHeaders";
import { EditAccess } from "./types";

export default async function updateAccess(
  user_id: string,
  day_id: number,
  access: EditAccess
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GCA_DOOR_API_BASE_URL}/user/${user_id}/user-access/${day_id}`,
    {
      method: "PUT",
      headers: clientHeaders,
      body: JSON.stringify(access),
    }
  );

  return res.statusText;
}
