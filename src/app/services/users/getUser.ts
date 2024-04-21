import { DEFAULT_OPTIONS } from "../defaultOptions";
import { User } from "./types";

export default async function getUser(id: string): Promise<User> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GCA_DOOR_API_BASE_URL}/user/${id}`,
    { ...DEFAULT_OPTIONS, cache: "no-store" }
  );
  return res.json();
}
