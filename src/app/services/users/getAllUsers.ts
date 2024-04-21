import { DEFAULT_OPTIONS } from "../defaultOptions";
import { UsersList } from "./types";

export default async function getUsers(): Promise<UsersList> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GCA_DOOR_API_BASE_URL}/user`,
    { ...DEFAULT_OPTIONS, cache: "no-store" }
  );
  return res.json();
}
