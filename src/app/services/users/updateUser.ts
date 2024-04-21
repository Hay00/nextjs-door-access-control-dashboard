import { DEFAULT_OPTIONS } from "../defaultOptions";
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
      headers: {
        "Content-Type": "application/json",
        ...DEFAULT_OPTIONS.headers,
      },
    }
  );

  return res.statusText;
}
