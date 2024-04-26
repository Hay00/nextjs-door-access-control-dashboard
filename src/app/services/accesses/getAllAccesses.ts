"use server";

import { serverHeaders } from "../serverHeaders";
import { Accesses } from "./types";

export default async function getAllAccesses(id: string): Promise<Accesses> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GCA_DOOR_API_BASE_URL}/user/${id}/user-access`,
    {
      method: "GET",
      headers: serverHeaders(),
      cache: "no-store",
    }
  );

  return res.json();
}
