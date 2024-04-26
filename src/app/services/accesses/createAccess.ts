"use client";

import { clientHeaders } from "../clientHeaders";
import { CreateAccess } from "./types";

export default async function createAccess(id: string, access: CreateAccess) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GCA_DOOR_API_BASE_URL}/user/${id}/user-access`,
    {
      method: "POST",
      headers: clientHeaders,
      body: JSON.stringify(access),
    }
  );

  return res.statusText;
}
