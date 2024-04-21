import { DEFAULT_OPTIONS } from "../defaultOptions";

export default async function deleteAccess(user_id: string, day_id: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GCA_DOOR_API_BASE_URL}/user/${user_id}/user-access/${day_id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...DEFAULT_OPTIONS.headers,
      },
    }
  );

  return res.statusText;
}
