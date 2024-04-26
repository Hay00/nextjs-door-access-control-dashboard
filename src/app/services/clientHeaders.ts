"use client";

export const clientHeaders = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer " +
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth_token="))
      ?.split("=")[1],
};
