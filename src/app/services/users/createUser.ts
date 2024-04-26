"use client";

import { clientHeaders } from "../clientHeaders";
import { CreateUser } from "./types";

export default async function createUser(user: CreateUser) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GCA_DOOR_API_BASE_URL}/user`,
    {
      method: "POST",
      headers: clientHeaders,
      body: JSON.stringify(user),
    }
  );

  return res.statusText;
}
