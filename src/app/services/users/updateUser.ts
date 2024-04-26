"use client";

import { clientHeaders } from "../clientHeaders";
import { EditUser } from "./types";

interface UpdateUserProps {
  id: number;
  user: EditUser;
}

export default async function updateUser({ id, user }: UpdateUserProps) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GCA_DOOR_API_BASE_URL}/user/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(user),
      headers: clientHeaders,
    }
  );

  return res.statusText;
}
