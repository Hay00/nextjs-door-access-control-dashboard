import { cookies } from "next/headers";
import { LoginResponse } from "./type";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GCA_DOOR_API_BASE_URL}/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    return new Response(await response.text(), {
      status: response.status,
    });
  }

  const { token }: LoginResponse = await response.json();

  cookies().set("auth_token", token, {
    // Expires in 1 day
    expires: new Date(Date.now() + 86400 * 1000),
    sameSite: "strict",
  });

  return new Response("", {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
