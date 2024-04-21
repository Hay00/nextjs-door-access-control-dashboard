import { DEFAULT_OPTIONS } from "../defaultOptions";
import { CreateUser } from "./types";

export default async function createUser(user: CreateUser) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GCA_DOOR_API_BASE_URL}/user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...DEFAULT_OPTIONS.headers,
      },
      body: JSON.stringify(user),
    }
  );

  return res.statusText;
}
