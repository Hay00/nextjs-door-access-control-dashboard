import { serverHeaders } from "../serverHeaders";
import { UsersList } from "./types";

export default async function getUsers(): Promise<UsersList> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GCA_DOOR_API_BASE_URL}/user`,
    {
      cache: "no-store",
      headers: serverHeaders(),
    }
  );
  return res.json();
}
